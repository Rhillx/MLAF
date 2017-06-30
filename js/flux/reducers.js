import {
  createUser, 
  createFbUser,
  createFoundItem, 
  createLostItem,
  getFoundItems,
  messenger,
  getMessages,
  getUser,
} from '../utils/firebase';
import {signInWithGoogleAsync, facebookLogIn} from '../auth';
import {getLocationAsync} from '../utils/expo';
import {ViewNames} from './Store';
import {_pickImage} from '../components/imagePicker';


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
};

// FACEBOOK AUTH && PUSH TO DB

export function loginWithFacebook(oldStore){
  return facebookLogIn().then((response) =>{
    return response.json()
    .then(json =>{
      const {name, id} = json;
      createFbUser(name, id);
       return Object.assign({}, oldStore, {
        currentUser: id,
        currentUserName: name,
        currentView: ViewNames.OPTION_VIEW,
       })
     })
  })
}



   




















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
      console.log('FOUND ITEM USER KEY', data.userId)
      return {
        // console.log(data.description, data.location.timestamp);
        description: data.description,
        date: new Date(data.location.timestamp),
        userId: data.userId,
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
            viewInfo: options.viewInfo,
            modalVisible: options.makeVisible
            // currentModalVal: options.currentModalVal
          })
      })
};




// GET USER LOCATION
export function getLocation(oldStore){
 return getLocationAsync().then((location) =>{
     return Object.assign({}, oldStore, {
       location: location
  })
})
}

export function handleNewMessage(store, options) {
  console.log('handleMessage options', options)
  const sorted = Object.keys(options.data || {}).map(key => {
    const d = options.data[key]
    d.userId = key;
    return getUser(key).then(user => {
      d.user = user;
      return d;
    })
  });

  return Promise.all(sorted).then(([...threads]) => {
    threads.sort((a,b) => a.time < b.time ? 1 : -1);
    console.log('sorted is....', threads)
    return Object.assign({}, store, {
      newMessage: threads,
    })
  })
}

export function clearNewMessages(store, options) {
  return Promise.resolve().then(_ => Object.assign({}, store, {
    newMessage: null,
  }))
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

// export function recieveMessages(oldStore, options){

//   return getMessages().then((responseMessages)=>{
//     const returnedMessages = Object.keys(responseMessages).map(key=>{
//       const data = responseMessages[key]
//       console.log(data)
//       return{
        
//       }
//     })
//   })
// }


export function sendMessage(oldStore, options){
const {currentUser} = oldStore
const {message, userId} = options

console.log("BEFORE:", userId, currentUser)
  messenger(message, userId, currentUser);
  
  return Promise.resolve().then(_=>{
    return Object.assign({}, oldStore)
  })
}




