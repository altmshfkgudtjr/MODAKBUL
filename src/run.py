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
@app.route('/statistics')
def statistics():
	return render_template('statistics.html')
@app.route('/credit')
def credt():
	return render_template('credit.html')
@app.route('/v')
def postpage():
	return render_template('postpage.html')



if __name__ == '__main__':
	app.run(host='0.0.0.0', port='80', debug = True)