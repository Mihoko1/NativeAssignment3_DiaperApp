import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import Modal from "react-native-modal";
// import Time from '../components/Time';
import firebase from '../firebase';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';


var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export default class Bottle extends Component {

  activityDatabase = firebase.database().ref('activities'); 
  state = {activities:{},amount: null,unit: '',date: new Date(),startTime: null,}
  
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  onButtonClear = () => {
    this.setState({
      amount: '',
      unit: '',
    });
  
  }

  create(){

    console.log(this.state.minutes_Counter);
    if(this.state.unit == ''){
      this.activityDatabase.push({category:"Bottle Feeding", feedingTime: 'N/A', startTime: this.state.startTime, amount: this.state.amount, unit: 'ml', userId: firebase.auth().currentUser.uid, date:　firebase.database.ServerValue.TIMESTAMP });
    }else{  
    
      this.activityDatabase.push({category:"Bottle Feeding", feedingTime: 'N/A', startTime: this.state.startTime, amount: this.state.amount, unit: this.state.unit, userId: firebase.auth().currentUser.uid, date:　firebase.database.ServerValue.TIMESTAMP });
    }
  }


  render() {
    return (
      <View style={styles.MainContainer}>
        <View>
        <Text>Start Time</Text>
        <DatePicker
          style={{width: width - 100, height: 50}}
          date={this.state.startTime}
          mode="time"
          placeholder="Select time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput:{
              borderWidth: 1,
              borderRadius: 20,
            },
          }}
          minuteInterval={10}

          onDateChange={(date) => {this.setState({startTime: date})}}
        />
        </View>
        <View style={styles.inLine}>
          <View style={styles.amountContainer}>
              <TextInput
                style={styles.input}
                placeholder="Input the amount"
                autoCapitalize="none"
                onChangeText={amount => this.setState({ amount })}
                value={this.state.amount}
            
              />
          </View>
            <View> 
              <RNPickerSelect
                placeholder={{}}
                items={[
                  { label: 'ml', value: 'ml'},
                  { label: 'oz', value: 'oz' },
              ]}
              onValueChange={(itemValue) =>
                this.setState({unit: itemValue})
              }
                InputAccessoryView={() => null}
                style={styles.pickerStyle}
                selectedValue={this.state.unit}
              />

              {/* <RNPickerSelect
                  selectedValue={this.state.unit}
                
                  style={{height: 100, width: '100%', color: '#000'}placeholder: {
                    color: 'purple',
                    fontSize: 12,
                    fontWeight: 'bold',
                  },}
                  onValueChange={(itemValue) =>
                    this.setState({unit: itemValue})
                  }
                  items={[
                      { label: 'ml', value: 'ml'},
                      { label: 'oz', value: 'oz' },
                  ]}
              /> */}
            </View>   
          
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.onButtonClear}
            activeOpacity={0.6}
            style={[styles.button, { borderColor: '#FF674D', borderWidth: 1}]}
            >
            <Text style={[styles.buttonClearText, {color: '#FF674D'}]}>CLEAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.create()}
            activeOpacity={0.6}
            style={[styles.button, { backgroundColor: '#FF674D'}]}
            >
            <Text style={styles.buttonText}>SAVE</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 10,
    color: '#FF674D',
  },
  inLine: {
    flexDirection: 'row',
    marginTop: 20,
    marginVertical: 20,
    paddingRight:5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  amountContainer:{
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    
  },
  buttonText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 20
  },
  buttonClearText:{
    color:'#F5FCFF',
    textAlign:'center',
    fontSize: 20
},
  input:{
    borderColor: '#B0BEC5',
    borderWidth: 1,
    width: width - 130,
    height: 40,
    paddingLeft: 10,
    paddingRight:10,
    borderRadius:20,
  },
  pickerBtn: {
    backgroundColor: '#F5FCFF',
  },
  pickerStyle:{
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }

});