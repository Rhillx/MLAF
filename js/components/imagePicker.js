import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';

export default class ImageSelector extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Select Image"
          onPress={this._pickImage}
        />
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

    console.log(result);
    console.log(this.props);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.props.onImageUploaded(result.uri)
      return result
    }
  };
}