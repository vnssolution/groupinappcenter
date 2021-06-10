import React from 'react';
import { StyleSheet, PixelRatio, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const CssStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        backgroundColor: '#F7F7F7',

    },
    row: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 0,
        borderWidth: 0,
        borderTopWidth: 1 / PixelRatio.get(),
        borderColor: '#d6d7da',
        padding: 10,
        alignItems: 'center'
    },
    categoryLabel: {
        fontSize: 15,
        textAlign: 'left',
        left: 10,
        padding: 10,
        fontWeight: 'bold',
    },
    lastRow: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 0,
        borderWidth: 0,
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#d6d7da',
        padding: 10,
        alignItems: 'center'
    },
    rowLabel: {
        left: 10,
        flex: 1,
        fontSize: 15,
    },
    rowInput: {
        fontSize: 15,
        flex: 1,
        height: (Platform.OS == 'ios') ? 30 : 50
    },
    messageItem: {
        padding: 10,
        paddingRight: 20,
        fontSize: 15
    },
    messageBar: {
        backgroundColor: 'white',
        flexDirection: 'row',
        left: 0,
        right: 0,
        height: 55
    },
    message: {
        left: 10,
        right: 10,
        fontSize: 15,
        flex: 1,
        height: 30
    },
    submitbutton: { borderRadius: hp('1%',812), backgroundColor: "#fff", height: hp('5%',812), width: wp('20%',812), justifyContent: 'center', alignContent: 'center', alignItems: 'center' },
    submitbuttonview: { marginBottom: '5%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '5%', position: 'absolute', left: 0, right: 0, bottom: hp('5%',812), alignContent: 'center',},
    submittext: {
        textAlign: 'center',
        textDecorationStyle: 'solid',
        textShadowRadius: 20,
        textDecorationColor: '#fff',
        fontSize: RFValue(20, 812),
        color: '#7826ac',
        fontFamily: 'silka-medium-webfont'
    },
    arrowbutton: { borderRadius: hp('10%',812), backgroundColor: "#fff", height: hp('5%',812), width: wp('15%',812), justifyContent: 'center', alignContent: 'center', alignItems: 'center', elevation: 20, },
    arrowbuttonview: { marginTop: '5%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '10%', },
    arrowtext: {
        textAlign: 'center',
        textDecorationStyle: 'solid',
        textShadowRadius: 20,
        textDecorationColor: '#fff',
        fontSize: RFValue(20, 812),
        color: '#7826ac',
        fontFamily: 'silka-medium-webfont'
    },
    sendButton: {
        justifyContent: 'center',
        width: 80
    },
    navBar: {
        backgroundColor: '#0db0d9'
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        width: 70,
        borderRadius: 6,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    groupimage: { width: '100%', height: '100%',marginTop:'10%'  },
    groupimageview: { alignContent: 'center', alignItems: 'center', justifyContent: 'center',marginTop:'2%' },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    LineStyle: {
        borderWidth: 0.5,
        borderColor: '#8c8c8c',
        width: '95%',
        alignSelf: 'center'
    },
    rightarrowstyle: {
        resizeMode: 'contain', width: wp('5%',812),
        height: hp('5%',812),
    },
    button: {
        borderRadius: hp('5%',812), backgroundColor: "#65248E", height: hp('5%',812), width: 'auto', justifyContent: 'center', alignContent: 'center', alignItems: 'center', elevation: 10, padding: '3%',
    },
    buttonview: { justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '5%', padding: '3%' },
    buttontext: {
        textAlign: 'center',
        fontSize: RFValue(18, 812),
        color: '#fff',
        fontFamily: 'silka-medium-webfont',
        padding:'3%'
    },
    whitebutton: {
        borderRadius: hp('5%',812), backgroundColor: "#f2f2f2", 
        height: hp('5%',812), width: 'auto', justifyContent: 'center', alignContent: 'center',
         alignItems: 'center', elevation: 10, padding: '3%',
         
    },
    whitebuttonview: {  width: wp('80%',812),justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '1%', padding: '2%',marginBottom:'1%' },
    whitebuttontext: {
        textAlign: 'center',
        fontSize: RFValue(18, 812),
        color: '#792BA9',
        fontFamily: 'silka-medium-webfont',
        padding:'3%'
    },
    darkpurplebutton: {
        borderRadius: hp('5%',812), backgroundColor: "#4E1373", height: hp('5%',812), width: wp('70%',812), justifyContent: 'center', alignContent: 'center', alignItems: 'center', 
    },
    darkpurplebuttonview: { justifyContent: 'center', alignContent: 'center', alignItems: 'center',
    padding: '2%', width: wp('70%',812), marginTop: '2%',marginBottom:'2%',marginLeft:'5%',marginRight:'5%' },
    darkpurplebuttontext: {
        textAlign: 'center',
        fontSize: RFValue(14, 812),
        color: '#fff',
        fontFamily: 'silka-medium-webfont',
        padding:'3%'
    },
    adminbutton: {
        borderRadius: hp('5%',812), backgroundColor: "#fff", height: hp('5%',812), width: 'auto', justifyContent: 'center', alignContent: 'center', alignItems: 'center', elevation: 10, padding: '3%',
    },
    cardbuttonview: {
        elevation: 10, height: hp('6%', 812),
        backgroundColor: '#fff', borderRadius: 10,
        width: wp('40%', 812), flexDirection: 'row',
        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
    },
    cardbuttontext: {
        textAlign: 'center',
        fontSize: RFValue(16, 812),
        color: '#E00000',
        fontFamily: 'silka-medium-webfont'
    },
    splashvnsview: {
        position: 'absolute', left: 0, right: 0, bottom: hp('1%',812), alignContent: 'center',flexDirection:'row',justifyContent:'center',alignItems:'center'
       
    },
    poweredbytext: { fontSize: RFValue(10, 812), fontFamily: 'silka-medium-webfont', color: '#D9C9E4',textAlign:'center',paddingRight:'1%' },
    vnsimagestyles: {
        alignSelf: 'center',
        width: wp('15%',812),
        height: hp('3%',812),
    },
    logostyle: {
        resizeMode: 'contain', width: wp('30%',812),
        height: hp('20%',812),
    },
    logobgstyle: {
        resizeMode: 'contain', width: wp('35%',812),
        height: hp('35%',812),
    },
    loginlogostyle:{ resizeMode: 'contain',width: wp('30%',812),
    height: hp('15%',812),},
    cardviewbutton:{marginLeft:'5%',marginRight:'5%',elevation:10,marginTop:'3%',marginBottom:'3%', height: hp('6%', 812),
    backgroundColor: '#fff', borderRadius: 10,},
    fullcardbuttonview: {
        width: wp('90%', 812), flexDirection: 'row',
        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
    },
    fullcardbuttontext: {
        textAlign: 'center',
        fontSize: RFValue(16, 812),
        color: '#E00000',
        fontFamily: 'silka-medium-webfont'
    },
     
    purplebutton: {
        borderRadius: hp('5%',812),backgroundColor: "#A47CC3",height: hp('5%',812), width: 'auto', justifyContent: 'center', alignContent: 'center', alignItems: 'center', elevation: 10, padding: '3%',
    },
    purplebuttonview: {  padding: '3%' ,width:wp('43%',812),},
    purplebuttontext: {
        textAlign: 'center',
        fontSize: RFValue(16, 812),
        color: '#fff',
        fontFamily: 'silka-medium-webfont',
        padding:'3%'
    },
    redbutton: {
        borderRadius: hp('5%',812),  backgroundColor: "#E91C1C",height: hp('5%',812), width: 'auto', justifyContent: 'center', alignContent: 'center', alignItems: 'center', elevation: 10, padding: '3%',
    },
    redbuttonview: { padding: '3%' ,width:wp('43%',812),},
    redbuttontext: {
        textAlign: 'center',
        fontSize: RFValue(16, 812),
        color: '#fff',
        fontFamily: 'silka-medium-webfont',
        padding:'3%'
    },
    groupimageview: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
   

});
export default CssStyles;
