import{
    createNewUser,
    loginWithGoogle,
    loginWithFacebook,
    changeViewFunction,
    selectModal,
} from './reducers'

export const actions ={
    'GOOGLE_SIGN_IN': (...args) => loginWithGoogle(...args),
    'FACEBOOK_SIGN_IN': (...args) => loginWithFacebook (...args),
    'CHANGE_VIEW': (...args) => changeViewFunction(...args),
    'MODAL_SELECT':(...args) => selectModal(...args),

}