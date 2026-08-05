# from flask import Flask
# from flask import render_template

# from routes.chatbot import chatbot
# from routes.tools import tool

# app=Flask(__name__)

# app.register_blueprint(chatbot)
# app.register_blueprint(tool)

# @app.route("/")
# def home():
#     return render_template("index.html")

# @app.route("/health")
# def health():

#     return {
#         "status": "running",
#         "application": "MedFit AI",
#         "backend": "Flask",
#         "database": "ChromaDB"
#     },200
# if __name__=="__main__":
#     app.run(host="0.0.0.0", port=5000,debug=False)


from flask import Flask
from flask import render_template

from routes.chatbot import chatbot
from routes.tools import tool

app = Flask(__name__)

app.register_blueprint(chatbot)
app.register_blueprint(tool)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/chatbot")
def chatbot_page():
    return render_template("chat.html")

@app.route("/health")
def health():

    return {
        "status": "running",
        "application": "MedFit AI",
        "database": "ChromaDB"
    }, 200


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=False
    )