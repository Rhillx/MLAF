import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
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

import Store from '../flux/Store'

import FoundItModal from './foundItModal';
import LostItModal from './lostItModal';




export default class OptionView extends Component{

//       constructor(props) {
//     super(props);
//     this.state = {modalVisible: false};
//   }

state = Store

  setFoundModalVisible() {
    // this.setState({modalVisible: visible});
    this.props.dispatch('MODAL_SELECT', {
        modalSelect: 'found',
        makeVisible: true
    })
  }

  setLostModalVisible() {
    // this.setState({modalVisible: visible});
    this.props.dispatch('MODAL_SELECT', {
        modalSelect: 'lost',
        makeVisible: true
    })
  }



  

             onSwipeRight(){
                  this.drawer._root.open()
             };

               closeDrawer = () => {
              this.drawer._root.close()
             };


    viewBinHandler(){
        console.log('imhit');
        this.props.dispatch('CHANGE_VIEW',{
            viewNum: 3
        })
    }


 render (){
        console.log(this.props);
     let currentModal = null;
    if (this.props.currentModalVal === 'found') {
        currentModal = <FoundItModal {...this.props} />
    }
    else if (this.props.currentModalVal === 'lost') {
        currentModal = <LostItModal {...this.props} />
    }

        console.log("in OPTIONVIEW", this.props);
        return(
             <Drawer
              ref={(ref) => { this.drawer = ref; }}
            content={<Sidebar navigator={this.navigator} {...this.props} />}
              onClose={() => this.closeDrawer()} >
              
            <Container>
            
                     <Modal
                         animationType={"fade"}
                          transparent={false}
                          visible={this.props.modalVisible}
                          onRequestClose={this.props.modalVisible}
                          >

                        {currentModal}
                     
                         <Button style = {{backgroundColor: '#096480'}}>
                            <Text>GO BACK</Text>
                       </Button>
                        </Modal>

                        <View style={styles.superContainer}>
                                    <GestureRecognizer onSwipeRight ={()=> this.onSwipeRight()}>
                                    <Icon name='arrow-forward' style={{marginTop: 100}}/>
                                    <Text>pull for menu</Text>
                                    </GestureRecognizer>
                            <View style={styles.container1}>
                                <TouchableOpacity onPress={()=> this.viewBinHandler()}>
                                    <Text style={styles.viewBin}>View Bin</Text>
                                 </TouchableOpacity>
                            </View>

                            <View style={styles.container2}>
                                

                                <View style={{ backgroundColor: '#096480', flex: 2 }}>

                                    <TouchableOpacity style ={styles.foundItBtn} onPress={() => {
                                        this.setFoundModalVisible()
                                    }}>
                                        <Text style={styles.foundItText}>FOUND IT</Text>
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={{ backgroundColor: '#cacdd1', flex: 2}}>
                                    <TouchableOpacity style ={styles.lostItBtn} onPress={() => {
                                    this.setLostModalVisible()
                                }}>
                                    <Text style={styles.lostItText}>LOST IT</Text>
                                    </TouchableOpacity>
                                </View>
                               
                            </View>
                         </View>

             
            </Container>
          </Drawer>
        )
 }
}

const styles = StyleSheet.create({
    superContainer: {
        flex: 1,
    },
    container1: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
     container2: {
        flex: 1,
        flexDirection: 'row'
    },
    viewBin: {
        fontSize: 30
    },
    foundItBtn:{
        // marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lostItBtn:{
        // marginTop: 400,
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
    },
    lostAddBtn:{
        backgroundColor: '#c0c5c6',
        // fontSize: 100
        flex: 1
    },
})


