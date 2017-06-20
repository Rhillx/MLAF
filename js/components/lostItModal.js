import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, Item, Label, Form } from 'native-base';
import {View, Text, StyleSheet} from 'react-native';

import ImageSelector from './imagePicker';
import PickerExample from './picker';





export default class LostItModal extends Component {
    render() {
        return (
             <Container>
                    <Content>
                        <View style={{marginTop: 200}}>
                        <ImageSelector {...this.props} />
                        </View>
                        <PickerExample {...this.props} />
                        <Form>
                            <Item regular style = {{marginTop: 30}} >
                                <Input placeholder='Description..'/>
                           </Item>
                        </Form>
                    </Content>
                </Container>
        );
    }
}