from marshmallow import fields, Schema
from db import db

class TodoModel(db.Model):
    __tablename__ = 'tb_todo'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(355), nullable=False)
    status = db.Column(db.Boolean)

    def __init__(self, data):

        self.description = data.get('description')
        self.status = False

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self, data):
        for key, value in data.items():
            setattr(self, key, value)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    @staticmethod
    def get_all():
        return TodoModel.query.all()

    @staticmethod
    def get_all_completed():
        return VolunteerModel.query.filter_by(status=True)

    @staticmethod
    def get_all_pending():
        return VolunteerModel.query.filter_by(status=False)

    def __repr(self):
        return '<id {}>'.format(self.id)

class TodoSchema(Schema):
    id = fields.Int(dump_only=True)
    description = fields.Str(required=True)
    status = fields.Boolean(required=True)
