import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import {
    Icon,
    Button,
    Container,
    Content,
} from 'native-base';
 
export default class Sidebar extends Component{

    render(){
        return(
            <Container>
              <Content style ={{marginTop: 200}}>
                  <Button iconLeft large block light style = {{marginBottom: 20}}>
                      <Icon name='person' />
                      <Text>Account</Text>
                  </Button>
                   <Button iconLeft large block light style = {{marginBottom: 20}}>
                      <Icon name='settings' />
                      <Text>Settings</Text>
                  </Button>
                   <Button iconLeft large block light style = {{marginBottom: 20}}>
                      <Icon name='chatbubbles' />
                      <Text>Inbox</Text>
                  </Button>
                   <Button iconLeft large block light style = {{marginBottom: 20}}>
                      <Icon name='paper-plane' />
                      <Text>Contact Us</Text>
                  </Button>
                   <Button iconLeft large info>
                      <Icon name='arrow-back' />
                      <Text>Go Back</Text>
                  </Button>
                 </Content>
             </Container>
        )
    }
}