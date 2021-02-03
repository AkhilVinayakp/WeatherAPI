from flask import Flask
from flask_restful import Resource, Api

#  creating flask app
app = Flask(__name__)
api = Api(app)


class Weather(Resource):
    def get(self, service_name: str) -> str:
        return "service {}".format(service_name)
