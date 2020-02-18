import app from 'firebase/app'
import 'firebase/auth'

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
    
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email: string, password: string) =>{
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    doSignInWithEmailAndPassword = (email: string, password: string) =>{
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    doSignOut = () => this.auth.signOut();
}

export default Firebase;