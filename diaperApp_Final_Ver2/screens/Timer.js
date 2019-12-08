import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import Modal from "react-native-modal";
// import Time from '../components/Time';
import firebase from '../firebase';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export default class Timer extends Component {

  activityDatabase = firebase.database().ref('activities'); 
  
  constructor(props) {
    super(props);
    this.state = {
      activities:{},
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      startDisable: false,
      modalBtnDisable: false,
      isModalVisible: false,
      date: new Date(),
      startTime: null,
    }
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  onButtonStart = () => {
    let timer = setInterval(() => {
      var num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter;
      if (Number(this.state.seconds_Counter) == 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = '00';
      }
      this.setState({
        minutes_Counter: count.length == 1 ? '0' + count : count,
        seconds_Counter: num.length == 1 ? '0' + num : num
      });
    }, 1000);
    this.setState({ timer });
    this.setState({startDisable : true})

    let startTime = this.state.date.toLocaleTimeString();
    this.setState({ startTime });
  }
  onButtonStop = () => {
    clearInterval(this.state.timer);
    this.setState({startDisable : false})
  }
  onButtonClear = () => {
    this.setState({
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
    });
  }


  toggleModal = () => {
      this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  create(){

    console.log(this.state.minutes_Counter);
  
    const feedingTime = this.state.minutes_Counter +" : "+ this.state.seconds_Counter;
    console.log(feedingTime);

    this.activityDatabase.push({category:"Breast Feeding", feedingTime: feedingTime, startTime: this.state.startTime, amount: 'N/A', unit:'N/A', userId: firebase.auth().currentUser.uid, date:　firebase.database.ServerValue.TIMESTAMP });
    this.setState({modalBtnDisable : true})
  }


  render() {
    return (
      <View style={styles.MainContainer}>
        {
          this.state.startTime !== null && <Text>{this.state.startTime}</Text>
        }

        <Text style={styles.counterText}>{this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>
        <TouchableOpacity
          onPress={this.onButtonStart}
          activeOpacity={0.6}
          style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#cdc785' }]}
          disabled={this.state.startDisable} >
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onButtonStop}
          activeOpacity={0.6}
          style={[styles.button, { backgroundColor:  '#cdc785'}]} >
          <Text style={styles.buttonText}>STOP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onButtonClear}
          activeOpacity={0.6}
          style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#cdc785' }]}
          disabled={this.state.startDisable} >
          <Text style={styles.buttonText}> CLEAR </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.toggleModal}
          style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#cdc785'}]}
          disabled={this.state.registerDisable} >
          <Text style={styles.buttonText}> SAVE </Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={this.toggleModal}
            underlayColor='#fff'>
            
              <Image style={styles.imagestyle} source={require('../assets/close-button.png')} />
            
            {/* <Text style={styles.btnText}>Done</Text> */}
          </TouchableOpacity>
        </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff" }}>
              
          <Text>Begin Time {this.state.startTime}</Text>

          <Text>{this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>

          <TouchableOpacity 
            onPress={this.toggleModal}
            style={[styles.modalCancelButton, { borderColor: this.state.startDisable ? '#B0BEC5' : '#cdc785' }]}
            disabled={this.state.modalBtnDisable} 
          >
              <Text style={{ color: "#cdc785", fontWeight: "500" }}>CANCEL</Text>
          </TouchableOpacity>   

          <TouchableOpacity 
            onPress={() => this.create()}
            style={[styles.modalButton, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#cdc785' }]}
            disabled={this.state.modalBtnDisable} 
          >

            <Text style={{ color: "#FFF", fontWeight: "500" }}>SAVE</Text>
          </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: '50%',
    paddingTop:8,
    paddingBottom:8,
    borderRadius:7,
    borderRadius: 20,
    marginTop: 10
  },
  buttonText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 20
  },
  counterText:{
    fontSize: 28,
    color: '#000'
  },
  modalButton: {
    marginHorizontal: 30,
    width: '50%',
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  modalCancelButton: {
    marginHorizontal: 30,
    width: '50%',
    borderWidth: 1,
    backgroundColor: "#FFF",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  btnContainer:{
    position: "absolute",
    top: 50,
    left: width - 100,
    // marginTop: 40,
    // marginBottom: 5,
    zIndex: 5,
    
  },
  closeBtn:{
    marginBottom: 5,
    paddingTop:10,
    paddingBottom:10,}
});