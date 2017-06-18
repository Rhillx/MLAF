import React, { Component } from 'react';
import { Drawer, Button, Icon, View} from 'native-base';
import Sidebar from './sidebar';
import OptionView from './optionView';




export default class DrawerEx extends Component {

          closeDrawer = () => {
              this.drawer._root.close()
             };

             onSwipeRight(){
                  this.drawer._root.open()
             }
        //  openDrawer = () => {
        //       this.drawer._root.open()
        //      };


    render() {
        return (
           

            <Drawer
              ref={(ref) => { this.drawer = ref; }}
            content={<Sidebar navigator={this.navigator} {...this.props} />}
              onClose={() => this.closeDrawer()} >
              <OptionView {...this.props} />
          </Drawer>
          
        );
    }
}