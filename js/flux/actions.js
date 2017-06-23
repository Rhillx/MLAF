import{
    createNewUser,
    postFoundItem,
    postLostItem,
    loginWithGoogle,
    changeViewFunction,
    selectModal,
    getLocation,
    pickImageAsync,
    saveImage,
} from './reducers'

export const actions ={
    'GOOGLE_SIGN_IN': (...args) => loginWithGoogle(...args),
    // 'FACEBOOK_SIGN_IN': (...args) => loginWithFacebook (...args),
    'CHANGE_VIEW': (...args) => changeViewFunction(...args),
    'MODAL_SELECT':(...args) => selectModal(...args),
    'OPEN_DRAWER':(...args) => openDrawer(...args),
    'GET_LOCATION':(...args) => getLocation(...args),
    'POST_LOST_ITEM':(oldStore, options) => postLostItem(oldStore, options).then((newStore) => changeViewFunction(newStore, options)),

    'POST_FOUND_ITEM':(oldStore, options) => postFoundItem(oldStore, options).then((newStore) => changeViewFunction(newStore, options)),

    'GET_IMAGE':(...args) => pickImageAsync(...args),
    'SAVE_IMAGE': (...args) => saveImage(...args),
}