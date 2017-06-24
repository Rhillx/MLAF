import {Expo, Constants, Location, Permissions} from 'expo';
import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, Image } from 'react-native';

import LoginView from './loginView';
import OptionView from './optionView';
import FoundItModal from './foundItModal';
import LostItModal from './lostItModal';
import PickerExample from './picker';
import BinView from './binView';
import FoundItem from './lostItems';

import {getMessageStream} from '../utils/firebase'




import {ViewNames} from '../flux/Store';

export default class App extends Component{

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
                // viewNum: ViewNames.OPTION_VIEW       
            })
        }

        getMessageStream((snap) => {
            console.log('snap value', snap.val())
            alert('got something')
        })
        
    };




    render(){
        console.log('render', this.props.currentView, ViewNames)
        // switch (this.props.currentView) {
        //     case ViewNames.LOGIN_VIEW:
        //         return <LoginView {...this.props} />
        //     case ViewNames.OPTION_VIEW:
        //         return <OptionView {...this.props} />
        //     default:
        //         return <LoginView {...this.props} />
        // }
        return(
         <FoundItem {...this.props} /> 
        )
    }
}

