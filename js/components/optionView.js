import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableOpacity, View, StyleSheet } from 'react-native';
import {
    Container,
    Content,
    Grid,
    Col,
    Button,
    Icon,
    Drawer,
} from 'native-base';
import Sidebar from './sidebar';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import FoundItModal from './foundItModal';
import LostItModal from './lostItModal';




export default class OptionView extends Component{

      constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }

  setFoundModalVisible(visible) {
    this.setState({modalVisible: visible});
    this.props.dispatch('MODAL_SELECT', {
        modalSelect: 'found',
    })
  }

  setLostModalVisible(visible) {
    this.setState({modalVisible: visible});
    this.props.dispatch('MODAL_SELECT', {
        modalSelect: 'lost',
    })
  }

             onSwipeRight(){
                  this.drawer._root.open()
             }

               closeDrawer = () => {
              this.drawer._root.close()
             };


 render (){
     let currentModal = null;
    if (this.props.currentModalVal === 'found') {
        currentModal = <FoundItModal {...this.props} />;
    }
    else if (this.props.currentModalVal === 'lost') {
        currentModal = <LostItModal {...this.props} />
    }

        console.log("in OPTIONVIEW");
        return(
             <Drawer
              ref={(ref) => { this.drawer = ref; }}
            content={<Sidebar navigator={this.navigator} {...this.props} />}
              onClose={() => this.closeDrawer()} >
              
            <Container>
                <Content>
                  <Grid>
                     <Modal
                         animationType={"slide"}
                          transparent={false}
                          visible={this.state.modalVisible}
                          onRequestClose={() => {alert("Modal has been closed.")}}
                          >

                         {currentModal}
                     
                         <Button primary onPress={() => {this.setLostModalVisible(!this.state.modalVisible)}}>
                            <Text>GO BACK</Text>
                       </Button>
                        </Modal>

                        <Col style={{ backgroundColor: '#096480', height: 800 }}>
                        <GestureRecognizer onSwipeRight ={()=> this.onSwipeRight()}>
                        <Icon name='arrow-forward' style = {{marginTop: 150}}/>
                        <Text>pull for menu</Text>
                        </GestureRecognizer>
                         <TouchableOpacity style ={styles.foundItBtn} onPress={() => {
                             this.setFoundModalVisible(true)
                         }}>
                             <Text style={styles.foundItText} >FOUND IT</Text>
                             </TouchableOpacity>
                        </Col>
                        
                        <Col style={{ backgroundColor: '#cacdd1', height: 800  }}>
                             <TouchableOpacity style ={styles.lostItBtn} onPress={() => {
                              this.setLostModalVisible(true)
                         }}>
                             <Text style={styles.lostItText}>LOST IT</Text>
                             </TouchableOpacity>
                         </Col>
                    </Grid>
                </Content>
            </Container>
          </Drawer>
        )
 }
}

                        /*<View style ={styles.foundItBtn}>
                             <Button large block bordered>
                                 <Text style={styles.foundItText}>FOUND IT</Text>
                             </Button>
                         </View>*/

                          /*<View style ={styles.lostItBtn}>
                             <Button large block bordered>
                                 <Text style ={styles.lostItText}>LOST IT</Text>
                           </Button>
                         </View>*/

const styles = StyleSheet.create({
    foundItBtn:{
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lostItBtn:{
        marginTop: 400,
        alignItems: 'center',
        justifyContent: 'center',
    },
    foundItText:{
        fontSize: 35,
        textShadowColor: '#fff',
        textShadowRadius: 20
    },
    lostItText:{
        fontSize: 35,
        textShadowColor: '#fff',
        textShadowRadius: 20
    }
})


