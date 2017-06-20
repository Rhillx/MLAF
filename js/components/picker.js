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
                    <View style= {{marginTop: 100}}>
                    <Picker 
                        supportedOrientations={['portrait','landscape']}
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}
                        >
                        <Item label="Select One" value="key0" />
                        <Item label="Keys" value="key1" />
                        <Item label="Clothing" value="key2" />
                        <Item label="Bag/Purse" value="key3" />
                        <Item label="Wallet" value="key4" />
                        <Item label="Other.." value="key5" />
                   </Picker>
                   </View>
        
        
        );
    }
}