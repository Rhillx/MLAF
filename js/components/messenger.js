import React, { Component } from 'react'

export default class ChatRoom extends Component {



		

	updateMessage(event){
	//	console.log('updateMessage: '+event.target.value)
		this.setState({
			message: event.target.value
		})
	}


        


	render(){
		// this.setState({
		// 	messages:list
		// })
		firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
	}		const currentMessage = this.state.messages.map((message, i) => {
			return(
					<li key={message.id}>{message.text}</li>
				)
		}) 
		return(

			<div>
				<ol>
					{currentMessage}
				</ol>
				<input onChange={this.updateMessage} type="text" placeholder="Message" />
				<br />
				<button onClick={this.submitMessage}>Submit Message</button>
			</div>

			)

	}

}
