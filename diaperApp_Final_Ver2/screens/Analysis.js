import React from 'react';
import { StyleSheet, Button, Text, View, Modal, Alert, ScrollView } from 'react-native';
// import styles from '../styles.js';
import firebase from '../firebase';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export default class Analysis extends React.Component {

  activityDatabase = firebase.database().ref('activities'); 

  state = {activities: {}}

  componentDidMount(){

    this.activityDatabase.on('value', activities=> {
      const activitiesJSON = activities.val();
      this.setState({ activities: activitiesJSON === null ? {} : activitiesJSON});
    })
    
  }


  static navigationOptions = ()=>({
    title: 'Analysis',
    headerStyle: {
      backgroundColor: '#3a2995',
      
    },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
  });


 

  render() {
    return (
      <View style={styles.container}>
         <ScrollView style={styles.scrollContainer}>

          {

            (Object.keys(this.state.activities).length == 0) ? (
              <Text>No Data</Text>
            ):(
              Object.keys(this.state.activities).map((activityId, index) =>

            <View key={index}  style={styles.listBox} >
          
                <Text style={styles.resultText, {color: 'black', width: width - 120}}>
                  {
                      `${JSON.stringify(this.state.activities[activityId].category).slice(1, -1)}`
                  }
                </Text> 
                <View>
                  {/* <Text>Start time </Text> */}
                  <Text style={styles.resultText, {color: 'black', width: width - 120}}>
                    {
                        `Start time : ${JSON.stringify(this.state.activities[activityId].startTime).slice(1, -1)}`
                      }
                  </Text> 
                </View>
                <View>
                  {/* <Text>Duration</Text> */}
                  <Text style={styles.resultText, {color: 'black', width: width - 120}}>
                    {
                        `Duration : ${JSON.stringify(this.state.activities[activityId].feedingTime).slice(1, -1)}`
                      }
                  </Text> 
                </View>
                <View>
                  {/* <Text>Amount</Text> */}
                  <Text style={styles.resultText, {color: 'black', width: width - 120}}>
                    {
                        `Amount : ${JSON.stringify(this.state.activities[activityId].amount).slice(1, -1)} ${JSON.stringify(this.state.activities[activityId].unit).slice(1, -1)}`
                      }
                  </Text> 
                </View>
            </View>
            )
            
            
            )
          }
          </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      
    },
    scrollContainer:{
        height: -100,
        width: '100%',
    },

    textInput: {
        backgroundColor: '#ddca6c',
        height: 30,
        width: '100%',
    },
    bottomContainer:{
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
   
    listBox: {
        width: '100%',
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 30,
        paddingRight:10,   
    },
    btnText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
    }
});
