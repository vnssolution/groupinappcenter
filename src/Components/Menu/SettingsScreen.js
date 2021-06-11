

import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CssStyles from '../../CssStyles/CssStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import TextStyles from '../../CssStyles/TextStyles';


class SettingsScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ width: '100%', height: '100%',backgroundColor:'#fff' }}>
        <View style={{ width: '100%', height: '100%' }}>

          <View style={{
            height: '45%', flex: 1, width: '100%'
          }}>
            <ImageBackground style={styles.backgroundImage}
              // resizeMode='stretch'
              resizeMode='cover'
              source={require('../../Images/bg.png')}>
                
              <View style={{ flex: 1, flexDirection: 'row', margin: '2%' }}>
                <TouchableOpacity style={styles.touchiconviewstyle} onPress={() => this.props.navigation.pop()}>
                  <Image style={styles.imageiconStyle} source={require('../../Images/back.png')} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.headerText}>Settings</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', width: '95%', }}>
                <View style={{ alignContent: 'center', justifyContent: 'center',  }}>
                  <Image style={{
                    resizeMode: 'contain', width: wp('25%',812),
                    height: hp('15%',812),
                  }} source={require('../../Images/users/user.png')} />
                </View>
                <View style={{ flexDirection: 'column', padding: '3%', width: '100%',marginRight:'2%' ,  }}>
                  <View style={{  padding: '1%', flex: 1, }}>
                    <Text style={styles.h5whitebold}>Lucky Reddy</Text>
                  </View>
                  <View style={{ padding: '1%', flex: 1,width:'90%',marginRight:'2%' ,}}>
                    <Text numberOfLines={2} style={styles.h5white}>Lorem Ipsum is simply dummy text of the printing and type setting industry. </Text>
                  </View>
                  <View style={{ padding: '1%', flex: 1, }}>
                    <Text style={TextStyles.h5white}>35 Contacts</Text>
                  </View>
                  <View style={{ flexDirection: 'row', paddingTop: '2%', paddingBottom: '1%' }}>
                    <Image style={{
                      resizeMode: 'contain', width: wp('6%',812),
                      height: hp('5%',812),margin:'1%'
                    }} source={require('../../Images/f.png')} />
                    <Image style={{
                      resizeMode: 'contain', width: wp('6%',812),
                      height: hp('5%',812),margin:'1%'
                    }} source={require('../../Images/t.png')} />
                    <Image style={{
                      resizeMode: 'contain', width: wp('6%',812),
                      height: hp('5%',812),margin:'1%'
                    }} source={require('../../Images/i.png')}  />
                  </View>

                </View>
              </View>
              {/* <View style={{flexDirection: 'row',}}> */}
              {/* <View style={{ }}></View> */}

              {/* </View> */}
              <View style={{width:'100%'}}>
              <Image resizeMode='stretch' style={{width:'100%'}} source={require('../../Images/curve1x.png')} />
              </View>
            </ImageBackground>

          </View>
          <View style={{ flex: 1, marginTop: '2%', }}>
            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: '5%', marginRight: '5%', }}>
              <Image source={require('../../Images/account.png')} style={{
                resizeMode: 'contain', width: wp('10%',812),
                height: hp('10%',812), margin: '1%'
              }} />
              <View style={{ justifyContent: 'center', alignItems: 'flex-start', alignContent: 'center', marginLeft: '2%' }}>
                <Text numberOfLines={1} style={TextStyles.h5purplebold}>Account Privacy</Text>
                <Text  numberOfLines={1} style={[TextStyles.h5black,{paddingTop:'1%'}]}>Lorem Ipsum is simply dummy text</Text>
              </View>
            </TouchableOpacity>
            <View style={CssStyles.LineStyle} />
            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: '5%', marginRight: '5%' }}>
              <Image style={{
                resizeMode: 'contain', width: wp('10%',812),
                 height: hp('10%',812), margin: '1%'
              }} source={require('../../Images/chat.png')} />
              <View style={{ justifyContent: 'center', alignItems: 'flex-start', alignContent: 'center', marginLeft: '2%' }}>
                <Text  numberOfLines={1} style={TextStyles.h5purplebold}>Chats</Text>
                <Text  numberOfLines={1} style={[TextStyles.h5black,{paddingTop:'1%'}]}>Lorem Ipsum is simply dummy text</Text>
              </View>
            </TouchableOpacity>
            <View style={CssStyles.LineStyle} />
            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: '5%', marginRight: '5%' }}>
              <Image style={{
                resizeMode: 'contain', width: wp('10%',812),
                 height: hp('10%',812), margin: '1%'
              }} source={require('../../Images/noti.png')} />
              <View style={{ justifyContent: 'center', alignItems: 'flex-start', alignContent: 'center', marginLeft: '2%' }}>
                <Text  numberOfLines={1}  style={TextStyles.h5purplebold}>Invite a Friend</Text>
                <Text  numberOfLines={1}  style={[TextStyles.h5black,{paddingTop:'1%'}]}>Lorem Ipsum is simply dummy text</Text>
              </View>
            </TouchableOpacity>
            <View style={CssStyles.LineStyle} />
            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: '5%', marginRight: '5%' }} onPress={() => this.props.navigation.navigate("NotificationScreen")}>
              <Image style={{
                resizeMode: 'contain', width: wp('10%',812),
                 height: hp('10%',812), margin: '1%'
              }} source={require('../../Images/notification.png')} />
              <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginLeft: '2%', flex: 1, }}>
                <Text  numberOfLines={1} style={TextStyles.h5purplebold}>Notifications</Text>
                <Text numberOfLines={1}  style={[TextStyles.h5black,{paddingTop:'1%'}]}>Lorem Ipsum is simply dummy text of the printing.</Text>
              </View>
            </TouchableOpacity>
            <View style={CssStyles.LineStyle} />
            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: '5%', marginRight: '5%' }}>
              <Image style={{
                resizeMode: 'contain', width: wp('10%',812),
                 height: hp('10%',812), margin: '1%'
              }} source={require('../../Images/help.png')} />
              <View style={{ justifyContent: 'center', alignItems: 'flex-start', alignContent: 'center', marginLeft: '2%' }}>
                <Text  numberOfLines={1} style={TextStyles.h5purplebold}>Help {"&"} Support</Text>
                <Text  numberOfLines={1}  style={[TextStyles.h5black,{paddingTop:'1%'}]}>Lorem Ipsum is simply dummy text</Text>
              </View>
            </TouchableOpacity>
            <View style={CssStyles.LineStyle} />

          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    // resizeMode: 'cover',
    height: '100%',
    width: '100%'

  },

  headerText: {
    color: '#fff',
    fontSize: RFValue(20, 812),
    fontFamily: 'silka-bold-webfont',


  },
  touchiconviewstyle: {
    flex: 1,
    marginLeft: '2%',
    alignContent: 'center',
  },
  imageiconStyle: {
    resizeMode: 'contain', width: wp('3%',812),
    height: hp('3%',812),

  },
  LineStyle: {
    borderWidth: 0.2,
    borderColor: '#8c8c8c',
    width: '95%',
    alignSelf: 'center'
  },
  h5whitebold:{ flex: 1, fontSize: RFValue(15, 812), color: '#fff', fontFamily: 'silka-bold-webfont', },
  h5white:{ flex: 1, fontSize: RFValue(15, 812), color: '#fff', fontFamily: 'silka-medium-webfont', },


})

export default SettingsScreen;