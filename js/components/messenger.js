import React, { Component } from 'react';
import {View, Text, Button, TouchableOpacity, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {Container, Content, Item, Input, Icon, Card, CardItem} from 'native-base';
import {Constants} from 'expo'; 








export default class Messenger extends Component {

    state = {currentUserMessage: '', margin: 700}


handleUserMessage(text){
    // console.log('text is-------',text);
    this.setState({

         currentUserMessage: text

    })
}

submitMessage(){
   this.props.dispatch('SEND_MESSAGE',{
            message: this.state.currentUserMessage,
            userId: this.props.foundItemsList[this.props.viewInfo.index].userId
        })
    }

        
	render(){
		console.log('in messanger')
		
		return(

                 <KeyboardAvoidingView behavior='padding' style={styles.container}>
                     <Item rounded style={styles.inputBox}>
                         <Input placeholder='Type Message..' 
                         onChangeText={(text)=> this.handleUserMessage(text)}
                         blurOnSubmit={true}
                         multiline={true}/>
                     <TouchableOpacity onPress={() => this.submitMessage()}>
                        <Icon active name='paper-plane'/>
                    </TouchableOpacity>
                     </Item>
                </KeyboardAvoidingView>
        
            )

	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'column-reverse'
},


})
