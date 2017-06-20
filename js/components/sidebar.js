import React, {Component} from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
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
                <Image style={styles.image} 
                source = {require('../../assets/images/200x61.jpg')} 
                />
              <Content style ={{marginTop: 100}}>
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
                 </Content>
             </Container>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        width: 350,
        height: 100,
    }
})