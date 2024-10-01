from app import app, db
from app.forms import LoginForm
from app.models import User
from flask import render_template, flash, redirect, url_for, request
from flask_login import current_user, login_user
from time import sleep
import sqlalchemy as sa



# @app.route("/index")
# def index():
#     user = {"username": "Miguel"}
#     posts = [
#         {"author": {"username": "John"}, "body": "Beautiful day in Portland!"},
#         {"author": {"username": "Susan"}, "body": "The Avengers movie was so cool!"},
#     ]
#     return render_template("index.html", title="Home", user=user, posts=posts)


# @app.route("/login", methods=["GET", "POST"])
# def login():
#     form = LoginForm()
#     if request.method == "POST":
#         if form.validate_on_submit():
#             flash(
#                 "Login requested for user {}, remember_me={}".format(
#                     form.username.data, form.remember_me.data
#                 )
#             )
#             return redirect(url_for("index"))
#     if request.method == "GET":
#         if (
#             request.args.get("username") is not None
#             and request.args.get("password") is not None
#         ):
#             flash(
#                 "Login requested for user {}, remember_me={}".format(
#                     form.data.get("username"), form.data.get("remember_me")
#                 )
#             )
#             sleep(10)
#             return redirect(url_for("index"))
#         return render_template("login.html", title="Вход", form=form)

# @app.route("/reg",)
@app.route("/", methods=["GET", "POST"])
def registration():
    if request.method == "GET":
        if (
            request.args.get("registration_user_password") is not None
            and request.args.get("confirm_registration_user_password") is not None
        ):
            pass
        elif request.args.get("registration_user_password") != request.args.get("confirm_registration_user_password"):
            pass
    return render_template("loginv1.html")

