import {Expo, Constants, Location, Permissions} from 'expo';
import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, Image } from 'react-native';

import LoginView from './loginView';
import OptionView from './optionView';
import ModalView from './modal';
// import ImageSelector from './imagePicker';
import FoundItModal from './foundItModal';
import PickerExample from './picker';
// import Sidebar from './sidebar';
import DrawerEx from './drawer';
// import Swiper from './gestures';
import Map from './mapView'

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
    };




    render(){
        // switch (this.props.currentView) {
        //     case ViewNames.LOGIN_VIEW:
        //         return <LoginView {...this.props} />
        //     case ViewNames.OPTION_VIEW:
        //         return <OptionView {...this.props} />
        //     default:
        //         return <LoginView {...this.props} />
        // }
        return(
         <LoginView {...this.props} /> 
        )
    }
}

