import React from 'react';
import { Button, Text, View, Modal, Alert,Image } from 'react-native';
import styles from '../styles.js';

export default class Solid extends React.Component {
  state = {
    modalPaymentVisible: false,
    modalPrintVisible: false,
  };

  setModalPaymentVisible(visible) {
    this.setState({modalPaymentVisible: visible});
  }
  setModalPrintVisible(visible) {
    this.setState({modalPrintVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This app is proudly sponsored by Cherub Baby Foods.</Text>
        <Text>Get 25% off your next order.</Text>
        <Image 
            source={{uri: 'https://media.giphy.com/media/igPJapPeOSLsjoMvMd/giphy.gif'}} 
            style={{width: 300, height: 300}}/>
        <View>
        <Text style={styles.headColor}>This week baby food recommendations</Text>
          <Text>Avocados</Text>
          <Text>Bananas</Text>
          <Text>Blueberries</Text>
          <Text>Broccoli</Text>
          <Text>Lentils</Text>
          <Text>Meat</Text>
          <Text>Prunes</Text>
        </View>
          

      </View>
    );
  }
}