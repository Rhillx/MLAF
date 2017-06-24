

/*
REMEMBER TO EXPORT FUNCTIONS ONCE DONE TESTING

REMOVE 'REQUIRE' AND IMPLEMENT 'IMPORT'
*/

import Firebase from 'firebase';

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




// CREATE DATA FUNCTIONS

export function createUser(name, email, id, photo) {

  db.ref('users').child(id).set({
    Id: id,
    name: name,
    email: email,
    photo: photo
  });
} 


 export function createFoundItem(image, description, location, userId){
   console.log(image, description)
  const key = db.ref('foundItems').push().key;
  // return Promise.resolve().then()
  return db.ref('foundItems').child(key).set({
    image: image,
    description: description,
    location: location,
    userId: userId,
    thekey: key
  })
}




export function createLostItem(image, description, location, userId){
   console.log(image, description)
  const key = db.ref('lostItems').push().key;
  // return Promise.resolve().then()
  return db.ref('lostItems').child(key).set({
    image: image,
    description: description,
    location: location,
    userId: userId,
    thekey: key
  })
}

// GET DATA FUNCTIONS..PROMISES


// function getFoundItems(){
//   const foundItems = db.ref('foundItems').once('value');

//   return foundItems.then(function (snapshot){
//     const item = snapshot.val()
//     const keys = Object.keys(item)
//     console.log('items is', keys)
//   })
// }

// // getFoundItems();

export function getFoundItems(){
  const foundItems = db.ref('foundItems').once('value');

  return foundItems.then(function(snapshot){
    const itemsFound = snapshot.val();

    return itemsFound
  })
}


// function getUsers(){
//   const users = db.ref('users').once('value');

//   return users.then(function(snapshot){
//     const activeUsers = snapshot.val();

//     return activeUsers
//   })
// }


export function getMessages(){
  const messages = db.ref('responseMessages').once('value')

  return messages.then(function(snapshot){
			const responseMessages = snapshot.val()

      return responseMessages

  })
}

export function createMessage(message, userId){
  const key = db.ref('sentMessages').push().key
  return db.ref('sentMessages').child(key).set({
    message,
    userId,
    thekey: key
  })

}


export function getMessageStream(callback) {
  db.ref('sentMessages').on('value', callback)
}

// UPDATE INFO DATA FUCNTIONS






