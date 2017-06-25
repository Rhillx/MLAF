import {Expo, Constants, Location, Permissions} from 'expo';
import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, Image } from 'react-native';

import LoginView from './loginView';
import OptionView from './optionView';
import FoundItModal from './foundItModal';
import LostItModal from './lostItModal';
import PickerExample from './picker';
import BinView from './binView';
import FoundItem from './foundItems';
import Messenger from './messenger';
import Inbox from './Inbox';

import {getMessageStream} from '../utils/firebase'




import {ViewNames} from '../flux/Store';

export default class App extends Component{
    watchInit = false
    componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      return
    } else {
     this.props.dispatch('GET_LOCATION', {

     })
    }
  }


    componentDidMount(){
        const {currentUser} = this.props
        if(currentUser != null){
            this.props.dispatch('CHANGE_VIEW', {
                viewNum: ViewNames.OPTION_VIEW       
            })
        }
        
    };

    componentWillReceiveProps(nextProps){
        if (nextProps.currentUser && nextProps.currentUser !== this.props.currentUser && !this.watchInit ) {
            console.log("INITING THID FUCKER")
            this.watchInit = true;
            getMessageStream(nextProps.currentUser, (snap) => {
                console.log('currentuser', nextProps.currentUser)
                this.props.dispatch('NEW_MESSAGE', {
                    data: snap.val()
                })
            });
        }
    }




    render(){
        console.log('render', this.props.currentView, ViewNames)
        switch (this.props.currentView) {
            case ViewNames.LOGIN_VIEW:
                return <LoginView {...this.props} />
            case ViewNames.OPTION_VIEW:
                return <OptionView {...this.props} />
            case ViewNames.FOUND_ITEMS_VIEW:
                return <FoundItem {...this.props} />
            case ViewNames.MESSENGER:
                return <Messenger {...this.props}  />  
            case ViewNames.INBOX:
                return <Inbox {...this.props} />    
            default:
                return <LoginView {...this.props} />
        }
        return(
         <this.props.currentView {...this.props} /> 
        )
    }
}

