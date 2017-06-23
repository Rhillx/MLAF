export const ViewNames = {
    LOGIN_VIEW: 1,
    OPTION_VIEW: 2,
    // BIN_VIEW: 3,
}
export const Store = {
    foundItems: {
        image: "",
        item:"",
        description: "",
        location:{
            lat:"",
            lng:""
        }
    },
    lostItems:{
        image:'',
        item:'',
        location:{
            lat:'',
            lng:''
        }
    },
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

}