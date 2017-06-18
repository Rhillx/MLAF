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
                        <Form style = {{marginBottom: 400}}>
                        <View style={{marginTop: 200}}>
                        <ImageSelector {...this.props} />
                        </View>
                        <PickerExample {...this.props} />
                            <Item stackedLabel>
                                <Label>Description...</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel last>
                                <Label>Location</Label>
                                <Input />
                            </Item>
                        </Form>
                    </Content>
                </Container>
        );
    }
}