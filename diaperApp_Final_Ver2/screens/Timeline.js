import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import firebase from '../firebase';
import Head from '../components/Head';


var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');

export default class Timeline extends Component {

  static navigationOptions = () => ({
    title: 'Welcome!',
    headerStyle: {
      backgroundColor: '#e9446a',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  render() {
    return (
      <View style={styles.container}>
        <Head />
        <ScrollView horizontal style={styles.scrollContainer}>
          <View style={styles.containerOne}>

            <Text style={styles.headerOne}>
              Timer
             </Text>
            <Text style={styles.headerOne}>
              Its nap time!
              Track you child's sleeping time.
              Diaper shows you your baby's sleeping cycle.

            </Text>

            <TouchableOpacity
              style={styles.doneBtn}
              onPress={() => this.props.navigation.navigate('Timer')}
            >

              <Text style={styles.btnText}>Let's Do It</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.containerTwo}>
            <Text style={styles.headerOne}>
              Bottle
        </Text>
            <Text style={styles.headerOne}>
              Its feeding time!
              DIaper suggests baby feeding times and .
              Diaper shows you your baby's sleeping cycle.

            </Text>
            <TouchableOpacity
              style={styles.doneBtn}
              onPress={() => this.props.navigation.navigate('Bottle')}
            >

              <Text style={styles.btnText}>Yay!</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerThree}>
            <Text style={styles.headerOne}>
              Solids
        </Text>
            <Text style={styles.headerOne}>
              Whats your baby's favourite food. Learn more on the food that keeps your baby happy and healthy.

            </Text>
            <TouchableOpacity
              style={styles.doneBtn}
              onPress={() => this.props.navigation.navigate('Solid')}
            >

              <Text style={styles.btnText}>I'm interested</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  scrollContainer: {
    height: -100,
    width: '100%',
    borderTopLeftRadius: 50,
  },

  textInput: {
    backgroundColor: '#ddca6c',
    height: 30,
    width: '100%',
  },
  bottomContainer: {
    backgroundColor: '#93c8f2',
    borderStyle: "solid",
    height: 85,
    width: width,
    alignItems: 'center',
  },
  createListInput: {
    backgroundColor: '#fff',
    borderStyle: "solid",
    borderColor: '#3a2995',
    height: 50,
    width: width - 100,
    paddingLeft: 10,
  },
  todoText: {
    textAlignVertical: 'center',
  },
  box: {
    width: '100%',
    height: 30,
    backgroundColor: '#ddca6c',
    top: 0
  },
  listBox: {
    width: '100%',
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 10,
  },
  checkList: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#3a2995',
    tintColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listInline: {
    color: '#fff',
  },
  btnContainer: {
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
  },

  deleteBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#d81b60',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  doneBtn: {
    alignContent: "center",
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    height: 150,
  },
  btnText: {
    color: '#fff',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#ffffff',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 10
  },

  base: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
  },
  containerOne: {
    alignItems: 'center',
    backgroundColor: '#CDC785',
    borderRadius: 50,
    elevation: 1,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    elevation: 10,
    width: 300,
    // height: 450,
    margin: 25,
    flex: 2,
  },
  containerTwo: {
    alignItems: 'center',
    backgroundColor: '#FF674D',
    borderRadius: 50,
    elevation: 1,
    justifyContent: 'center',
    margin: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    elevation: 10,
    width: 300,
    flex: 1,
  },
  containerThree: {
    alignItems: 'center',
    backgroundColor: '#FFB066',
    borderRadius: 50,
    elevation: 1,
    justifyContent: 'center',
    margin: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    elevation: 10,
    width: 300,
    flex: 1,
  },
  headerOne: {
    color: 'white',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});






