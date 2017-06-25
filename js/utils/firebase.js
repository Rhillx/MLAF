

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

export function getUser(userId) {
  return db.ref('users').child(userId).once('value').then(snap => {
    const user = snap.val();
    return user.name;
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


// export function getMessages(){
//   const messages = db.ref('responseMessages').once('value')

//   return messages.then(function(snapshot){
// 			const responseMessages = snapshot.val()

//       return responseMessages

//   })
// }

// export function createMessage(message, userId){
//   const key = db.ref('sentMessages').push().key
//   return db.ref('sentMessages').child(key).set({
//     message,
//     userId,
//     thekey: key
//   })

// }
export function messenger(message = "FOO", userId = "111598038136172896479", currentUser = '111598038136172896479'){
// console.log(message, userName);
console.log('messenger')
console.log(message, userId, currentUser)
if (currentUser === null) {
  currentUser = '111598038136172896479'
}
 const ref = db.ref('messages').child(userId).child(currentUser);
 ref.child('time').set(Date.now());
 const a = ref.child('messages').push({
     message : message || null,
     when: Date.now(),
  })

  const ref2 =  db.ref('messages').child(currentUser).child(userId);
  ref2.child('time').set(Date.now())
  const b = ref2.child('messages').push({
     message : message || null,
     when: Date.now(),   
  })

  const c = db.ref('lastMessage').child(currentUser).child(userId).set(Date.now());
  const d = db.ref('lastMessage').child(userId).child(currentUser).set(Date.now());
  return Promise.all([a,b,c,td])
}


export function getMessageStream(currentUser, callback) {
  db.ref('lastMessage').child(currentUser).on('value', snap => {
     console.log("HERE THO", Date.now())
      db.ref('messages').child(currentUser).once('value').then(snap => callback(snap))
   
    // callback(snap)
  })

  // db.ref('messages').child(currentUser).once('value').then(snap => {
  //   const data = snap.val();
  //   console.log('datra is', data)
  //   alert('in getMEssageStream')
  //   Object.keys(data).map(userId => {
  //     console.log('IN KEY LOOP')
  //     console.log(userId, currentUser)
  //     db.ref('messages').child(currentUser).child(userId).on('value', (snap) => callback(snap))
  //   })
  // })
  // db.ref('messages').child(currentUser).on('child_added', )
}

// UPDATE INFO DATA FUCNTIONS






