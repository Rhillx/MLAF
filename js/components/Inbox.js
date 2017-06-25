import React, {Component } from 'react';
import {View, Text} from 'react-native';
import { Button, Container, Content, Card, CardItem, Right, Icon } from 'native-base';
import BinView from './binView';





export default class Inbox extends Component{


  openMessenger(i){
    this.props.dispatch('CHANGE_VIEW', {
      viewNum: 4,
      viewInfo: {
        index: i,
        key: 'newMessage'
      }
    })
  }



    render(){ 
        
        console.log('listitems', this.props.newMessage)

        return(
        <Container>
            <Content>
                {this.props.newMessage.map((thread, i) => {
                    return <Card>
                        <CardItem header>
                            <Text>{thread.user}</Text>
                        </CardItem>
                        <CardItem>
                            <Right>
                                <Button rounded onPress={()=> this.openMessenger(i)}>
                                    <Icon name='paper-plane'/>
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem footer>
                            <Text>{new Date(parseInt(thread.time, 10)).toString()}</Text>
                        </CardItem>
                    </Card>
                })}
            </Content>
        </Container>
        )    

    
    }



    
}

/*
{this.props.foundItemsList.map((foundItem, i) => {
                    return <BinView key={i} {...foundItem} currentIdx={i} dispatch={this.props.dispatch} />
                })}
*/