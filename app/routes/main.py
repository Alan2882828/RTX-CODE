# -*- coding: utf-8 -*-
from flask import Blueprint, render_template

# rota da pag inicial-----> 
main_bp = Blueprint('main', __name__)
@main_bp.route('/')
def index():
    return render_template('home.html')

# rota da pag curso------>
@main_bp.route('/curso' , methods=['POST' , 'GET'])
def curso():
    return render_template('curso.html')

# rota de login com o google------>
@main_bp.route('/tela_login' , methods=['POST' , 'GET'])
def tela_login():
    return render_template('google-login.html')

