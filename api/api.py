from flask import Flask, jsonify
from flask_cors import CORS
from flask_restful import Resource, Api
import db

app = Flask(__name__)
api = Api(app)
CORS(app)

image = [{'title':'this is another title', 'description':'my description', 'tags':['test'], 'isSorted':False, 'passed': True },
{'title':'this is a title', 'description':'my other description', 'tags':['test'], 'isSorted':False, 'passed': False }]

class HelloWorld(Resource):
    def get(self):
        return (image)

api.add_resource(HelloWorld, '/api')


if __name__ == '__main__':
    app.run(debug=True)