import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, Item, Button } from 'native-base';
import {View, Text, StyleSheet} from 'react-native'
import ImageSelector from './imagePicker';
import PickerExample from './picker';



export default class FoundItModal extends Component {

state = {
    description: "",
    note: "",
    image: "",
}

handleDescription(text){
    this.setState({
        description: text
    })
}

handleNote(text){
    this.setState({
        note: text
    })
}

handleImageUpload(uri) {
    this.setState({
        image: uri,
    })
}



submit(){

    this.props.dispatch('POST_FOUND_ITEM', {
        description: this.state.description,
        note: this.state.note,
        image: this.state.image,
        viewNum: 2,
        modalVisible: false,
        currentModalVal: null,
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
                        <Input placeholder= 'Please tell us what you found....' 
                               value={this.state.description}
                               onChangeText={(text) => this.handleDescription(text)}/>
                    </Item>
                    <Item regular style ={{marginLeft: 20, marginRight: 20, marginTop: 40}}>
                        <Input placeholder= 'Leave a note (optional)....' 
                               value={this.state.note}
                               onChangeText={(text) => this.handleNote(text)}/>
                    </Item>
                    <Button iconLeft rounded success style={{marginLeft:120}}
                    onPress={() => this.submit()}
                    >
                        <Icon name='eye'/>
                        <Text style={{color: '#fff', fontSize: 30 }}>Found</Text>
                  </Button>
                </Content>
            </Container>    
        );
    }
}


const styles = StyleSheet.create({
    foundModal:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    descInput:{
        marginTop: 30
    }
})
             