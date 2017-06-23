import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, Item, Label, Form, Button } from 'native-base';
import {View, Text, StyleSheet} from 'react-native';

import ImageSelector from './imagePicker';
import PickerExample from './picker';





export default class LostItModal extends Component {
state = {
    description: "",
    image: "",
}

handleDescription(text){
    this.setState({
        description: text
    })
}

handleImageUpload(uri) {
    this.setState({
        image: uri,
    })
}



submit(){

    this.props.dispatch('POST_LOST_ITEM', {
        description: this.state.description,
        image: this.state.image,
        viewNum: 2,
        modalVisible: false,
        // currentModalVal: null,
    })
    
}








    render() {
        return (
           <Container>
                <Content>
                    <View style ={{marginTop: 100}}>
                        <ImageSelector {...this.props} onImageUploaded={this.handleImageUpload.bind(this)} />
                    </View> 
                  
                    <Item regular style ={{marginLeft: 20, marginRight: 20, marginTop: 40}}>
                        <Input placeholder= 'Description..'
                                 value={this.state.description}
                               onChangeText={(text) => this.handleDescription(text)}/>
                    </Item>
                    <Button iconLeft rounded danger style={{marginLeft:120, marginTop: 200}}
                    onPress={() => this.submit()}
                    >
                        <Icon name='eye'/>
                     <Text style={{color: '#fff', fontSize: 30 }}>Lost</Text>
                  </Button>
                </Content>
            </Container>    
        );
    }
}