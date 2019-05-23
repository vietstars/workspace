from flask import Flask, render_template, jsonify, url_for, request, session, redirect
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from threading import Timer
import webbrowser as wb
import json
import geocoder
import os

app = Flask(__name__)
g = geocoder.ip('me')

app.config['MONGO_URI'] = 'mongodb://127.0.0.1:27017/pythonFlask'

mongo = PyMongo(app)

@app.route('/')
def home():
	return render_template('default/index.html',title='Home')

@app.route('/register', methods=['POST', 'GET'])
def register():
	return render_template('default/register.html',title='Register')
	
@app.route('/map')
def map():
	return render_template('default/map.html',title='Current location',map=g.json)

def open_browser():
	wb.open('http://127.0.0.1:5000/')

if __name__ == '__main__':
	app.secret_key =  os.environ.get('SECRET_KEY', 'you-will-never-guess')
	Timer(1, open_browser).start();
	app.run(host = '127.0.0.1', port = 5000, debug = True)
