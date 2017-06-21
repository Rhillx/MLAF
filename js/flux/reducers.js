import { createUser} from '../utils/firebase';
import {signInWithGoogleAsync, facebookLogIn} from '../auth'
import {getLocationAsync} from '../utils/expo'
import {ViewNames} from './Store';

// DB FUCNTIONS

// export function creatnewUser(name, email) {
//   const newUserRef = db.ref('users').push();
//   const newUserKey = newUserRef.key;
//   const data = {
//     userID: newUserKey,
//     username: name,
//     email: email
//   };

//   db.ref('users').push(data).then(_ => {
//     return Object.assign({}, data)
//   })
// }

export function createFoundItem(image, item, location){
  const data = {
    image: image,
    item: item,
    location: location,
  };

  db.ref('foundItems').push(data).then(_=>{
    return Object.assign({}, data)
  })
}



// MODAL SELECT
export function selectModal(oldStore, options){
  return Promise.resolve().then(_ => {
    return Object.assign({}, oldStore, {
      currentModalVal: options.modalSelect,
    })
  })
};

// SWITCH VIEWS

export function changeViewFunction(oldStore, options){
  console.log(options)
      return Promise.resolve().then(_ => {
         return Object.assign({}, oldStore, {
            currentView: options.viewNum,
          })
      })
};

// GOOGLE AUTH

export function loginWithGoogle(oldStore){
   return signInWithGoogleAsync().then((result) => {
    
    return createUser(result.user.name, result.user.email, result.user.id, result.user.photoUrl)
     .then((result) =>{
        console.log(result);

      return Object.assign({}, oldStore, {
        // currentUser: result.user.id,
        // currentView: ViewNames.OPTION_VIEW,
      })
     })
   })
    // return Promise.resolve().then(_ => oldStore);
};



// GET USER LOCATION
export function getLocation(oldStore){
 return getLocationAsync().then((location) =>{
    console.log('reducer location' , location.coords.longitude)
     return Object.assign({}, oldStore, {
       location: location
  })
})
}



