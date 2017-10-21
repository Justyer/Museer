from flask import render_template, session, redirect, url_for, current_app, request, Response
from .. import db
from ..models import Visitor
from . import main

@main.route('/', methods=['GET', 'POST'])
def index():
	return render_template('index.html')

@main.route("/music/", methods=['GET', 'POST'])
def muee():
    music = file("/home/nightheart/workspace/www/Museer/app/static/sounds/all_in_it.mp3")
    return Response(music, mimetype="audio/mpeg")

@main.route("/music2/", methods=['GET', 'POST'])
def muee2():
    music = file("/home/nightheart/workspace/www/Museer/app/static/sounds/baby.mp3")
    return Response(music, mimetype="audio/mpeg")
