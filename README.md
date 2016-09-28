"# auth" 
* 1. One step (*Install virtualenv*).
     Command: `$ pip install virtualenv`
* 2. Two step (*Settings enviroment*).
     Command: `$ virtualenv venv`
* 3. Tree step (*Active virtualenv*).
     command: `$ venv\Scripts\activate`
* 4. Four step (*Istall requirements*).
     command: `$ pip install -r requirements.txt`
* 5. Five step (*Migrate db and Run project*).
     command: `$ python manage.py migrate`
             `$ python manage.py runserver`
