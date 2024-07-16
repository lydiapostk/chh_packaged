from flask import Blueprint, jsonify, request
from api.database import db
from api.models import CrsRos

crs_ros_handler = Blueprint('crs_ros_handler', __name__)

@crs_ros_handler.route('/get_all_crs_ros_details', methods=['GET'])
def get_all_crs_ros_details():
    crs_ros = CrsRos.query.order_by(CrsRos.crs_name).all()
    return jsonify(crs_ros)

@crs_ros_handler.route('/get_active_crs_names', methods=['GET'])
def get_active_crs_names():
    active_crs_ro_names = CrsRos.query.filter(CrsRos.is_active).with_entities(CrsRos.crs_name).order_by(CrsRos.crs_name).all()
    active_crs_ro_names = list(zip(*active_crs_ro_names))[0]
    return jsonify(active_crs_ro_names)

@crs_ros_handler.route('/create_crs_detail', methods=['POST'])
def insert_crs():
    crs = request.get_json()
    entry = CrsRos(crs)
    db.session.add(entry)
    db.session.commit()
    # Return updated CRS ROs
    return jsonify(CrsRos.query.all())

@crs_ros_handler.route('/edit_crs_detail', methods=['POST'])
def update_crs_detail():
    edited_crs = request.get_json()
    target_name = edited_crs['crs_name']
    del edited_crs['crs_name']
    CrsRos.query.filter_by(crs_name=target_name).update(edited_crs)
    db.session.commit()
    # Return updated CRS ROs
    return jsonify(CrsRos.query.all())

@crs_ros_handler.route('/delete_crs', methods=['POST'])
def delete_crs_by_name():
    target_name = request.get_json()['crs_name']
    entry = CrsRos.query.filter_by(crs_name=target_name).first()
    db.session.delete(entry)
    db.session.commit()
    # Return updated CRS ROs
    return jsonify(CrsRos.query.all())