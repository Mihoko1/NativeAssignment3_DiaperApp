import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        return (
            <View style={styles.base}>
                <View style={styles.BG}>
                    <Text style={styles.name}>Hi {this.state.displayName}!</Text>
                    <Text style={{color: '#ffff', fontSize: 16,textAlign:'center', marginHorizontal:20,}}>This is your profile, feel free to sign out or scroll through other section.If you sign out remember that you have to sign in when the app starts.</Text>
                </View>
                <View style={styles.bb}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.signOutUser}
                        underlayColor='#fff'>
                        <Text style={{color: '#d81b60', fontSize: 20, fontWeight:'bold'}}>SIGN OUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    base:{
        flex:1,
    },
    
    BG:{
        backgroundColor:'#d81b60',
        flex: 2, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    bb:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    name:{
        color:'#ffffff',
        fontSize:32,

    },
    button: {
        color: '#d81b60',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#d81b60',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 20,
        width:'50%',
    },
   
  });

