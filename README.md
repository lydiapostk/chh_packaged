# Software versions
Python 3.8.8
Flask 2.2.2
Werkzeug 2.2.3
Node 18.18.2

## Python packages
Python packages:
six 1.16.0
numpy 1.23.5
python_dateutil 2.8.2
pytz 2023.3
pandas 2.0.3
docplex 2.24.232
et-xmlfile 1.1.0
openpyxl 3.0.10
wheel 0.38.4
MarkupSafe 2.1.1
greenlet 2.0.2
typing-extensions 4.6.3
SQLAlchemy 2.0.9
Werkzeug 2.2.3
Flask-SQLAlchemy 3.0.3
XlsxWriter 3.2.0
mysqlclient 2.2.4
mysql-connector-python 9.0.0

# Installation

Run 
```
python .\installation\init.py
```

# Running

#### Start Flask API

Run 
```
python .\run.py
```

#### Start Frontend Server

Run: 
```
cd .\frontend\
# then
npm run dev 
# or 
yarn dev 
# or 
pnpm dev
```

#### Build frontend and run from docker image

cd.\frontend\
docker build -t nextjs-docker .
docker run -p 3000:3000 nextjs-docker