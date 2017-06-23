import { createUser, createFoundItem} from '../utils/firebase';
import {signInWithGoogleAsync, facebookLogIn} from '../auth';
import {getLocationAsync} from '../utils/expo';
import {ViewNames} from './Store';
import {_pickImage} from '../components/imagePicker';


// DB FUCNTIONS

export function postFoundItem(oldStore, extra){
  const {image, description} = extra;
  const {location, currentView} = oldStore;
  console.log('----------------------')
  console.log(image, description, location, currentView)
  return createFoundItem(image, description, location).then(_ => {
    return Object.assign({}, oldStore)
  });
}




// MODAL SELECT
export function selectModal(oldStore, options){
  return Promise.resolve().then(_ => {
    return Object.assign({}, oldStore, {
      currentModalVal: options.modalSelect,
      modalVisible: options.makeVisible
    })
  })
};

// SWITCH VIEWS

export function changeViewFunction(oldStore, options){
  console.log('##################', options)
      return Promise.resolve().then(_ => {
         return Object.assign({}, oldStore, {
            currentView: options.viewNum,
            modalVisible: options.modalVisible,
            currentModalVal: options.currentModalVal,
          })
      })
};

// GOOGLE AUTH && PUSH TO DATABASE

export function loginWithGoogle(oldStore){
   return signInWithGoogleAsync().then((result) => {
    
   createUser(result.user.name, result.user.email, result.user.id, result.user.photoUrl)

      return Object.assign({}, oldStore, {
        currentUser: result.user.id,
        currentView: ViewNames.OPTION_VIEW,
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

// //GET IMAGE URI
//   export async function pickImageAsync(){
//     let result = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//     });
//     console.log(result)
//     if (!result.cancelled) {
//       return result
//     }
//   };




