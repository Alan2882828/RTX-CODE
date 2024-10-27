from flask import Blueprint, render_template, request, url_for, jsonify
from app import db
from app.models import User

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

# rota de cadastrar user e fazer verificaçoes----->
@auth_bp.route('/cadastrar_user',methods=['POST' , 'GET'])
def cadastrar_user():
    if request.method == 'POST':
        # dados do user 
        data = request.get_json()
        nome = data.get('name')
        email = data.get('email')
        sub = data.get('sub')
        print('logado')
    # Verifica se o usuário já existe
    existing_user = User.query.filter_by(nome=nome, email=email, sub=sub).first()
    if existing_user is None:
        # Cria um novo usuário e salva no banco de dados
        new = User(nome = nome, email=email, sub=sub)
        db.session.add(new)
        db.session.commit()

    return render_template("home.html")
