import Rebase from 're-base';
import firebase from 'firebase';

const config ={
    apiKey: "AIzaSyAFRgh-ZvUV0WDl7r8eCekYN_w9eOzVapg",
    authDomain: "chatbox-7f197.firebaseapp.com",
    databaseURL: "https://chatbox-7f197.firebaseio.com",
};

const app = firebase.initializeApp(config);

const base = Rebase.createClass(app.database());

export { base };