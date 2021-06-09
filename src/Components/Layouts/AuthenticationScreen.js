import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Button, Animated, Alert, ImageBackground, Image, TextInput,
  ToastAndroid, KeyboardAvoidingView, SafeAreaView, StatusBar,Dimensions
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import CssStyles from '../../CssStyles/CssStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Input } from 'react-native-elements';
import TextStyles from '../../CssStyles/TextStyles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class AuthenticationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenumber: '',
      username: "",
      password: "",
    }
  }
  validatephone(username, password) {
    if (username == "" || username == undefined || username == null) {
      ToastAndroid.show("please enter username", ToastAndroid.LONG)
    }
    else if (password == "" || password == undefined || password == null) {
      ToastAndroid.show("please enter password number", ToastAndroid.LONG)
    }

    else {
      this.props.navigation.navigate("InputOtp", {
        signin: "signin"
      });
    }
  }
  renderCustomIconA = () => {
    return (

      <Image
        style={{
          resizeMode: 'contain', width: wp('5%', 812),
          height: hp('5%', 812),
        }}
        source={require('../../Images/username.png')}
      />

    );
  };
  renderCustomIconB = () => {
    return (

      <Image
        style={{
          resizeMode: 'contain', width: wp('5%', 812),
          height: hp('5%', 812),
        }}
        source={require('../../Images/lock.png')}
      />

    );
  };
  render() {
    let data = [{
      value: 'India'
    }];
    const { phonenumber } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView style={{ flex:1,  width:'100%',height:'98%'}}>
        <ImageBackground style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height }}
          resizeMode='stretch'
          source={require('../../Images/bg.png')}>
    
            <View style={{ flexDirection: 'row', marginTop: '3%', marginLeft: '5%', }}>
              <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                <Image source={require('../../Images/backimagecircle.png')} style={{
                  resizeMode: 'contain', width: wp('10%', 812),
                  height: hp('5%', 812),
                }} />

              </TouchableOpacity>
              {/* <View style={{ marginTop: '3%', marginLeft: 'auto', marginRight: '5%' }}>
              <Image source={require('../Images/logo.png')} style={{
                resizeMode: 'contain', width: wp('8%'),
                height: hp('6%'),
              }} />
            </View> */}
              {/* <View style={{ marginTop: '10%', marginLeft: '8%',}}>
              <Image source={require('../Images/logo.png')} style={{
                resizeMode: 'contain', width: wp('8%'),
                height: hp('6%'),
              }} />
            </View> */}
            </View>


            <View style={CssStyles.groupimageview}>
              <Image source={require('../../Images/logo.png')} style={CssStyles.loginlogostyle} />
            </View>
            <View style={styles.welcometext}>
              <Text style={TextStyles.h1whitecenterbold}>Welcome!!</Text>
              <Text style={[TextStyles.h3whitecenter, { paddingTop: '1%' }]}>Sign in to your account</Text>
            </View>
            <View style={{ marginLeft: '5%', marginTop: '5%', marginRight: '5%', marginTop: '3%' }}>
              <Input
                placeholder="Username"
                leftIcon={() => this.renderCustomIconA()}
                onChangeText={value => this.setState({ username: value })}
                inputStyle={TextStyles.inputtextstyle}
                inputContainerStyle={{ color: '#fff', borderColor: '#808080', }}
                placeholderTextColor="#AD7ACC"
                containerStyle={{ height: 50, }}
              />
            </View>
            <View style={{ marginLeft: '5%', marginRight: '5%', marginTop: '2%' }}>
              <Input
                placeholder="Password"
                leftIcon={() => this.renderCustomIconB()}
                onChangeText={value => this.setState({ password: value })}
                inputStyle={TextStyles.inputtextstyle}
                inputContainerStyle={{ color: '#fff', borderColor: '#808080', }}
                placeholderTextColor="#AD7ACC"
                containerStyle={{ height: 50, }}
              />
            </View>

            <View style={styles.forgetview}>
              <TouchableOpacity style={{ marginLeft: 'auto' }}>
                <Text style={TextStyles.h4whitecenter}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={CssStyles.arrowbuttonview}>
              <TouchableOpacity style={CssStyles.arrowbutton} onPress={() => this.validatephone(this.state.username, this.state.password)}>
                {/* <Text style={CssStyles.submittext}>Next</Text> */}
                <Image source={require('../../Images/rightarrow.png')} style={CssStyles.rightarrowstyle} />
              </TouchableOpacity>
            </View>
            <View style={styles.createview}>
              <Text style={TextStyles.h4whitecenter}>Don't have an account?{'  '}</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("SignInScreen",)}>
                <Text style={TextStyles.h4whitecenter}>Create</Text>
                <View style={styles.lastborder} />
              </TouchableOpacity>
            </View>
            {/* <View style={{ marginBottom: '3%', marginLeft: '8%',}}>
              <Image source={require('../Images/logo.png')} style={{
                resizeMode: 'contain', width: wp('8%'),
                height: hp('6%'),
              }} />
            </View> */}
            {/* <View style={{ marginLeft: 'auto', marginRight: '12%', marginBottom: '6%' }}>
              <Image source={require('../Images/logo.png')} style={{
                resizeMode: 'contain', width: wp('11%', 812),
                height: hp('11%', 812),
              }} />
            </View> */}
            {/* <View style={CssStyles.splashvnsview}>
              <Text style={CssStyles.poweredbytext}>Powered By</Text>
              <Image source={require('../Images/vnslogo.png')} style={CssStyles.vnsimagestyles} resizeMode="contain" />
            </View> */}
         
        </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>

    )
  }

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:Dimensions.get('window').width,height:'98%'
  },
  backgroundImage: { flex: 1, width: '100%', height: '100%', },
  lastborder: { borderBottomWidth: 1, borderBottomColor: '#fff', },
  welcometext: { alignContent: 'center', justifyContent: 'center', alignSelf: 'center', },
  authtextstyle: { fontSize: RFValue(20, 812), fontFamily: 'silka-medium-webfont', color: '#fff', },
  authtextinputstyle: { fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', color: '#fff', },
  createview: {
    flexDirection: 'row', marginTop: '5%', alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  forgetview: { marginLeft: 'auto', marginRight: '5%', marginTop: '2%' },
  groupimage: { width: '100%', height: '100%', },
  badge: {
    //  backgroundColor: 'red',                                                                                                                                                                                      
    width: 50,
    height: 50,
    // left: 40,
    top: 10,
    right: 5
  },
  badgeimage: {
    width: 20,
    height: 20,
    left: 14,
    top: 13,
  },
})