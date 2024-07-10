import os

basedir = os.path.abspath(os.path.dirname(__file__))
parentdir = os.path.dirname(basedir)

SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(parentdir, 'database.db')
SQLALCHEMY_TRACK_MODIFICATIONS = False