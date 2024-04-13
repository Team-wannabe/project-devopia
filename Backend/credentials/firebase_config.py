import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('credentials/finpal-79d49-firebase-adminsdk-xpb8t-7c581205ae.json')
firebase_admin.initialize_app(cred)

db  = firestore.client()
