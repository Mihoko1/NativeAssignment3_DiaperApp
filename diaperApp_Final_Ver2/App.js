import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import {createSwitchNavigator,createAppContainer,SafeAreaView
} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import AppIntroSlider from 'react-native-app-intro-slider';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Timeline from './screens/Timeline';
import Analysis from './screens/Analysis';
import Profile from './screens/Profile';
import Loading from './screens/Loading';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Timer from './screens/Timer';
import Bottle from './screens/Bottle';
import Solid from './screens/Solid';


console.disableYellowBox = true;
const TimerStack = createMaterialTopTabNavigator(
  {
    Timer: {
      screen: Timer,
    },
    Bottle: {
      screen: Bottle,
    },
    Solid: {
      screen: Solid
    }
  },
  {
    initialRouteName: 'Timer',
  }
);

const TimelineTab = createStackNavigator({
  Timeline: {
    screen: Timeline,
    navigationOptions: {
      headerBackTitle: 'Back',    // Title back button Back when we navigate to Profile from Settings
    },
  },
  Timer: {
    screen: TimerStack,
    navigationOptions: ({ navigation }) => ({         
      title: 'Menu',
    }),
  },
}, {
  headerMode: 'screen',
});


const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerBackTitle: 'Back',    
    },
  },
  
}, {
  headerMode: 'screen',
});


const AnalysisStack = createStackNavigator({
  Analysis: {
    screen: Analysis,
    navigationOptions: {
      headerBackTitle: 'Back',    
    },
  },
  
}, {
  headerMode: 'screen',
});

const HomeTab = createBottomTabNavigator(
  {
      Timeline: { screen: TimelineTab},
      Analysis: { screen: AnalysisStack},
      Profile: { screen: ProfileStack},
      
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Timeline') {
          iconName = `ios-home`;
          
        } else if (routeName === 'Profile') {
          iconName = `md-happy`;

        } else if (routeName === 'Analysis') {
          iconName = `ios-paper`;
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#d81b60',
      inactiveTintColor: 'gray',
    },
  }
);

const AuthStack = createStackNavigator({
  Login: Login,
  SignUp: SignUp
});


const createRootNavigator = () => {
  return createSwitchNavigator(
      {
        Loading: Loading,
        Auth: AuthStack,
        Timeline: HomeTab,
      },
      {
        initialRouteName: "Loading"
      }
  );
}


const Layout = createAppContainer(createRootNavigator(true));


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  static navigationOptions = ()=>({
    title: 'Hi Arthur',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#e8c121',
      //Sets Header color
    },
    headerTintColor: '#e8c121',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  });


  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        

        <Layout />
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
  },
});
 
const slides = [
  {
    key: 's1',
    text: 'Dont be like this guy, raising a child is important, dont skip any steps.',
    image: {
      uri:
        'https://media0.giphy.com/media/5tY92v6PLyLrW/giphy.webp?cid=790b76116ee69951a40af1c066ac009e6705975bbad3f1e9&rid=giphy.webp',
    },
    backgroundColor: '#CAC0B4',
  },
  {
    key: 's2',
    title: 'Welcome to Dipaer',
    text: 'Lets help your baby grow',
    image: {
      uri:
        'https://media.giphy.com/media/Pnh4QttQBaqDyk6m9d/giphy.gif',
    },
    backgroundColor: '#fffeff',
  },
  {
    key: 's3',
    title: 'Nap Time',
    text: 'Dreams are important.Diaper helps you check and record your babys naptime',
    image: {
      uri: 'https://media.giphy.com/media/lOxDjWf6CKJgXvUBwc/giphy.gif',
    },
    backgroundColor: '#fffeff',
  },
  {
    key: 's4',
    title: 'Oo Oh!',
    text: 'Something is not right, Dont worry diaper informs you if your baby has made a mess and need a change',
    image: {
      uri: 'https://media.giphy.com/media/huxnCQh7108ZBiH4IX/giphy.gif',
    },
    backgroundColor: '#fffeff',
  },

];