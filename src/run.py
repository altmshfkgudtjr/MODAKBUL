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
@app.route('/board/')
def board():
	return render_template('board.html')
@app.route('/gallery')
def image():
	return render_template('image.html')
@app.route('/intro')
def intro():
	return render_template('intro.html')
@app.route('/vote')
def vote():
	return render_template('vote.html')
@app.route('/settings')
def settings():
	return render_template('settings.html')

if __name__ == '__main__':
	app.run(host='127.0.0.1', debug = True)