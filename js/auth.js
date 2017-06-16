import Expo from 'expo';




export async function signInWithGoogleAsync() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: '158809822358-q422sll2krsb6t044u0dnom8bg0ig7mn.apps.googleusercontent.com',
    //   iosClientId: YOUR_CLIENT_ID_HERE,
      scopes: ['profile', 'email'],
    });
   if (result.type === 'success') {
      return result;
    } else {
      return {cancelled: true};
    }
  } catch(e) {
    return {error: true};
  }
}

// FACEBOOK AUTH

// export async function facebookLogIn() {
//   const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1333363216699399', {
//       permissions: ['public_profile']
//     });
//   if (type === 'success') {
//     // Get the user's name using Facebook's Graph API
//     const response = await fetch(
//       `https://graph.facebook.com/me?access_token=${token}`);
//     Alert.alert(
//       'Logged in!',
//       `Hi ${(await response.json()).name}!`,
//     );
//   }
// }