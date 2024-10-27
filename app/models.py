from . import db

class User(db.Model):
    __tablename__ = 'login_user'

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(65), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    sub = db.Column(db.String(255), unique=True, nullable=False)
    
    def __repr__(self):
        return f'<User {self.nome}>'

