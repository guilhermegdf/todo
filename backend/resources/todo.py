from flask import Response, json
from flask_restful import Resource
from models.TodoModel import TodoModel, TodoSchema

schema = TodoSchema(many=True)

def custom_response(res, status_code):

    return Response(
        mimetype="application/json",
        response=json.dumps(res),
        status=status_code
        )

class Todo(Resource):

    def get(self):
        todo_list = TodoModel.get_all()
        res = schema.dump(todo_list)
        return custom_response({'response': res}, 200)

    def post(self):
        req = request.get_json()
        data, error = schema.load(req)

        if error:
            return custom_response(error, 400)

        res = TodoModel(req)
        res.save()
        message = {'response':'added successfully'}
        return custom_response(message, 200)

    def put(self):
        req = request.get_json()
        data, error = schema.load(req)

        if error:
            return custom_response(error, 400)

        res = TodoModel(req)
        res.update(req.data)
        message = {'response':'update successfully'}
        return custom_response(message, 200)

    def delete(self):
        req = request.get_json()
        data, error = schema.load(req)

        if error:
            return custom_response(error, 400)

        res = TodoModel(req)
        res.delete()
        message = {'response':'delete successfully'}
        return custom_response(message, 200)

class TodoComplete(Resource):

    def get(self):
        todo_list = TodoModel.get_all_completed()
        res = schema.dump(todo_list)
        return custom_response({'response': res}, 200)

class TodoPending(Resource):

    def get(self):
        todo_list = TodoModel.get_all_pending()
        res = schema.dump(todo_list)
        return custom_response({'response': res}, 200)
