export const ViewNames = {
    LOGIN_VIEW: 1,
    OPTION_VIEW: 2,
    FOUND_ITEMS_VIEW: 3,
    MESSENGER: 4,
}
export const Store = {
    foundItemsList: [],

    users: {
        id:'',
        image:'',
        email:'',
        name:'',
    },
    currentView: ViewNames.LOGIN_VIEW,
    currentUser: null,
    currentUserName: null,
    currentModal: null,
    currentModalVal: null,
    modalVisible: false,
    messages:[]

}
/*THIS IS currentView initial Val
*/
// ViewNames.LOGIN_VIEW