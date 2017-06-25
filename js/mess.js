// import Firebase from 'firebase';
const Firebase = require('firebase')
const config = {
    apiKey: "AIzaSyClfUaJ4TwmSRDCf4drhDzevMOAFzoOqjQ",
    authDomain: "mlaf-a224d.firebaseapp.com",
    databaseURL: "https://mlaf-a224d.firebaseio.com",
    projectId: "mlaf-a224d",
    storageBucket: "mlaf-a224d.appspot.com",
    messagingSenderId: "158809822358"
  };

const app = Firebase.initializeApp(config);
const db = Firebase.database();

const ref1 = db.ref('messages').child('111598038136172896479').child('117253052008407135554');

ref1.child('time').set(Date.now())
ref1.child('messages')
.push({
    message: '0000000999999FOOBATR',
    when: Date.now()
})

const ref2 = db.ref('messages').child('117253052008407135554').child('111598038136172896479');

ref2.child('time').set(Date.now())
ref2.child('messages')
.push({
    message: '0000000999999FOOBATR',
    when: Date.now()
})

const c = db.ref('lastMessage').child('111598038136172896479').child('117253052008407135554').set(Date.now());
