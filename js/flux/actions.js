import{
    createNewUser,
    loginWithGoogle,
    loginWithFacebook,
} from './reducers'

export const actions ={
    'GOOGLE_SIGN_IN': (...args) => loginWithGoogle (...args),
    'FACEBOOK_SIGN_IN': (...args) => loginWithFacebook (...args),

}