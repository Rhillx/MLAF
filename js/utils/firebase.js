

/*
REMEMBER TO EXPORT FUNCTIONS ONCE DONE TESTING

REMOVE 'REQUIRE' AND IMPLEMENT 'IMPORT'
*/

const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyClfUaJ4TwmSRDCf4drhDzevMOAFzoOqjQ",
    authDomain: "mlaf-a224d.firebaseapp.com",
    databaseURL: "https://mlaf-a224d.firebaseio.com",
    projectId: "mlaf-a224d",
    storageBucket: "mlaf-a224d.appspot.com",
    messagingSenderId: "158809822358"
  };

const app = firebase.initializeApp(config);
const db = firebase.database();




// CREATE DATA FUNCTIONS

export function createUser(name, email, id, photo) {
  // const newUser = db.ref('users').push();
  // const Key = newUser.key;
  // console.log(name);

  db.ref('users').push({
    Id: id,
    name: name,
    email: email,
    photo: photo
  });
} 


 function createFoundItem(image, item, location){
  console.log('running createFoundItem');
  const newItem = db.ref('foundItems').push()
  const key = newItem.key

  db.ref('foundItems').push({
    userId: key,
    image: image,
    item: item,
    location: location

  })
}

// createFoundItem('../../assets/images/200x61.jpg', 'jacket', '34-1357811')



function createLostItem(location, item, image){
  const newItem = db.ref('lostItems').push();
  const Key = newItem.key;
  console.log('running lost item');

  db.ref('lostItems').push({
    userId: Key,
    location: location,
    item: item,
    image: image
  })
}

// GET DATA FUNCTIONS..PROMISES


function getFoundItems(){
  const foundItems = db.ref('foundItems').once('value');

  return foundItems.then(function (snapshot){
    const item = snapshot.val()
    const keys = Object.keys(item)
    console.log('items is', keys)
  })
}

// getFoundItems();

function getLostItems(){
  const lostItems = db.ref('lostItems').once('value');

  return lostItems.then(function(snapshot){
    const itemsLost = snapshot.val();
    return itemsLost
  })
}

getLostItems();


function getUsers(){
  const users = db.ref('users').once('value');

  return users.then(function(snapshot){
    const activeUsers = snapshot.val();

    return activeUsers
  })
}



// UPDATE INFO DATA FUCNTIONS






