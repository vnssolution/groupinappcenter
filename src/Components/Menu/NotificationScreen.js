import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image,KeyboardAvoidingView,ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextStyles from '../../CssStyles/TextStyles';
import Switchtoggle from '../UI/Switchtoggle'
import NotificationCard from '../UI/NotificationCard'
import CssStyles from '../../CssStyles/CssStyles'


class NotificationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switchValue: '',
        }
    }
    toggleSwitch = (value) => {
        this.setState({ switchValue: value });
        return this.state.switchValue ? null : null;
    }
    render() {
        return (
            <ScrollView style={styles.maincontainer} >
            {/* <View style={{ height: hp('9%', 812), backgroundColor: '#511D73', }}> */}
                <ImageBackground style={CssStyles.backgroundImage, {
            height: hp('9%')
        }}
            resizeMode='cover'
            source={require('../../Images/bg.png')}>
                <View style={styles.mainfirstview}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                        <Image source={require('../../Images/backvector.png')} style={{
                            resizeMode: 'contain', width: wp('3%'),
                            height: hp('3%'),
                        }} />
                    </TouchableOpacity>
                    <View style={styles.groupinviewstyle}>
                        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'flex-start', margin: '2%' }}>
                            <Text style={{ color: 'white', fontSize: RFValue(20, 812), fontFamily: 'silka-medium-webfont',marginLeft:'5%',justifyContent: 'center', alignContent: 'center', }}>Notifications</Text>
                            {/* <Text style={{ color: 'white', fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont' }}>35 contacts uploaded</Text> */}
                        </View>
                    </View>
                    {/* <Text style={{fontSize: RFValue(16, 812), fontFamily: 'silka-bold-webfont', color: '#fff', textAlign: 'center',}}>Name</Text> */}
                    <View style={styles.groupinview}>
                    </View>
                    {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}> */}


                    <TouchableOpacity style={styles.moreview}>
                        <Image style={{
                            resizeMode: 'contain', width: wp('3%', 812),
                            height: hp('3%', 812),
                        }} source={require('../../Images/more3x.png')} />
                    </TouchableOpacity>
                    {/* </View> */}

                </View>
                </ImageBackground>
            {/* </View> */}
            <View style={styles.cardview}>
                    <View style={{ flexDirection: 'row' }}>
                    {this.state.switchValue ?
                        <Text style={styles.toggletextcolor}>
                            Mute All Notifications
                        </Text>
                        :
                        <Text style={styles.toggletext}>
                            Mute All Notifications
                        </Text>
                    }
                        <View style={styles.toggleview}>
                            <Switchtoggle
                                toggleSwitch={this.toggleSwitch}
                                switchValue={this.state.switchValue}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.cardview}>
                  <Text style={styles.textcolor}>Admin</Text>
                 <NotificationCard/>
                </View>
                <View style={styles.cardview}>
                  <Text style={styles.textcolor}>General</Text>
                 <NotificationCard/>
                </View>
                <View style={styles.cardview}>
                  <Text style={styles.textcolor}>Broadcast</Text>
                 <NotificationCard/>
                </View>
                <View style={{marginTop:'3%'}}/>
            </ScrollView>

        );
    }
}

export default NotificationScreen;
const styles = StyleSheet.create({
    maincontainer: { flex: 1, backgroundColor: '#FAF4FF', },
    mainfirstview: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '3%', width: '100%',marginTop:'3%' },
    groupinviewstyle: {
        flex: 4, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center',
    },
    groupinview: { flex: 2, alignItems: 'center', alignContent: 'center', justifyContent: 'center', width: '100%', },
    moreview: { flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: '3%' },
    cardview: { elevation: 10, backgroundColor: '#fff', borderRadius: 10, marginLeft: '5%', padding: '2%', marginRight: '5%', marginTop: '2%', },
    toggleview: { marginLeft: 'auto',justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center',},
    textcolor:{color:'#792BA9',fontFamily: 'silka-bold-webfont',fontSize: RFValue(15, 812)},
    toggletext:{ fontSize: RFValue(15, 812), fontFamily: 'silka-medium-webfont', color: '#000', textAlign: 'center',marginTop:'2%' },
    toggletextcolor:{ fontSize: RFValue(15, 812), fontFamily: 'silka-medium-webfont', color: '#792BA9', textAlign: 'center',marginTop:'2%'  },


})