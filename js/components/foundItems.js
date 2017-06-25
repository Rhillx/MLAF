import React, {Component } from 'react';
import {View, Text} from 'react-native';
import { Button, Container, Content } from 'native-base';
import BinView from './binView';





export default class FoundItem extends Component{


componentDidMount(){
    this.props.dispatch('GET_FOUND_ITEMS', {})
}





    render(){
        
        console.log('listitems', this.props.foundItemsList)

        return(
        <Container>
            <Content>
                {this.props.foundItemsList.map((foundItem, i) => {
                    return <BinView key={i} {...foundItem} currentIdx={i} dispatch={this.props.dispatch} />
                })}
            </Content>
        </Container>
        )    

    
    }



    
}