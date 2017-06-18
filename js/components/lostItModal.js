import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, Item, Label, Form } from 'native-base';
import {View, Text, StyleSheet} from 'react-native';





export default class LostItModal extends Component {
    render() {
        return (
             <Container>
                    <Content>
                        <Form style ={{Top: 200}}>
                            <Item stackedLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                        </Form>
                    </Content>
                </Container>
        );
    }
}