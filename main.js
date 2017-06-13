import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Thumbnail, Icon} from 'native-base';

// import {createNewUser} from './js/utils/firebase'
import {Store} from './js/flux/Store';
import {actions} from './js/flux/actions';


export default class App extends Component {
    state = Store
     dispatch(actionName, options) {
    const actionToDo = actions[actionName];
    if (!actionToDo) return;

    actionToDo(this.state, options)
      .then(newStore => this.setState(newStore));
  }

    handlePress(e) {
        this.dispatch('FACEBOOK_SIGN_IN',{

        })
		// this.handleChange('');
	}

    render() {
     const ButtonProps = {
			onPress: (e) => this.handlePress(e),
		}
        return (


             <View style = {styles.wrapper}>

                <View style = {styles.logo}>
                    <Image source = {require('./assets/images/logo370113.jpg')} />
                </View>

                    <View style ={styles.googleBtn}>
                         <Button iconLeft block info {...ButtonProps}>
                            <Icon name = 'person' />
                             <Text style = {styles.signInText}> SIGN IN WITH GOOGLE </Text>
                         </Button>
                    </View>
                     <View >
                          <Button iconLeft block info>
                            <Icon name = 'person' />
                             <Text style = {styles.signInText}> SIGN IN WITH FACEBOOK </Text>
                         </Button>
                  </View>

              </View>
        
            )
    }

}


const styles = StyleSheet.create({
  wrapper: {
     flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // bottom: 25,
    },  

    logo:{
        bottom: 30,
    },

    signInText:{
        color: '#fff'
    },
    googleBtn:{
        bottom: 20,
    },
    // facebookbtn:{
    //     top: 30
    // }

//   signIn:{
//       left:20,
//       right:20,
//   }  
})

Expo.registerRootComponent(App);