<Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >

            {currentModal}

            <TouchableHighlight onPress={() => {this.setLostModalVisible(!this.state.modalVisible)}}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
        </Modal>



// TOUCHABLEHGIHLIGHT FOR MODAL

 <TouchableHighlight onPress={() => {
          this.setLostModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

// IF STATEMENT FOR MODAL

let currentModal = null;
    if (this.props.currentModalVal === 'found') {
        currentModal = <FoundItModal {...this.props} />;
    }
    else if (this.props.currentModalVal === 'lost') {
        currentModal = <LostItModal {...this.props} />
    }
