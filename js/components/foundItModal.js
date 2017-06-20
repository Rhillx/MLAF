import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, Item, Button } from 'native-base';
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
                    <Item underlined style ={{marginBottom: 40}}>
                        <Input style = {{marginTop: 200}} placeholder= 'Description..'/>
                    </Item>
                    <Button rounded success style={styles.submitFoundBtn}>
                        <Text style={{color: '#fff'}}>+</Text>
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
    submitFoundBtn:{
         

    }
})
             