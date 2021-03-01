from flask import Flask, request, Response, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from flask_restful import Resource, Api
from db import image_collection
from dotenv import load_dotenv
import os
import json

load_dotenv()

app = Flask(__name__, static_folder='../client/build', static_url_path='/')
CORS(app)
api = Api(app)

# images = [{'image': 'owl.png', 'title':'Owl', 'description':'An owl', 'tags':'bird, nocturnal', 'isSorted':False, 'passed':False },
# {'image': 'hawk.jpg', 'title':'Hawk', 'description':'A hawk', 'tags':'bird, diurnal', 'isSorted':True, 'passed':False },
# {'image': 'duck.jpeg', 'title':'Duck', 'description':'A duck', 'tags':'bird, waterfowl', 'isSorted':True, 'passed':False }]

@app.route('/')
def index():
    return app.send_static_file('index.html')

class Image(Resource):
    def get(self):
        images = []
        results = image_collection.find({})
        for document in results:
            result = {'image': document['image'], 'title': document['title'], 'description': document['description'], 'tags': document['tags'], 'isSorted':False, 'passed':False }
            images.append(result)
        return images

    def post(self):
        if request.files['image']:
            file = request.files['image']
            fname = secure_filename(file.filename)

            title = request.form.get('title')
            description = request.form.get('description')
            tags = request.form.get('tags')

            imageData = {'image':fname,'title':title,'description':description,'tags':tags}

            image_id = image_collection.insert_one(imageData).inserted_id

            return {'id': str(image_id)}

@app.route('/images/<filename>')
def show_bird(filename):
    return send_from_directory('./images', filename)

api.add_resource(Image, '/api')

if __name__ == '__main__':
    app.run(debug=True)