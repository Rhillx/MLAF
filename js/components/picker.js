import React, { Component } from 'react';
import { Container, Content, Picker, Input } from 'native-base';
import {View} from 'react-native';





const Item = Picker.Item;
export default class PickerExample extends Component {
   
    state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: []
            },
            // textboxVisible: false,
        }
    
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }

//    setTextBoxVisible(visible){
//        if(this.state.selected1 === 'key5'){
//            this.setState({textboxVisible: visible})
//        }
//    }



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
                        <Item label="Other" value="key5" />
                   </Picker>
                        <Item regular>
                        <Input placeholder='please enter item..'/>
                        </Item>
                   </View>
        
        
        );
    }
}