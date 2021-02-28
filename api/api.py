from flask import Flask, request, Response
from werkzeug.utils import secure_filename
from flask_restful import Resource, Api
from db import db, fs
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__, static_folder='../client/build', static_url_path='/')
api = Api(app)

images = [{'image': None, 'title':'this is another title', 'description':'my description', 'tags':['test'], 'isSorted':False, 'passed': True },
{'image': None, 'title':'this is a title', 'description':'my other description', 'tags':['test'], 'isSorted':False, 'passed': False }]

@app.route('/')
def index():
    return app.send_static_file('index.html')

class Image(Resource):
    def get(self):
        return (images)
    def post(self):
        if request.files['image']:
            file = request.files['image']
            fname = secure_filename(file.filename)

            title = request.form.get('title')
            description = request.form.get('description')
            tags = request.form.get('tags')

            imageData = {'title':title,'description':description,'tags':tags}

            image_id = fs.put(file,
            filename=fname,
            meta = imageData)

            return 'success'

api.add_resource(Image, '/api')

if __name__ == '__main__':
    app.run(debug=True)