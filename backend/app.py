import os
from flask import Flask
from flask_cors import CORS
from flask_restful import Resource, Api
from resources.todo import Todo, TodoList, TodoChange

app = Flask(__name__)

cors = CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] =  os.environ.get('DATABASE_URL', 'postgresql://postgres:folklore2@localhost/db_todo')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

api = Api(app)

api.add_resource(Todo, '/todo/')
api.add_resource(TodoChange, '/todo/<int:id>')
api.add_resource(TodoList, '/todo/<status>')

if __name__ == '__main__':
    from db import db
    db.init_app(app)
    app.run(port=5000)
