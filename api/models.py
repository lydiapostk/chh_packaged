from api.database import db
from dataclasses import dataclass

@dataclass
class CrsRos(db.Model):
    __tablename__ = "crs_ros"
    crs_name : str = db.Column(db.String, primary_key = True, nullable=False)
    gender : str = db.Column(db.String(0), nullable=False) # 'M' or 'F'
    able_to_take_penal : bool = db.Column(db.Boolean, nullable=False)
    able_to_take_non_penal : bool = db.Column(db.Boolean, nullable=False)
    max_iph_status : str = db.Column(db.String, nullable=False) # Green, Amber, Red, Black
    max_new_caseload : int = db.Column(db.Integer , nullable=False)
    max_overall_caseload : int = db.Column(db.Integer , nullable=False)
    hwh_locations : str = db.Column(db.String, nullable=False) # array type; e.g. ['Green Haven', 'Ashram']
    spoken_languages : str = db.Column(db.String, nullable=False) # array type; e.g. ['ENGLISH', 'MANDARIN', 'TAMIL', 'MALAY']
    is_ground_crs : bool = db.Column(db.Boolean, nullable=False)
    is_lcm : bool = db.Column(db.Boolean, nullable=True)
    is_active : bool = db.Column(db.Boolean, nullable=False)
    
    def __init__(self, crs: dict):
        self.crs_name = crs['crs_name']
        self.gender = crs['gender']
        self.able_to_take_penal = crs['able_to_take_penal']
        self.able_to_take_non_penal = crs['able_to_take_non_penal']
        self.max_iph_status = crs['max_iph_status']
        self.max_new_caseload = crs['max_new_caseload']
        self.max_overall_caseload = crs['max_overall_caseload']
        self.hwh_locations = crs['hwh_locations']
        self.spoken_languages = crs['spoken_languages']
        self.is_ground_crs = crs['is_ground_crs']
        self.is_active = crs['is_active']
        if 'is_lcm' in crs:
            self.is_lcm = crs['is_lcm']

@dataclass
class Languages(db.Model):
    __tablename__ = "languages"
    language: str = db.Column(db.String, primary_key=True, nullable=False)
    short_form: str = db.Column(db.String)

    def __init__(self, language_info: dict):
        self.language = language_info['language']
        self.short_form = language_info['short_form']
        
@dataclass
class Locations(db.Model):
    __tablename__ = "locations"
    location: str = db.Column(db.String, primary_key=True, nullable=False)
        