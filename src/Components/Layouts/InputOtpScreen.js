import React, { useState, useEffect, useRef, Component } from 'react'
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, SafeAreaView, Alert, ImageBackground, Image, ToastAndroid, Keyboard, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CssStyles from '../../CssStyles/CssStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import OTPVerification from '../UI/OTPVerification';
import TextStyles from '../../CssStyles/TextStyles';
import Loader from '../UI/Loader';
import { MOBVALDIATE } from '../../ApiManager/ApiFetch';
import AsyncStorageContants from '../../ApiManager/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const CELL_COUNT = 5;
export default class InputOtpScreen extends Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.state = {
      navigation: this.props.route.params,
      otpvalue: "",
      isLoading: false,
      phonenumber: "",
      email: "",

    }
  }
  componentDidMount() {
    console.log(this.state.navigation)
    this.setState({ otpvalue: this.state.navigation.otpvalue, })


  }

  // Dialog box code starts
  _onvalidatecode(isvalid) {
    this.setState({ otpvalue: isvalid })
  }

  setlogindetails = async (token,phonenum,useridnum) => {
    try {
      console.log(useridnum+"=="+phonenum+"======"+token)
      await AsyncStorage.setItem("token", token)
      await AsyncStorage.setItem("phone", phonenum)
      await AsyncStorage.setItem("useridval",useridnum)
    } catch (e) {
      // save error
      console.log(e)
    }

    console.log('Done.')
  }
  async validinput(otpval,) {
    this.setState({ isLoading: true })

    let valreq = {
      mobileNumber:  this.state.navigation.phonenumber,
      mblNumOtp: otpval
    }
    let valres = await MOBVALDIATE(valreq)
    // console.log("validation req =="+JSON.stringify(valreq))
    if (((valres || {}).data || {}) !== undefined) {
      // console.log("validation res =="+JSON.stringify(valres.data))
      if (valres.data.status === false) {
        this.setState({
          isLoading: false, otpval: ""
        })
        ToastAndroid.show(valres.data.message, ToastAndroid.LONG)
      }
      if (valres.data.status === true) {
        ToastAndroid.show(valres.data.message, ToastAndroid.LONG)
        console.log("validation req =="+JSON.stringify( valres.data.token))
        this.setlogindetails(
          valres.data.token,
          this.state.navigation.phonenumber,
          this.state.navigation.userid
        )
        Keyboard.dismiss()
        {
          this.state.navigation.sign ?

            this.props.navigation.navigate("SignUpScreen", {
              token: valres.data.token,
            })
            :
            this.props.navigation.navigate("GroupInHome", {
              token: valres.data.token,
            })
        }
        this.setState({
          isLoading: false
        })

      }
    }

    // if (otpval == "1234" || otpval == 1234) {
    //   Keyboard.dismiss()
    //   {
    //     this.state.navigation.sign ?

    //       this.props.navigation.navigate("SignUpScreen")
    //       :
    //       this.props.navigation.navigate("GroupInHome")
    //   }
    //   this.setState({
    //     isLoading: false
    // })
    // }
    // else {
    //   this.setState({
    //     isLoading: false
    // })
    //   ToastAndroid.show("Enter valid otp", ToastAndroid.SHORT)
    //   this.setState({ otpval: "" })


    // }
  }
  renderLoader = () => {
    return (
      <Loader
        loading={this.state.isLoading} />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.welcomebackimgview}
          resizeMode='stretch'
          source={require('../../Images/bg.png')}>

          <View style={{ flexDirection: 'row', margin: '3%', marginTop: '5%' }}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Image source={require('../../Images/backimagecircle.png')} style={{
                resizeMode: 'contain', width: wp('10%', 812),
                height: hp('7%', 812),
              }} />
              {/* <ImageBackground source={require('../../Images/Ellipse14.png')} style={styles.badgeicon}>
                    <Image source={require('../../Images/backarrow.png')} style={styles.badgeimageicon} />
                  </ImageBackground> */}
            </TouchableOpacity>
            {/* <View  style={{marginTop:'3%',marginLeft:'auto',marginRight:'5%'}} onPress={() => this.props.navigation.pop()}>
            <Image source={require('../../Images/logo.png')} style={{
                resizeMode: 'contain', width: wp('8%',812),
                height: hp('6%',812),
              }} />
              </View> */}


            {/* <View style={CssStyles.groupimageview}>
              <Image source={require('../../Images/logo.png')} style={CssStyles.loginlogostyle} />
            </View> */}
            <View style={styles.groupimageview}>
              <Text style={TextStyles.h3whitecenter}>Enter the OTP sent to </Text>
              <Text style={TextStyles.h3whitecenter}>your mobile number</Text>

            </View>
          </View>

          <OTPVerification
            cellCount={4}
            value={this.state.otpvalue}
            onChangeText={(text) => this.setState({ otpvalue: text })}
          />


          <View style={styles.subcontainerviewofview1}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Enter 1234")
              }}
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >

              <Text style={TextStyles.h4whitecenter}>RESEND OTP</Text>
            </TouchableOpacity>
          </View>
          <View style={CssStyles.arrowbuttonview}>
            <TouchableOpacity style={CssStyles.arrowbutton} onPress={() => { this.validinput(this.state.otpvalue) }}>
              {/* <Text style={CssStyles.submittext}>Next</Text> */}
              <Image source={require('../../Images/rightarrow.png')} style={CssStyles.rightarrowstyle} />
            </TouchableOpacity>
          </View>




          {/* <View style={{ marginLeft: 'auto', marginRight: '12%', marginBottom: '6%' }}>
            <Image source={require('../../Images/logo.png')} style={{
              resizeMode: 'contain', width: wp('11%', 812),
              height: hp('11%', 812),
            }} />
          </View> */}
        </ImageBackground>
        {/* {this.state.isLoading && this.renderLoader()} */}
      </View>






    )
  }

};
const styles = StyleSheet.create({
  container: { width: '100%', height: '100%', flex: 1, },
  root: { padding: 20, minHeight: 300 },
  resendtext: { color: '#fff', fontSize: RFValue(20, 812), textAlign: 'center', fontFamily: 'silka-medium-webfont', },
  groupimageview: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: '15%' },
  otptext: { fontSize: RFValue(20, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center' },
  subcontainerviewofview1: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5%', },
  badgeicon: {
    //  backgroundColor: 'red',                                                                                                                                                                                      
    width: 50,
    height: 50,
    // left: 40,
    top: 10,
    right: 5
  },
  badgeimageicon: {
    width: 20,
    height: 20,
    left: 14,
    top: 13,
  },
  h1whitecenterbold: { fontSize: RFValue(24, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center', },
  welcomebackimgview: { width: '100%', height: '100%', flex: 1, },

})