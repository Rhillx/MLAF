// import firebase from 'firebase'
/*
REMEMBER TO EXPORT FUNCTIONS ONCE DONE TESTING

REMOVE 'REQUIRE' AND IMPLEMENT 'IMPORT'
*/
const Rebase = require('re-base');
const firebase = require('firebase')
const config = {
    apiKey: "AIzaSyClfUaJ4TwmSRDCf4drhDzevMOAFzoOqjQ",
    authDomain: "mlaf-a224d.firebaseapp.com",
    databaseURL: "https://mlaf-a224d.firebaseio.com",
    projectId: "mlaf-a224d",
    storageBucket: "mlaf-a224d.appspot.com",
    messagingSenderId: "158809822358"
  };

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());
const db = firebase.database();

// export function _loginWithGoogle(){
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider)
//   .then(function(result) {
//     const user = result.user;
//     console.log(user)
//   })
//   .catch(function(error){
//     console.log(error)
//   });
// };

// // loginWithGoogle()


// CREATE DATA FUNCTIONS

function createNewUser(name, email) {
  const newUserRef = db.ref('users').push();
  const newUserKey = newUserRef.key;
  console.log(name);

  db.ref('users').push({
    Id: newUserKey,
    username: name,
    email: email
  });
} 


 function createFoundItem(lat, lng, description, image){
  const newItemRef = db.ref('foundItems').push();
  const newUserKey = newItemRef.key;
  console.log('running createFoundItem');

  db.ref('foundItems').push({
    userId: newUserKey,
    lat: lat,
    lng: lng,
    description: description,
    image: image

  })
}

function createLostItem(location, description, reward, image){
  const newItemRef = db.ref('lostItems').push();
  const newUserKey = newItemRef.key;
  console.log('running lost item');

  db.ref('lostItems').push({
    userId: newUserKey,
    location: location,
    description: description,
    reward: reward,
    image: image
  })
}

// GET DATA FUNCTIONS..PROMISES

 function getAllUsers() {
   base.fetch('users', {
      context: this,
   }).then(data => {
     console.log(data)
   }).catch(data =>{
     console.log("error");
   })
}

getAllUsers()

function getFoundItems() {
   base.fetch('foundItems', {
      context: this,
   }).then(data => {
     console.log(data.image)
   }).catch(data =>{
     console.log("error");
   })
}

// getFoundItems()

function getLostItems() {
   base.fetch('lostItems', {
      context: this,
   }).then(data => {
     console.log(data)
   }).catch(data =>{
     console.log("error");
   })
}



// UPDATE INFO DATA FUCNTIONS


function addUser() {
  base.post(`users/KmJAAiEtZzG6b2caTnn`, {
    data: {email: 'GYFS@mlaf.com', username: 'funnyTony'}
  }).then(() => {
    Router.transitionTo('dashboard');
  }).catch(err => {
    console.log('boom');
  });
}




