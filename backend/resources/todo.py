from flask import Response, json, request
from flask_restful import Resource
from models.TodoModel import TodoModel, TodoSchema


def custom_response(res, status_code):

    return Response(
        mimetype="application/json",
        response=json.dumps(res),
        status=status_code
        )

class Todo(Resource):

    def get(self):
        todo_list = TodoModel.get_all()
        schema = TodoSchema(many=True)
        res = schema.dump(todo_list)

        return custom_response(res.data, 200)

    def post(self):
        req = request.get_json()
        schema = TodoSchema()
        data, error = schema.load(req)
        if error:
            return custom_response(error, 400)

        res = TodoModel(req)
        res.save()
        message = {'response':'added successfully'}
        return custom_response(message, 200)

class TodoChange(Resource):

    def put(self, id):
        req = request.get_json()
        res = TodoModel.get_one(id)
        res.update(req)
        message = {'response':'update successfully'}
        return custom_response(message, 200)

    def delete(self, id):

        res = TodoModel.get_one(id)
        res.delete()
        message = {'response':'delete successfully'}
        return custom_response(message, 200)

class TodoList(Resource):

    def get(self, status):
        schema = TodoSchema(many=True)
        if status == "complete":
            todo_list = TodoModel.get_all_completed()

        if status == "pending":
            todo_list = TodoModel.get_all_pending()

        res = schema.dump(todo_list)
        return custom_response(res.data, 200)
