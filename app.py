from flask import Flask, render_template, request, jsonify
import requests
import json

api = 'https://newsapi.org/v2/everything?apikey=2f8eda0083fc4be29257842fa81d73a0'

app = Flask(__name__)

@app.route("/")
def home():
    params={'q':'everything'}
    data = requests.get(url=api,params=params).json()
    return render_template('index.html',data=data)

if __name__=='__main__':
    app.run(debug=True)