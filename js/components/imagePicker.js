import React from 'react';
import { Image, View } from 'react-native';
import {Icon, Button, Text} from 'native-base';
import { ImagePicker } from 'expo';



export default class ImageSelector extends React.Component {
  state = {
    image: null,
  };

openCamera(){
  this.props.dispatch('OPEN_CAM',{

  })
}
  render() {
    let { image } = this.state;

    return (
      <View style={{ alignItems: 'center', 
                    justifyContent: 'center', 
                    marginTop: 100,
                    flex:1,
                    flexDirection: 'row' }}>
        <Button rounded onPress={() => this.openCamera()} style={{backgroundColor: '#096480', marginRight: 15}}>
          <Icon name='camera'/>
        </Button>
        <Button rounded onPress={this._pickImage} style={{backgroundColor: '#096480'}}> 
          <Icon name='images'/>
        </Button>
      {image &&
          <Image source={{ uri: image }} style={{ width: 400, height: 300 }} />}
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.props.onImageUploaded(result.uri)
      return result
    }
  };
}