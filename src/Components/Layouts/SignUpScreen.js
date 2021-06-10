import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Animated, Alert, ImageBackground, Image, TextInput, ToastAndroid, KeyboardAvoidingView,Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity,ScrollView } from 'react-native-gesture-handler';
import CssStyles from '../../CssStyles/CssStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Input } from 'react-native-elements';
import  { widthScale,TextStyles}  from "../../CssStyles/TextStyles";


export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmpassword: ""

    }
  }
  validatephone(username, password, confirmpassword) {
    if (username == "" || username == undefined || username == null) {
      ToastAndroid.show("please enter username", ToastAndroid.LONG)
    }
    else if (password == "" || password == undefined || password == null) {
      ToastAndroid.show("please enter password", ToastAndroid.LONG)
    } else if (confirmpassword == "" || confirmpassword == undefined || confirmpassword == null) {
      ToastAndroid.show("please enter confirmpassword matches with password ", ToastAndroid.LONG)
    }

    else {

      this.props.navigation.navigate("DetailsScreen",)
    }
  }
  renderCustomIconA = () => {
    return (

      <Image
        style={{
          resizeMode: 'contain', width: wp('5%',812),
          height: hp('5%',812),
        }}
        source={require('../../Images/username.png')}
      />

    );
  };
  renderCustomIconB = () => {
    return (

      <Image
        style={{
          resizeMode: 'contain', width: wp('5%',812),
          height: hp('5%',812),
        }}
        source={require('../../Images/lock.png')}
      />

    );
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={{ flex:1,  width:'100%',height:'100%'}}>
            <ImageBackground style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height }}
              resizeMode='stretch'
              source={require('../../Images/bg.png')}>

                    <View style={{ flexDirection: 'row',margin:'3%',marginTop:'3%'  }}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Image source={require('../../Images/backimagecircle.png')} style={{
                resizeMode: 'contain', width: wp('10%',812),
                height: hp('7%',812),
              }} />
                {/* <ImageBackground source={require('../../Images/Ellipse14.png')} style={styles.badgeicon}>
                    <Image source={require('../../Images/backarrow.png')} style={styles.badgeimageicon} />
                  </ImageBackground> */}
            </TouchableOpacity>
            {/* <View style={{ marginTop: '3%', marginLeft: 'auto', marginRight: '5%' }} onPress={() => this.props.navigation.pop()}>
              <Image source={require('../../Images/logo.png')} style={{
                resizeMode: 'contain', width: wp('8%'),
                height: hp('6%'),
              }} />
            </View> */}
         
            {/* <View style={CssStyles.groupimageview}>
              <Image source={require('../../Images/logo.png')} style={{
                resizeMode: 'contain', width: wp('30%'),
                height: hp('20%'),
              }} />
            </View> */}
             <View style={styles.groupimageview}>
              <Text style={TextStyles.h3whitecenter}>Set Your Username and Password</Text>
              </View>
              </View>
              <View style={styles.groupinimage}>
                <ImageBackground source={require('../../Images/signuplogo.png')} style={{
                  resizeMode: 'contain', alignItems: 'center', justifyContent: 'center',  width: wp("28%"),
                  height: hp("15%"),
                }}>
                  <ImageBackground source={require('../../Images/Ellipseblue.png')} style={styles.badge}>
                    <Image source={require('../../Images/cameraicon.png')} style={styles.badgeimage} />
                  </ImageBackground>
                </ImageBackground>
              </View>
           
            <View style={{  marginLeft: '5%', marginRight:'5%'}}>
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
            <View style={{  marginLeft: '5%', marginRight:'5%',marginTop:'2%'}}>
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
            <View style={{  marginLeft: '5%', marginRight:'5%',marginTop:'2%'}}>
              <Input
                placeholder="Confirm Password"
                leftIcon={() => this.renderCustomIconB()}
                onChangeText={value => this.setState({ confirmpassword: value })}
                inputStyle={TextStyles.inputtextstyle}
                inputContainerStyle={{ color: '#fff', borderColor: '#808080', }}
                placeholderTextColor="#AD7ACC"
                containerStyle={{ height: 50, }}
              />
            </View>


            <View style={CssStyles.arrowbuttonview}>
              <TouchableOpacity style={CssStyles.arrowbutton} onPress={() => this.validatephone(this.state.username, this.state.password, this.state.confirmpassword)}>
                {/* <Text style={CssStyles.submittext}>Next</Text> */}
                <Image source={require('../../Images/rightarrow.png')} style={CssStyles.rightarrowstyle}  />
              </TouchableOpacity>

            </View>
          
          {/* <View style={{  marginLeft: 'auto', marginRight: '12%',marginBottom:'3%' }}>
              <Image source={require('../../Images/logo.png')} style={{
                resizeMode: 'contain', width: wp('11%',812),
                height: hp('11%',812),
              }} />
            </View> */}
         </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

};
const styles = StyleSheet.create({
  container: { flex: 1, width: '100%', height: '100%', alignItems: 'center', },
  root: { padding: 20, minHeight: 300 },
  title: { textAlign: 'center', fontSize: 30, color: 'green' },
  bottomText: {
    fontSize: 14,
    margin: 10,
    textAlign: 'center'
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 60,
    height: 60,
    backgroundColor: '#25D366',
    justifyContent: 'center',
    minWidth: 300,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  backgroundImage: {
    flex: 1,
    width: '100%', height: '100%'
  },
  resendtext: {
    textDecorationLine: 'underline',
    textDecorationColor: '#fff',
    color: '#fff',
    fontWeight: 'bold',
    textDecorationStyle: 'dashed',
    fontSize: 20,
    textAlign: 'center'
  },
  arrowtext: {
    textAlign: 'center',
    textDecorationStyle: 'solid',
    textShadowRadius: 20,
    textDecorationColor: '#fff',
    fontSize: RFValue(24, 812),
    color: '#7826ac',
    fontFamily: 'silka-medium-webfont'
  },
  phnStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 30,
    flexDirection: 'row',
    color: 'white'
  },
  lastborder: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  badge: {
    //  backgroundColor: 'red',                                                                                                                                                                                      
    width: 40,
    height: 40,
    left: 40,
    top: 25,
  },
  badgeimage: {
    width: 15,
    height: 15,
    left: 14,
    top: 8,
  },
  groupimageview: { alignContent: 'center', alignItems: 'center', justifyContent: 'center',marginLeft:widthScale(15),marginBottom:'3%'  },
  groupinimage:{ alignContent: 'center', alignItems: 'center', justifyContent: 'center',marginTop:'1%', },
  badgeicon: {
    //  backgroundColor: 'red',                                                                                                                                                                                      
    width: 50,
    height: 50,
    // left: 40,
    top: 10,
    right:5
  },
  badgeimageicon: {
    width: 20,
    height: 20,
    left: 14,
    top: 13,
  },
  h1whitecenterbold:{ fontSize: RFValue(25, 812), fontFamily: 'silka-medium-webfont', color: '#fff',textAlign:'center', },

})