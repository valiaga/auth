"# auth" 
* 1. One step (*Install virtualenv*).
     Command: `$ pip install virtualenv`
* 2. Two step (*Settings enviroment*).
     Command: `$ virtualenv venv`
* 3. tree step (*Active virtualenv*).
     command: `$ venv\Scripts\activate`
* 4. four step (*Istall requirements*).
     command: `$ pip install -r requirements.txt`
* 5. five step (*Migrate db and Run project*).
     command: `$ python manage.py migrate`
             `$ python manage.py runserver`
