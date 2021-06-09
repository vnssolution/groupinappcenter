import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Routes from "./src/Actions/Routes"
import SplashScreen from "./src/Components/Layouts/SplashScreen"

export default class App extends Component {  
  constructor(props){
    super(props);
      this.state={
        Splash: true,
    };
  }

  renderSplash() {
    this.setState({
      Splash: false,
    });
  }
 componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      setTimeout(() => this.renderSplash(), 1500);
  }
  render() {  

     if (this.state.Splash === true) {
       return <SplashScreen/>;
     } else {
         return <Routes/>;
       }
   }
}  

