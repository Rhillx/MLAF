import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';



export default class ResponseMessage extends Component {


  render() {

    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
           </CardItem>
         </Card>
        </Content>
     </Container>
    )
  }
}