import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';

export default class Head extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
    };
  }


  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth(); //Current Month
    var year = new Date().getFullYear(); //Current Year
    var day = new Date().getDay();

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
      "Saturday"];
    // var hours = new Date().getHours(); //Current Hours
    // var min = new Date().getMinutes(); //Current Minutes
    // var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      day: dayNames[day],
      date:
        monthNames[month] + ' ' + date + ', ' + year + ' '
    });
  }

  render() {
    return (


      <View style={styles.HeadTop}>
          <View style={styles.headView}>
            <Text
              style={styles.day}>
              {this.state.day}
            </Text>
            <Text
              style={styles.date}>
              {this.state.date}
            </Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HeadTop: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#ffecb6',
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomWidth: 1.5,
    // borderBottomColor: '#3a2995'
  },
  today: {
    fontSize: 20,
    marginTop: 16,
    color: '#3a2995',
  },
  day: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#d81b60',
  },
  
});

