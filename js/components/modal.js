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

export default class OptionView extends Component {

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
   let currentModal = null;
    if (this.props.currentModalVal === 'found') {
        currentModal = <FoundItModal {...this.props} />;
    }
    else if (this.props.currentModalVal === 'lost') {
        currentModal = <LostItModal {...this.props} />
    }

    console.log(currentModal);
    // console.log(currentModalVal);

    return (

      <View style={{marginTop: 400}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >

            {currentModal}

            <TouchableHighlight onPress={() => {this.setLostModalVisible(!this.state.modalVisible)}}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setLostModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

// const styles = StyleSheet.create({
//     foundItBtn:{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     lostItBtn:{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     foundItText:{
//         fontSize: 35,
//         textShadowColor: '#fff',
//         textShadowRadius: 20
//     },
//     lostItText:{
//         fontSize: 35,
//         textShadowColor: '#fff',
//         textShadowRadius: 20
//     }
// })