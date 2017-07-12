import {Expo, Constants, Location, Permissions, ImagePicker} from 'expo';




export async function getLocationAsync(){
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
     return
    }

    let location = await Location.getCurrentPositionAsync({});

  return location;
};

export async function takePhotoAsync(){
  let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });
  if (!result.cancelled) {
     return result
  }
};

