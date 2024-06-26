from models import User, db
from flask import Flask, request, jsonify, abort, session
from config import ApplicationConfig
from flask_bcrypt import bcrypt, Bcrypt
from dotenv import load_dotenv
from flask_session import Session
import redis
import flask_session
load_dotenv()


app = Flask(__name__)
app.config.from_object(ApplicationConfig)
server_session = Session(app)
Bcrypt = Bcrypt(app)

db.init_app(app)
with app.app_context():
    db.create_all()

@app.route('/@me', methods=['GET'])
def get_current_user():
    user_id = session.get('user_id')

    if not 'user_id' in session:
        return jsonify({'error': 'unauthorized'}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({"id": user.id, "email": user.email})


@app.route('/register', methods=['GET', 'POST'])
def register_user():
    email = request.json['email']
    password = request.json['password']
    
    user_exists = User.query.filter_by(email=email).first() is not None
    if user_exists:
        # abort(409)
        return jsonify({'error': 'User already exists'}), 409
    

    hashed_password = Bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"id": new_user.id, "email": new_user.email})

@app.route('/login', methods=['GET', 'POST'])
def login_user():
    email = request.json['email']
    password = request.json['password']

    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({'error': 'unauthorized'}), 401

    if not Bcrypt.check_password_hash(user.password, password):
        return jsonify({'error': 'Invalid password'}), 401
    
    session['user_id'] = user.id


    return jsonify({"id": user.id, "email": user.email})

if __name__ == '__main__':
    app.run(debug=True)