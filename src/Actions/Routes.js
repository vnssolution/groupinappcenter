import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationScreen from '../Components/Layouts/AuthenticationScreen'
import InputOtpScreen from '../Components/Layouts/InputOtpScreen'
import ChatScreen from '../Components/Layouts/ChatScreen';
import SettingsScreen from '../Components/Menu/SettingsScreen';
import GroupInHome from '../Components/Layouts/GroupInHome';
import CreateGroup from '../Components/FabGroup/CreateGroup';
import SearchScreen from '../Components/Layouts/SearchScreen';
import GeneralChatScreen from '../Components/Layouts/GeneralChatScreen';
import CreateGroupScreen from '../Components/FabGroup/createGroupScreen';
import SignUpScreen from '../Components/Layouts/SignUpScreen';
import WelcomeScreen from '../Components/Layouts/WelcomeScreen';
import SignInScreen from '../Components/Layouts/SignInScreen';
import GroupInfoScreen from '../Components/Layouts/GroupInfoScreen';
import DetailsScreen from '../Components/Layouts/DetailsScreen'
import Switchtoggle from '../Components/UI/Switchtoggle'
import OTPVerification from '../Components/UI/OTPVerification'
import BroadcastGroupinfoScreen from '../Components/Layouts/BroadcastGroupinfoScreen'
import DocumentScreen from '../Components/Layouts/DocumentScreen'
import NotificationScreen from '../Components/Menu/NotificationScreen';
import Contactlist from '../Components/UI/Contactlist';
import Loader from '../Components/UI/Loader';
import Modal from '../Components/UI/Modal';
import chatscreen from '../Components/UI/chatscreen';
import DropdownScreen from '../Components/UI/DropdownScreen';



const Stack = createStackNavigator();

class Routes extends React.Component {
  // constructor(props){
  //     super(props);
  //       this.state={
  //     };
  //   }
  // componentDidMount() {
  //   // do stuff while splash screen is shown
  //     // After having done stuff (such as async tasks) hide the splash screen
  //     SplashScreen.hide();
  // }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
          <Stack.Screen name="Authentication" component={AuthenticationScreen} />
          <Stack.Screen name="InputOtp" component={InputOtpScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name ="GroupInHome" component={GroupInHome}/>
          <Stack.Screen name="CreateGroup" component={CreateGroup}/>
          <Stack.Screen name="Search" component={SearchScreen}/>
          <Stack.Screen name="GeneralChatScreen" component ={GeneralChatScreen}/>
          <Stack.Screen name="CreateGroupScreen" component ={CreateGroupScreen}/>
          <Stack.Screen name="SignUpScreen" component ={SignUpScreen}/>
          <Stack.Screen name="SignInScreen" component ={SignInScreen}/>
          <Stack.Screen name="GroupInfoScreen" component ={GroupInfoScreen}/>
          <Stack.Screen name="DetailsScreen" component ={DetailsScreen}/>
          <Stack.Screen name="Switchtoggle" component ={Switchtoggle}/>
          <Stack.Screen name="OTPVerification" component ={OTPVerification}/>
          <Stack.Screen name="BroadcastGroupinfo" component ={BroadcastGroupinfoScreen}/>
          <Stack.Screen name="DocumentScreen" component ={DocumentScreen}/>
          <Stack.Screen name="NotificationScreen" component ={NotificationScreen}/>
          <Stack.Screen name="Contacts" component ={Contactlist}/>
          <Stack.Screen name="Loader" component ={Loader}/>
          <Stack.Screen name="Modal" component ={Modal}/>
          <Stack.Screen name="chatscreen" component ={chatscreen}/>
          <Stack.Screen name="Dropdown" component ={DropdownScreen}/>

         </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Routes;