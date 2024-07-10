from flask import Blueprint, jsonify, request
from api.database import db
from api.models import Languages, Locations


settings_handler = Blueprint('settings_handler', __name__)

@settings_handler.route('/fetch_languages_and_locations', methods=['GET', 'POST'])
def fetch_languages_and_locations():
    return jsonify({
        "locations": Locations.query.all(),
        "languages": Languages.query.all(),
    })

@settings_handler.route('/fetch_languages', methods=['GET', 'POST'])
def fetch_languages():
    return jsonify(Languages.query.all())

@settings_handler.route('/upsert_language', methods=['POST'])
def upsert_language():
    language_info = request.get_json()
    targetLanguage = language_info['language']
    maybe_entry = Languages.query.filter_by(language=targetLanguage)
    if maybe_entry.first() is None:
        entry = Languages(language_info)
        db.session.add(entry)
    else:
        maybe_entry.update(language_info)
        entry = maybe_entry.first()
    db.session.commit()
    return jsonify(Languages.query.all())

@settings_handler.route('/delete_language', methods=['POST'])
def delete_language():
    targetLanguage = request.get_json()['language']
    entry = Languages.query.filter_by(language=targetLanguage).first()
    db.session.delete(entry)
    db.session.commit()
    # Return updated Languages
    return jsonify(Languages.query.all())

@settings_handler.route('/fetch_locations', methods=['GET', 'POST'])
def fetch_locations():
    return jsonify(Locations.query.all())

@settings_handler.route('/upsert_location', methods=['POST'])
def upsert_location():
    target_location = request.get_json()['location']
    maybe_entry = Locations.query.filter_by(location=target_location)
    if maybe_entry.first() is None:
        entry = Locations(location=target_location)
        db.session.add(entry)
        db.session.commit()
    return jsonify(Locations.query.all())

@settings_handler.route('/delete_location', methods=['POST'])
def delete_location():
    target_location = request.get_json()['location']
    entry = Locations.query.filter_by(location=target_location).first()
    db.session.delete(entry)
    db.session.commit()
    return jsonify(Locations.query.all())
