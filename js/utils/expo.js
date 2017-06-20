import {Expo, Constants, Location, Permissions} from 'expo';




export async function getLocationAsync(){
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
     return
    }

    let location = await Location.getCurrentPositionAsync({});
  console.log('location is', location.coords.latitude);
  return location
  };

