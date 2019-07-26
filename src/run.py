from flask import Flask, render_template, redirect, request, jsonify
#import MySQLdb
import os
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('landing.html')
@app.route('/sign-in')
def login():
	return render_template('login.html')
@app.route('/board')
def board():
	return render_template('board.html')
@app.route('/gallery')
def image():
	return render_template('image.html')
@app.route('/test')
def test():
	return render_template('postTest.html')
@app.route('/intro')
def intro():
	return render_template('intro.html')

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=80, debug = True)