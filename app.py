from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    params = {"query" : "india", "endpoint" : "everything"}
    return render_template('index.html',params=params)

if __name__=='__main__':
    app.run(debug=True)