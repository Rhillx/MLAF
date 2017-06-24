export const ViewNames = {
    LOGIN_VIEW: 1,
    OPTION_VIEW: 2,
    // BIN_VIEW: 3,
}
export const Store = {
    foundItemsList: [],

    users: {
        id:'',
        image:'',
        email:'',
        name:'',
    },
    currentView: null,
    currentUser: null,
    currentUserName: null,
    currentModal: null,
    currentModalVal: null,
    modalVisible: false,

}
/*THIS IS currentView initial Val
*/
// ViewNames.LOGIN_VIEW