from flask import Flask, g

app = Flask(__name__,
 	static_folder = './public',
 	template_folder="./static")

from templates.start.views import hello_blueprint
app.register_blueprint(hello_blueprint)
