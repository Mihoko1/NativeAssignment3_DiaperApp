import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity,Image,ScrollView } from 'react-native'
import firebase from '../firebase'

export default class SignUp extends React.Component {
    state = { email: '', password: '', errorMessage: null,users: {}, name:'', bname: '' }
    handleSignUp = () => {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(userCredentials => {
              return userCredentials.user.updateProfile({
                  displayName: this.state.name
              });
          })
          .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
      return (
          <ScrollView>
          <View style={styles.container}>
              <Image 
            source={{uri: 'https://media.giphy.com/media/Pnh4QttQBaqDyk6m9d/giphy.webp'}} 
            style={{width: 120, height: 120, alignSelf: 'center',}}/>

              <Text style={styles.greeting}>{`Hello!\nSign up to get started.`}</Text>

              <View style={styles.errorMessage}>
                  {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
              </View>

              <View style={styles.form}>
                  <View>
                      <Text style={styles.inputTitle}>Full Name</Text>
                      <TextInput
                          style={styles.input}
                          autoCapitalize="none"
                          onChangeText={name => this.setState({ name })}
                          value={this.state.name}
                      ></TextInput>
                  </View>

                  <View style={{ marginTop: 32 }}>
                      <Text style={styles.inputTitle}>Your Baby Name</Text>
                      <TextInput
                          style={styles.input}
                          autoCapitalize="none"
                          onChangeText={bname => this.setState({ bname })}
                          value={this.state.bname}
                      ></TextInput>
                  </View>

                  <View style={{ marginTop: 32 }}>
                      <Text style={styles.inputTitle}>Email Address</Text>
                      <TextInput
                          style={styles.input}
                          autoCapitalize="none"
                          onChangeText={email => this.setState({ email })}
                          value={this.state.email}
                      ></TextInput>
                  </View>

                  <View style={{ marginTop: 32 }}>
                      <Text style={styles.inputTitle}>Password</Text>
                      <TextInput
                          style={styles.input}
                          secureTextEntry
                          autoCapitalize="none"
                          onChangeText={password => this.setState({ password })}
                          value={this.state.password}
                      ></TextInput>
                  </View>
              </View>

              <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                  <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign up</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignSelf: "center", marginTop: 32, padding:20, }}
              onPress={() => this.props.navigation.navigate("Login")}>
                  <Text style={{ color: "#414959", fontSize: 16 }}>
                      Do you have account? <Text style={{ fontWeight: "500", color: "#E9446A" }}>Login</Text>
                  </Text>
              </TouchableOpacity>
          </View>
          </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderColor: "#E9446A",
    borderWidth: 2,
    borderRadius:20,
    height: 50,
    padding:10,
    fontSize: 15,
    color: "#161F3D"
  },
  button: {
    color:'#ffff',
    width: '50%',
    backgroundColor: '#d81b60',
    borderRadius: 20,
    marginHorizontal: 30,
    height: 50,
    alignSelf:'center',
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  }
});
