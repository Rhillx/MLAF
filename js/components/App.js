import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import LoginView from './loginView';
import OptionView from './optionView';
import ModalExample from './modal';
// import ImageSelector from './imagePicker';
import FoundItModal from './foundItModal';

export default class App extends Component{

    componentDidMount(){
        const {currentUser} = this.props
        if(currentUser != null){
            this.props.dispatch('CHANGE_VIEW', {
                viewNum: 2           
            })
        }
    };



    render(){
        return(
         <LoginView {...this.props} /> 
        )
    }
}