from flask import Flask

from api.blueprints.crs_ros_handler import crs_ros_handler
from api.blueprints.emplacement_handler import emplacement_handler
from api.blueprints.settings_handler import settings_handler
from api.database import db

def create_app():
    app = Flask(__name__)
    app.config.from_object('api.config')
    db.init_app(app)

    app.register_blueprint(crs_ros_handler)
    app.register_blueprint(emplacement_handler)
    app.register_blueprint(settings_handler)

    return app