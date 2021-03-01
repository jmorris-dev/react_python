import pymongo
from pymongo import MongoClient
import os

# make an .env file with MONGO_USER = "your_username" and MONGO_PWD = "your_password"

user = os.getenv("MONGO_USER")
password = os.getenv("MONGO_PWD")

client_uri = "mongodb+srv://{user}:{password}@cluster0.itr35.mongodb.net/myFirstDatabase?retryWrites=true&w=majority".format(user = user, password = password)

client = MongoClient(client_uri)
db = client.image_db
image_col = db.images






