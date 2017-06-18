import Expo from 'expo';
import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
    Grid,
    Col,
    Content,
    Container,
    Button,

} from 'native-base';


export default class OptionView extends Component{

 render (){
        console.log("in OPTIONVIEW");
        return(

            <Container>
                <Content>
                  <Grid>
                        <Col style={{ backgroundColor: '#096480', height: 800 }}>
                        <View style ={styles.foundItBtn}>
                             <Button large block bordered>
                                 <Text style={styles.foundItText}>FOUND IT</Text>
                             </Button>
                         </View>
                        </Col>
                        <Col style={{ backgroundColor: '#cacdd1', height: 800  }}>
                        <View style ={styles.lostItBtn}>
                             <Button large block bordered>
                                 <Text style ={styles.lostItText}>LOST IT</Text>
                           </Button>
                         </View>
                         </Col>
                    </Grid>
                </Content>
            </Container>
        )
 }
}


