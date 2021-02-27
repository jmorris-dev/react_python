import pymongo
from pymongo import MongoClient
from os import environ


mongo_user = environ.get('MONGO_USER')
mongo_pwd = environ.get('MONGO_PWD')

environ.get

client_uri = "mongodb+srv://{user}:{password}@cluster0.itr35.mongodb.net/myFirstDatabase?retryWrites=true&w=majority".format(user = mongo_user, password = mongo_pwd)

client = MongoClient(client_uri)
db = client.db




