import {_loginWithGoogle} from '../utils/firebase';
import {signInWithGoogleAsync, facebookLogIn} from '../auth'
import {ViewNames} from './Store';

export function createNewUser(name, email) {
  const newUserRef = db.ref('users').push();
  const newUserKey = newUserRef.key;
  const data = {
    userID: newUserKey,
    username: name,
    email: email
  };

  db.ref('users').push(data).then(_ => {
    return Object.assign({}, data)
  })
}


export function selectModal(oldStore, options){
  return Promise.resolve().then(_ => {
    return Object.assign({}, oldStore, {
      currentModalVal: options.modalSelect,
    })
  })
};


export function changeViewFunction(oldStore, options){
  console.log(options)
      return Promise.resolve().then(_ => {
         return Object.assign({}, oldStore, {
            currentView: options.viewNum,
          })
      })
};



export function loginWithGoogle(oldStore){
   return signInWithGoogleAsync().then((result) => {
     console.log(result.user.email)
      return Object.assign({}, oldStore, {
        currentUser: result.user.id,
        currentView: ViewNames.OPTION_VIEW,
      })
   })
    // return Promise.resolve().then(_ => oldStore);
};

export function loginWithFacebook(oldStore){
    facebookLogIn()

    return Promise.resolve().then(_ => oldStore);
};

export function openDrawer(){
//   openDrawer = () => {
//         this.drawer._root.open()
// }
// return Promise.resolve().then(_=> oldStore);
};



