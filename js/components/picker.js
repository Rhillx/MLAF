import React, { Component } from 'react';
import { Container, Content, Picker } from 'native-base';
import {View} from 'react-native';



const Item = Picker.Item;


export default class PickerExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: []
            }
        }
    }
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }

    changeInput(){
        this.setState({
            inputFeild:  <Item underlined><Input placeholder='Enter Item'/></Item>
        })
    }



    render() {
  
        return (
            <Container>
                <Content >
                    <View style= {{marginTop: 400}}>
                    <Picker 
                        supportedOrientations={['portrait','landscape']}
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}
                        >
                        <Item label="Select One" value="key0" />
                        <Item label="keys" value="key1" />
                        <Item label="Clothing" value="key2" />
                        <Item label="Bag" value="key3" />
                        <Item label="wallet" value="key4" />
                        <Item label="Other.." value="key5" />
                   </Picker>
                   </View>
                </Content>
            </Container>
        );
    }
}