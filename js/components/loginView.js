import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container,
         Content, 
         Form, 
         Item, 
         Input,
         Label, 
         Button, 
         Thumbnail, 
         Icon, 
         Footer, 
         FooterTab,
         Badge
        
    } from 'native-base';



// FLUX 
import { Store } from '../flux/Store';
import { actions } from '../flux/actions';

// MY LOGIN COMPONENT

export default class LoginView extends Component {

    state = Store

    handleGooglePress(e) {
        this.props.dispatch('GOOGLE_SIGN_IN',{

        })
		// this.handleChange('');
	}
    handleFacebookPress(e) {
        this.props.dispatch('FACEBOOK_SIGN_IN',{

        })
		// this.handleChange('');
	}    
    
    
    render() {
        // console.log(this.props)
     const ButtonProps = {
			onPress: (e) => this.handleGooglePress(e),
		};

     const ButtonProps2 ={
            onPress: (e) => this.handleFacebookPress(e),
       };

        return (
             <View style = {styles.wrapper}>

                <View style = {styles.logo}>
                    <Image source ={require('../../assets/images/logo370113.jpg')} />
                </View>

                    {/*<View style ={styles.googleBtn}>*/}
                         <Button iconLeft block info {...ButtonProps}>
                            <Icon name = 'person' />
                             <Text style = {styles.signInText}> SIGN IN WITH GOOGLE </Text>
                         </Button>
                    {/*</View>*/}
                     {/*<View style={styles.facebokBtn}>*/}
                          <Button iconLeft block info {...ButtonProps2}>
                            <Icon name = 'person' />
                             <Text style = {styles.signInText}> SIGN IN WITH FACEBOOK </Text>
                         </Button>
                  {/*</View>*/}
                  {/*<View style ={styles.footer}>*/}
                      <Footer>
                            <FooterTab>
                                <Button full>
                                    <Text>Footer</Text>
                                 </Button>
                        </FooterTab>
                    </Footer>
                {/*</View>*/}
              </View>

        
            )
    }

}


const styles = StyleSheet.create({
  wrapper: {
     flex: 1,
    justifyContent: "center",
    alignItems: "center",
    },  

    logo:{
        bottom: 30,
    },

    signInText:{
        color: '#fff'
    },
})