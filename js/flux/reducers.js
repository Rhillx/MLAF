import {_loginWithGoogle} from '../utils/firebase';
import {signInWithGoogleAsync, facebookLogIn} from '../googleAuth'

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

export function loginWithGoogle(oldStore){
   signInWithGoogleAsync()

    return Promise.resolve().then(_ => oldStore);
};

export function loginWithFacebook(oldStore){
    facebookLogIn()

    return Promise.resolve().then(_ => oldStore);
};



