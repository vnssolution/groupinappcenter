import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import CssStyles from '../../CssStyles/CssStyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from 'react-native-gesture-handler';
import  TextStyles from '../../CssStyles/TextStyles'
import LinearGradient from 'react-native-linear-gradient'


class WelcomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.welcomebackimgview}
                    resizeMode='stretch'
                    source={require('../../Images/bg.png')}>
                         <View style={styles.welcjustycenter}>
                            <Text style={[TextStyles.h3whitecenter,{margin:'10%'}]}>You like to proceed as a admin or user</Text>
                        </View>
                        <View>
                        <TouchableOpacity style={styles.welcjustycenter} onPress={() => this.props.navigation.navigate("Authentication")}>
        <LinearGradient
          colors={['rgba(255, 164, 164, 1)', 'rgba(255, 169, 169, 0.73)', 'rgba(255, 180, 180, 0)' ]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}>  

<View style={styles.generalfirstcolum}>

<Image style={{
    resizeMode: 'contain', width: wp('13%', 812),
    height: hp('10%', 812),
}} source={require('../../Images/UI/Group82.png')} />

</View>
<View style={styles.generalseccolumn}>
                    <View style={{ flex: 0.4, }}></View>
                    <View style={{ flex: 0.6, justifyContent: 'center', }}>
                        <Text numberOfLines={1} style={[TextStyles.h4whitewof,{fontSize: RFValue(16),}]}>Admin</Text>
                    </View>
                   
                    <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', width: '100%', flex: 1, alignItems: 'center', }}>
                        <View style={{ flex: 1,marginBottom:'8%' }}>
                            <Text numberOfLines={3} style={[TextStyles.h4whitewof,{fontSize: RFValue(11)}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </View>

                    </View>
                </View>            
                       
        </LinearGradient>
        </TouchableOpacity>
        </View>
        <View style={styles.ContainerView}>
        <TouchableOpacity style={styles.welcjustycenter} onPress={() => this.props.navigation.navigate("GroupInHome")}>
        <LinearGradient
          colors={['rgba(151, 163, 251, 1)', 'rgba(151, 163, 251, 0.86)', 'rgba(151, 163, 251, 0)' ]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
              
              <View style={styles.generalfirstcolum}>

<Image style={{
    resizeMode: 'contain', width: wp('13%', 812),
    height: hp('10%', 812),
}} source={require('../../Images/UI/Group82.png')} />

</View>
<View style={styles.generalseccolumn}>
                    <View style={{ flex: 0.4, }}></View>
                    <View style={{ flex: 0.6, justifyContent: 'center', }}>
                        <Text numberOfLines={1} style={[TextStyles.h4whitewof,{fontSize: RFValue(16),}]}>User</Text>
                    </View>
                   
                    <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', width: '100%', flex: 1, alignItems: 'center', }}>
                        <View style={{ flex: 1,marginBottom:'8%' }}>
                            <Text numberOfLines={3} style={[TextStyles.h4whitewof,{fontSize: RFValue(11)}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </View>

                    </View>
                </View>
             
        </LinearGradient>
        </TouchableOpacity>
        </View>
        {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                        <View style={{ flexDirection: 'row', flex: 1, }}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('4%', 812), top: -9,

                            }} source={require('../../Images/Vectorgroup.png')} />
                            <Text numberOfLines={1} style={TextStyles.h7lightwhitetext}>
                                {" "}12{" "}Members
                                </Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, marginRight: '2%', justifyContent: 'space-between' }}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('3%', 812), top: -9

                            }} source={require('../../Images/star.png')} />
                            <Text numberOfLines={1} style={TextStyles.h7lightwhitetext} >
                                {" "}13{" "}Star{" "}Messaages
                              </Text>
                        </View>
                    </View> */}
                    {/* <View style={styles.groupimage}>

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
                            <TouchableOpacity style={styles.welcjustycenter} onPress={() => this.props.navigation.navigate("Authentication")}>
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
                        <View style={CssStyles.splashvnsview}>
                            <Text style={CssStyles.poweredbytext}>Powered By</Text>
                            <Image source={require('../../Images/vnslogo.png')} style={CssStyles.vnsimagestyles} resizeMode="contain" />
                        </View>
                    </View> */}
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
    Container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      ContainerView: {
     marginTop:'5%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 50,
        height: 100,
        width: 348,
        elevation:50,
        flexDirection: 'row',
        marginBottom: '1%', marginTop: '1%',
        marginLeft: '5%', marginRight: '3%',
      },
      generalfirstcolum: { flex: 1, alignItems: 'center', marginLeft: '2%', justifyContent: 'center', },
      generalseccolumn: { flex: 3, justifyContent: 'center', width: '100%', height: '100%', paddingLeft: '1%', alignContent: 'flex-end', },

})