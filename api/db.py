import pymongo
from pymongo import MongoClient
import os

# make an .env file with MONGO_USER = "your_username" and MONGO_PWD = "your_password"

user = os.getenv("MONGO_USER")
password = os.getenv("MONGO_PWD")

client_uri = "mongodb+srv://{user}:{password}@cluster0.itr35.mongodb.net/myFirstDatabase?retryWrites=true&w=majority".format(user = user, password = password)

cluster = MongoClient(client_uri)
db = cluster['react_python']
image_collection = db['images']






