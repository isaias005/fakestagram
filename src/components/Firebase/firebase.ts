import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDeBpGmDPkX0ee1ZiiVZKhgY540rK5Mtx4",
    authDomain: "fakestagram-24865.firebaseapp.com",
    databaseURL: "https://fakestagram-24865.firebaseio.com",
    projectId: "fakestagram-24865",
    storageBucket: "fakestagram-24865.appspot.com",
    messagingSenderId: "453778054179",
    appId: "1:453778054179:web:2abba68011b233af9fa596",
    measurementId: "G-QJPCPCWQEJ"
};

class Firebase {
    auth: app.auth.Auth;
    db: app.firestore.Firestore;

    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    doCreateUserWithEmailAndPassword = (email: string, password: string) => {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    doSignInWithEmailAndPassword = (email: string, password: string) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    getImages = async () => {
        const snapshot = await this.db.collection("images").get();
        return snapshot.docs.map(doc => doc.data());
    }

    uploadImage = async (url: string) => {
        return await this.db.collection("images").add({ url: url });
    }

    doSignOut = () => this.auth.signOut();
}

export default Firebase;