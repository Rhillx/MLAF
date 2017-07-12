import React, { Component } from 'react';
import { Container, Content, Picker, Input, Item } from 'native-base';


const Pick = Picker.Item;
export default class PickerExample extends Component {
 
   state = {
       editable: false,
      selected: 'key1',
      results: {
        items: []
      }
    }

  onValueChange (value: string) {
    this.setState({
      selected : value
    });
    if(this.state.selected != 'other'){
        this.state.editable
    }else{
        this.setState({
            editable: true
        })
    }

}
 

  
    
  


  render() {

    return (
      <Container>
        <Content>
          <Picker
            supportedOrientations={['portrait','landscape']}
            iosHeader="Select one"
            headerBackButtonText="Go Back"
            mode="dialog"
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}>
            <Pick label="Wallet" value="key0" />
            <Pick label="Keys" value="key1" />
            <Pick label="Clothing" value="key2" />
            <Pick label="Jewlery" value="key3" />
            <Pick label="Bag/Purse" value="key4" />
            <Pick label="Phone" value="key5" />
            <Pick label="Umbrella" value="key6" />
            <Pick label="Other.." value="other" />
         </Picker>

          <Item regular>
            <Input placeholder='Please enter type if Other....'
                    editable={this.state.editable} />
          </Item>

        </Content>
      </Container>
    );
  }
}

