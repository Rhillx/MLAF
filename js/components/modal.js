import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import {
    Container,
    Content,
    Grid,
    Col,
    Button
} from 'native-base';

import FoundItModal from './foundItModal';
import LostItModal from './lostItModal';

export default class ModalView extends Component {

  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }

  setFoundModalVisible(visible) {
    this.setState({modalVisible: visible});
    this.props.dispatch('MODAL_SELECT', {
        modalSelect: 'found',
    })
  }

  setLostModalVisible(visible) {
    this.setState({modalVisible: visible});
    this.props.dispatch('MODAL_SELECT', {
        modalSelect: 'lost',
    })
  }

  render() {
   
    console.log(currentModal);
    // console.log(currentModalVal);

    return (

      <View style={{marginTop: 400}}>
        

      </View>
    );
  }
}

