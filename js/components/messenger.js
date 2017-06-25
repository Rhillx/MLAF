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
            userId: this.props[this.props.viewInfo.key][this.props.viewInfo.index].userId
        })
this.setState({

         currentUserMessage: ''

    })
    }

        
	render(){
		console.log('in messanger')

        let messages = [];
        if (this.props.viewInfo.key === 'newMessage' && this.props.newMessage.length) {
            const allMessages = this.props.newMessage[this.props.viewInfo.index].messages;
             console.log('messages', messages, this.props.viewInfo, this.props.newMessage, allMessages)
            messages = Object.keys(allMessages).map(message => {
                console.log(allMessages[message])
                return <Text>{allMessages[message].message}</Text>
            })
        }

        console.log('messages', messages, this.props.viewInfo, this.props.newMessage)
		
		return(

                 <KeyboardAvoidingView behavior='padding' style={styles.container}>
                     <Item rounded style={styles.inputBox}>
                         <Input placeholder='Type Message..' 
                         onChangeText={(text)=> this.handleUserMessage(text)}
                         blurOnSubmit={true}
                         value={this.state.currentUserMessage}
                         multiline={true}/>
                     <TouchableOpacity onPress={() => this.submitMessage()}>
                        <Icon active name='paper-plane'/>
                    </TouchableOpacity>
                     </Item>
                     <View>
                        {messages}
                    </View>
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
