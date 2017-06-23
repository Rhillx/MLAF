import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, Item, Label, Form, Button } from 'native-base';
import {View, Text, StyleSheet} from 'react-native';

import ImageSelector from './imagePicker';
import PickerExample from './picker';





export default class LostItModal extends Component {
    render() {
        return (
           <Container>
                <Content>
                    <View style ={{marginTop: 100}}>
                        <ImageSelector {...this.props} />
                    </View> 
                  
                    <Item regular style ={{marginLeft: 20, marginRight: 20, marginTop: 40}}>
                        <Input placeholder= 'Description..'/>
                    </Item>
                    <Button iconLeft rounded danger style={{marginLeft:120, marginTop: 200}}
                    >
                        <Icon name='eye'/>
                     <Text style={{color: '#fff', fontSize: 30 }}>Lost</Text>
                  </Button>
                </Content>
            </Container>    
        );
    }
}