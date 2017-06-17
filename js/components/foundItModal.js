import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, Item } from 'native-base';
import {View, Text, StyleSheet} from 'react-native'
import ImageSelector from './imagePicker';


export default class FoundItModal extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style ={{marginTop: 200}}>
                        <ImageSelector {...this.props} />
                    </View> 
                    <Item underlined>
                        <Input style = {{marginTop: 200}} placeholder= 'Description..'/>
                    </Item>
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
    }
})
             