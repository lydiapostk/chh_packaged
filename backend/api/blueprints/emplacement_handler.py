import pandas as pd
import numpy as np

from flask import Blueprint, json, jsonify, request
from api.blueprints.settings_handler import fetch_languages
from api.database import db
from api.models import CrsRos
from optim_model.count_crs_caseloads import count_caseload
from optim_model.generate_emplacement import generate_emplacement
from optim_model.process_emplacement_list import clean_sups_data, filter_leaving_crs_sups

emplacement_handler = Blueprint('emplacement_handler', __name__)

@emplacement_handler.route('/filter_supervisees', methods=['POST'])
def filter_supervisees():
    # Read incoming data
    data = request.get_json()
    target_month = data['month']
    target_year = data['year']
    crs_database = data['crs_database']
    emplacement_list = data['emplacement_list']
    df_crs_info = pd.DataFrame(data['crs_info'])
    df_crs_database = pd.DataFrame(crs_database)
    # Get language mapping
    json_language_keys = fetch_languages()
    languages_keys = {
        item["short_form"]: item["language"]
        for item in json_language_keys.get_json()
    }
    # Filter supervisees to be considered in this month's emplacement
    df_new_sups = clean_sups_data(pd.DataFrame(emplacement_list), targetMonth=target_month, targetYear=target_year)
    df_leaving_sups = filter_leaving_crs_sups(df_crs_info, df_crs_database, target_month, target_year, languages_keys)
    df_all_sups_to_emplace = pd.concat([df_new_sups, df_leaving_sups], axis=0).replace({np.nan:None})
    df_all_sups_to_emplace[['is_lcm_case','for_model','sexual_alert','violent_alert']] \
        = df_all_sups_to_emplace[['is_lcm_case','for_model','sexual_alert','violent_alert']].astype(bool)
    # Count caseload of CRS
    caseloads = count_caseload(crs_database=df_crs_database,crs_names=df_crs_info['crs_name'],current_month=target_month,current_year=target_year)
    df_crs_info = df_crs_info.merge(caseloads, how='left', left_on='crs_name', right_index=True)
    df_crs_info['old_caseload'] = df_crs_info['old_caseload'].fillna(0)
    emplacement_crs_sups_info = {
        'sups': df_all_sups_to_emplace.to_json(orient="records"),
        'crs': df_crs_info.to_json(orient='records'),
    }
    return jsonify(emplacement_crs_sups_info)

@emplacement_handler.route('/emplace_chh_supervisees', methods=['POST'])
def emplace_chh_supervisees():
    # Read incoming data
    data = request.get_json()
    df_crs_info = pd.DataFrame(data['crs_info'])
    df_chh_supervisees_info = pd.DataFrame(data['chh_supervisees_info'])
    sups_details = df_chh_supervisees_info.set_index('name').drop(columns=['crs_name'])
    df_crs_info = df_crs_info.merge(pd.DataFrame(CrsRos.query.filter_by(is_active=True).all()), how='left', on='crs_name').set_index('crs_name')
    df_crs_results, df_sups_results = generate_emplacement(sups_details=sups_details, crs_details=df_crs_info)
    emplacement_result = {
        'sups': df_sups_results.reset_index().to_json(orient='records'),
        'crs': df_crs_results.reset_index().to_json(orient='records'),
    }
    return jsonify(emplacement_result)
