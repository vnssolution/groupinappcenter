import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Animated, Alert, ImageBackground, Image, TextInput, ToastAndroid, KeyboardAvoidingView ,Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CssStyles from '../../CssStyles/CssStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Input } from 'react-native-elements';
import TextStyles from '../../CssStyles/TextStyles';

export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phonenumber: '',
            email: ''
        }
    }
    renderCustomIconA = () => {
        return (
            <Image
                style={{
                    resizeMode: 'contain', width: wp('5%', 812),
                    height: hp('5%', 812),
                }}
                source={require('../../Images/mail.png')}
            />

        );
    };
    renderCustomIconB = () => {
        return (
            <View style={{ width: '100%', borderRightWidth: 1, borderRightColor: '#fff', padding: '1%' }}>
                <Text style={{ fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center' }}>+91</Text>
            </View>

        );
    };
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={{ flex:1,  width:'100%',height:'100%'}}>
            <ImageBackground style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height }}
              resizeMode='stretch'
              source={require('../../Images/bg.png')}>
        
                            <ScrollView>
                    <View style={{ flexDirection: 'row',margin:'3%',marginTop:'2%'  }}>
                        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                        <Image source={require('../../Images/backimagecircle.png')} style={{
                resizeMode: 'contain', width: wp('10%',812),
                height: hp('7%',812),
              }} />
                          
                        </TouchableOpacity>
                       
                  
                 
                     {/* <View style={styles.mainfirstview}>

<TouchableOpacity style={styles.rounrectview} onPress={() => this.props.navigation.pop()}>
<Image source={require('../../Images/backimagecircle.png')} style={{
                resizeMode: 'contain', width: wp('10%',812),
                height: hp('7%',812),
              }} />
</TouchableOpacity>
                   
                    <View style={styles.groupinview}>
                    <Text
                                    style={{ flex: 0.4, fontSize: RFValue(16, 812), color: '#fff', fontFamily: 'silka-bold-webfont', }}
                                >
                                   Create Account</Text>
                                <Text
                                   style={{ flex: 0.4, fontSize: RFValue(14, 812), color: '#fff', fontFamily: 'silka-medium-webfont', marginTop: '1%' }}
                                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                          
                        </View>
                        </View> */}
                        
                        <View style={styles.groupimageview}>
                            <Text style={TextStyles.h1whitecenterbold}>Create Account</Text>
                        </View>
                        </View>
                        <View style={{ marginLeft: '5%', marginRight: '5%',marginBottom:'5%' }}>
                            <Text style={TextStyles.ptextcenter}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </View>
                       
                        <View style={{ marginLeft: '5%', marginRight: '5%', }}>
                            <Input
                                placeholder="Phone Number"
                                leftIcon={() => this.renderCustomIconB()}
                                onChangeText={value => this.setState({ email: value })}
                                inputStyle={TextStyles.phoneinputtextstyle}
                                inputContainerStyle={{ color: '#fff', borderColor: '#808080', }}
                                placeholderTextColor="#AD7ACC"
                                containerStyle={{ height: 50, }}
                            />
                        </View>
                        <View style={{ marginLeft: '5%', marginRight: '5%',marginTop:'2%' }}>
                            <Input
                                placeholder="Email"
                                leftIcon={() => this.renderCustomIconA()}
                                onChangeText={value => this.setState({ email: value })}
                                inputStyle={TextStyles.inputtextstyle}
                                inputContainerStyle={{ color: '#fff', borderColor: '#808080', }}
                                placeholderTextColor="#AD7ACC"
                                containerStyle={{ height: 50, }}
                            />
                        </View>

                        <View style={CssStyles.arrowbuttonview}>
                            <TouchableOpacity style={CssStyles.arrowbutton} onPress={() => {
                                this.props.navigation.navigate("InputOtp", {
                                    sign: "signup"
                                });
                            }}>
                                {/* <Text style={CssStyles.submittext}>Next</Text> */}
                                <Image source={require('../../Images/rightarrow.png')} style={CssStyles.rightarrowstyle} />
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                    {/* <View style={{ marginLeft: 'auto', marginRight: '12%', marginBottom: '6%' }}>
                        <Image source={require('../../Images/logo.png')} style={{
                            resizeMode: 'contain', width: wp('11%', 812),
                            height: hp('11%', 812),
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
    backgroundImage: {
        flex: 1,
        width: '100%', height: '100%'
    },
    welcjustycenter: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
    textstylewelscrn: { fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', color: '#D9C9E4', textAlign: 'center', },
    // groupimage: { width: '100%', height: '100%', marginTop: '10%' },
    groupimageview: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', marginLeft:'10%'},
    textstyle: { fontSize: RFValue(20, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center' },
    authtextstyle: { fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', color: '#fff' },
    h1whitecenterbold:{ fontSize: RFValue(24, 812), fontFamily: 'silka-medium-webfont', color: '#fff',textAlign:'center', },
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


    //   h1whitecenterbold:{ fontSize: RFValue(30, 812), fontFamily: 'silka-medium-webfont', color: '#fff',textAlign:'center', },

})