import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

import FoundItModal from './foundItModal'

export default class Oti extends Component {

  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }

  setFoundModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleFoundModal(){
      this.props.currentModal = 'found';

        }



  render() {
   let currentModal = null;
    if (this.props.currentModalVal === 'found') {
        currentModal = <FoundItModal {...this.props} />;
    }
    else if (this.props.currentModalVal === 'lost') {
        currentModal = <LostItModal {...this.props} />
    }
    return (
      <View style={{marginTop: 400}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >

            {currentModal}

            <TouchableHighlight onPress={() => {this.setFoundModalVisible(!this.state.modalVisible)}}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setFoundModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
}