"# auth" 
One step
  Install virtualenv
  Command: pip install virtualenv
Two step
  Settings enviroment
  Command: virtualenv venv
tree step
  Active virtualenv
  command: venv\Scripts\activate
four step
  Istall requirements
  command: pip install -r requirements.txt
five step
  Migrate db and Run project
  command: python manage.py migrate
           python manage.py runserver
