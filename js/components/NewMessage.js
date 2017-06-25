import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Icon, Right, Grid, Col } from 'native-base';


export default class NewMessage extends Component {

  openMessenger(){
    this.props.dispatch('CHANGE_VIEW', {
      viewNum: 4,
      viewInfo: {
        index: this.props.currentIdx,
      }
    })
  }

  // submitMessage() {
  //   this.props.dispatch('SEND_MESSAGE',{
  //       message: "testing",
  //       userId: this.props.userId
  //   })
  // }

  openMessenger() {
    this.props.dispatch('CHANGE_VIEW', {
        viewNum: 5,
    })
  }

  clearMessenger() {
      this.props.dispatch('CLEAR_MESSAGES');
  }

  render() {
    if(this.props.newMessage === null) {
        return null;
    }

    return (<View style={{
        position: 'absolute', 
        top: 30, 
        right: 0, 
        width: 130,
    }}>
        <Grid>
            <Col style={{height: 50}}>
                <Button danger onPress={()=> this.openMessenger()}>
                    <Icon name='paper-plane'/>
                </Button>
            </Col>
            <Col style={{height: 50}}>
                <Button dark onPress={()=> this.clearMessenger()}>
                    <Icon name='close'/>
                </Button>
            </Col>
         </Grid>
    </View>);
  }
}