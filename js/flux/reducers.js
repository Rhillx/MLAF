import {
  createUser, 
  createFoundItem, 
  createLostItem,
  getFoundItems,
  createMessage,
  getMessages,
} from '../utils/firebase';
import {signInWithGoogleAsync, facebookLogIn} from '../auth';
import {getLocationAsync} from '../utils/expo';
import {ViewNames} from './Store';
import {_pickImage} from '../components/imagePicker';


// DB FUCNTIONS

export function postFoundItem(oldStore, extra){
  const {image, description} = extra;
  const {location, currentUser} = oldStore;
  return createFoundItem(image, description, location, currentUser).then(_ => {
    return Object.assign({}, oldStore)
  });
}

export function postLostItem(oldStore, extra){
  const {image, description} = extra;
  const {location, currentUser} = oldStore;
  return createLostItem(image, description, location, currentUser).then(_ => {
    return Object.assign({}, oldStore)
  });
}


export function readFoundItems(oldStore, extra){
  console.log('in readLostItem')
  const {itemsFound} = extra
  return getFoundItems().then(itemsFound => {
    console.log("itemsLost", itemsFound)
    const foundItemsList = Object.keys(itemsFound).map(key=>{
      const data= itemsFound[key]
      return {
        // console.log(data.description, data.location.timestamp);
        description: data.description,
        date: new Date(data.location.timestamp) 
      }
    });
        console.log("foundItemsList", foundItemsList);
    return Object.assign({}, oldStore, {
         foundItemsList: foundItemsList
    })

  })
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
    const {name, email, id, photoUrl} = result.user;

   createUser(name, email, id, photoUrl)

      return Object.assign({}, oldStore, {
        currentUser: id,
        currentUserName: name,
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

export function recieveMessages(oldStore, options){

  return getMessages().then((responseMessages)=>{
    const returnedMessages = Object.keys(responseMessages).map(key=>{
      const data = responseMessages[key]
      console.log(data)
      return{
        
      }
    })
  })
}


export function sendMessage(oldStore, options){

  return createMessage('this is a message',oldStore.currentUser).then(_=>{
    return Object.assign({}, oldStore)
  })
}




