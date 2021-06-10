import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import CssStyles from '../../CssStyles/CssStyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from 'react-native-gesture-handler';
import  TextStyles from '../../CssStyles/TextStyles'

class WelcomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.welcomebackimgview}
                    resizeMode='stretch'
                    source={require('../../Images/bg.png')}>
                    <View style={styles.groupimage}>

                        <View style={styles.welcjustycenter}>
                            <Image source={require('../../Images/logo.png')} style={CssStyles.loginlogostyle} />
                        </View>
                        <View style={styles.welcjustycenter}>
                            <Text style={TextStyles.h1whitecenterbold}>Welcome!!</Text>

                        </View>
                        <View style={styles.welcjustycenter,{ marginBottom: '3%', marginTop: '3%', }}>
                            <Text style={TextStyles.h3whitecenter}>You like to proceed as a admin or user</Text>
                        </View>
                        <View style={styles.useradminview}>
                            <TouchableOpacity style={styles.welcjustycenter} onPress={() => this.props.navigation.navigate("Authentication")}>
                                <Image source={require('../../Images/Group29.png')} style={{
                                    resizeMode: 'contain', width: wp('30%',812),
                                    height: hp('15%',812),
                                }} />
                                <Text style={TextStyles.h3whitecenter}>Admin</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.welcjustycenter} onPress={() => this.props.navigation.navigate("DetailsScreen")}>
                                <Image source={require('../../Images/Group30.png')} style={{
                                    resizeMode: 'contain', width: wp('30%',812),
                                    height: hp('15%',812),
                                }} />
                                <Text style={TextStyles.h3whitecenter}>User</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.welcjustycenter, { marginTop: '3%', marginLeft: '5%', marginRight: '5%', marginBottom: '3%', }}>
                            <Text style={TextStyles.ptextcenter}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </View>
                        {/* <View style={CssStyles.splashvnsview}>
                            <Text style={CssStyles.poweredbytext}>Powered By</Text>
                            <Image source={require('../../Images/vnslogo.png')} style={CssStyles.vnsimagestyles} resizeMode="contain" />
                        </View> */}
                    </View>
                </ImageBackground>
            </View>

        );
    }
}

export default WelcomeScreen;
const styles = StyleSheet.create({
    container: { width: '100%', height: '100%', flex: 1, },
    welcomebackimgview: { width: '100%', height: '100%', flex: 1, },
    backimgview: { width: '100%', height: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
    welcometextstyle: { fontSize: RFValue(24, 812), fontFamily: 'silka-bold-webfont', color: '#fff', textAlign: 'center', },
    textstylewelscrn: { fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', color: '#D9C9E4', textAlign: 'center', },
    textwelscrn: { fontSize: RFValue(20, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center', },
    welcjustycenter: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
    groupimage: { width: '100%', height: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
    useradminview: { flexDirection: 'row', alignContent: 'space-between', justifyContent: 'center', width: '100%' },
    useradmintext: { fontSize: RFValue(20, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center' },
    h3whitecenter:{fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center',},

})