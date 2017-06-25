import React, { Component } from 'react';
import {Text} from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Icon, Right } from 'native-base';


export default class BinView extends Component {

  openMessenger(){
    
  }

  // submitMessage() {
  //   this.props.dispatch('SEND_MESSAGE',{
  //       message: "testing",
  //       userId: this.props.userId
  //   })
  // }

  render() {

    console.log('binview', this.props)
    return (

          <Card>
            <CardItem header>
              <Text>{this.props.description}</Text>
            </CardItem>
            <CardItem>
                 <Right>
               <Button rounded onPress={()=> this.submitMessage()}>
                 <Icon name='paper-plane'/>
               </Button>
                 </Right>
            </CardItem>
            <CardItem footer>
              <Text>{this.props.date.toString()}</Text>
            </CardItem>
         </Card>

    );
  }
}