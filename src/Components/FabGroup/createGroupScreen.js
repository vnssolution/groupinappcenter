import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, KeyboardAvoidingView, Pressable, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';
import { Input } from 'react-native-elements';
import CssStyles from '../../CssStyles/CssStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import TextStyles from '../../CssStyles/TextStyles';
import { Alert } from 'react-native';



export const data = [
  {
    value: '1',
    label: 'Tiger Nixon',
  },
  {
    value: '2',
    label: 'Garrett Winters',

  },
  {
    value: '3',
    label: 'Ashton Cox',

  },
  {
    value: '4',
    label: 'Cedric Kelly',
  },
];
class CreateGroupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
      city: null,
      cities: [],
      enterdesc: '',
      navigation: this.props.route.params,
    };
  }
  componentDidMount(){
    console.log(" create group screen emptygroup"+this.state.navigation.emptygroup)
}
  changeCity(item) {
    this.setState({
      city: item.value
    });
  }

  renderCustomIconA = () => {
    return (

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={TextStyles.h4lightwhite}>35</Text>
        {/* <Image
          style={{
            resizeMode: 'contain', width: wp('5%'),
            height: hp('5%'),
          }}
          source={require('../../Images/smile.png')}
        /> */}
      </View>


    );
  };
  renderCustomIconB = () => {
    return (

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
        <Text style={[TextStyles.h4lightwhite, { textAlign: 'center', fontSize: RFValue(16, 812), }]}>135{" "}</Text>
        <Image
          style={{
            resizeMode: 'contain', width: wp('5%', 812),
            height: hp('5%', 812),
          }}
          source={require('../../Images/smile.png')}
        />
      </View>


    );
  };
  renderCustomIconC = () => {
    return (

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Image
          style={{
            resizeMode: 'contain', width: wp('5%'),
            height: hp('5%'),
          }}
          source={require('../../Images/map-pin.png')}
        />
      </View>


    );
  };
  renderCustomIconD = () => {
    return (

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Image
          style={{
            resizeMode: 'contain', width: wp('3%'),
            height: hp('5%'),
          }}
          source={require('../../Images/Polygon3x.png')}
        />
      </View>


    );
  };


  render() {
    return (
      <ScrollView style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
        <View style={{ width: '100%', height: '100%' }}>
          {/* <View style={{ height: hp('9%'), backgroundColor: '#511D73', }}> */}
            <ImageBackground style={CssStyles.backgroundImage, { height: hp('10%') }}
            resizeMode='cover'
            source={require('../../Images/bg.png')}>
            <View style={styles.mainfirstview}>
              <TouchableOpacity style={styles.rounrectview} onPress={() => this.props.navigation.pop()}>
                <Image style={styles.roundrecimagestyles} source={require('../../Images/back.png')} />
              </TouchableOpacity>
              <View style={styles.groupinview}>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'flex-start', }}>
                  <Text style={TextStyles.h3white}>Create Group</Text>
                  <Text style={TextStyles.h4whitewof}>35 contacts uploaded</Text>
                </View>
              </View>

            </View>
            </ImageBackground>
          {/* </View> */}

          <View style={styles.mainview}>
          <Image source={require('../../Images/message.png')}/>

            <ImageBackground source={require('../../Images/ellipse8.png')} style={{
              resizeMode: 'contain', alignItems: 'center', justifyContent: 'center', width: 100,
              height: 100,
            }}>
                              <Image source={require('../../Images/personvector.png')}  style={{  top: 18,}}/>

              {/* <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont' }}>
                <Text style={{ color: 'white', fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont' }}>Add Group</Text>
                <Text style={{ color: 'white', fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont' }}>Icon</Text>
              </View> */}
              <ImageBackground source={require('../../Images/Ellipse9.png')} style={styles.badge}>
                <Image source={require('../../Images/camera3x.png')} style={styles.badgeimage} />
              </ImageBackground>
            </ImageBackground>
            <Image source={require('../../Images/njcfdn.png')}/>

          </View>

          <View style={styles.generalgrid}>
            <View style={{ flex: 0.5, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
              <Image style={{
                resizeMode: 'contain', width: wp('9%'),
                height: hp('8%')
              }} source={require('../../Images/excel1.png')} />
            </View>
            <View style={{ flex: 2, }}>
              <Text style={TextStyles.h5blackbold}>File Name.xls</Text>
              <Text style={TextStyles.h4lightwhite}>35 KB</Text>
            </View>
            <View style={styles.darkpurplebuttonview}>
              <TouchableOpacity style={styles.purplebutton} >
                <Text style={styles.purplebuttontext}>CHANGE</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ width: '94%', marginTop: '3%', marginLeft: '2%', }}>
            <Input
              placeholder="Enter Group Name"
              rightIcon={() => this.renderCustomIconA()}
              onChangeText={value => this.setState({ enterdesc: value })}
              inputStyle={[TextStyles.h4lightwhite,{ fontSize: RFValue(16, 812),}]}
              containerStyle={{ height: 50, }}
              inputContainerStyle={{ width: '100%' ,borderColor:'#cccccc',borderBottomWidth:1}}

            />
          </View>
          <View style={{ width: '95%', marginTop: '0.5%', marginLeft: '2%', }}>
            <Input
              placeholder="Enter Description"
              rightIcon={() => this.renderCustomIconB()}
              onChangeText={value => this.setState({ enterdesc: value })}
              inputStyle={[TextStyles.h4lightwhite,{ fontSize: RFValue(16, 812),}]}
              containerStyle={{ height: 50 }}
              inputContainerStyle={{ width: '100%' ,borderColor:'#cccccc',borderBottomWidth:1}}
            />
          </View>
          {/* <View style={styles.dropdownContainer}> */}
            {/* <Dropdown
              data={data}
              underlineColor={'rgba(0, 0, 0, 0.5)'}
              onChange={item => this.changeCity(item)}
              textInputPlaceholder="Category"
              textInputPlaceholderColor='rgba(0, 0, 0, 0.5)'
              textInputStyle={{ fontFamily: 'silka-medium-webfont', fontSize: RFValue(18, 812), }}
              itemTextStyle={{ fontFamily: 'silka-medium-webfont', fontSize: RFValue(16, 812), color:'rgba(0, 0, 0, 0.5)'}}
              mainContainerStyle={{ 
              width: '90%',
              height: 50,
              fontFamily: 'silka-medium-webfont', fontSize: RFValue(16, 812), marginLeft:'5%',marginRight:'5%'}}
              underlineColor='#cccccc'

            /> */}
          {/* </View> */}
          <Pressable style={{ width: '95%', marginLeft: '2%',}} onPress={()=>{
            Alert.alert("Category")
          }}>
            <Input
              placeholder="Category"
              editable={false}
              rightIcon={() => this.renderCustomIconD()}
              onChangeText={value => this.setState({ enterdesc: value })}
              inputStyle={[TextStyles.h4lightwhite,{ fontSize: RFValue(16, 812),}]}
              containerStyle={{ height: 50, }}
              inputContainerStyle={{ width: '100%' ,borderColor:'#cccccc',borderBottomWidth:1}}
            />
          </Pressable>

          <View style={{ width: '95%', marginLeft: '2%',}}>
            <Input
              placeholder="Location"
              rightIcon={() => this.renderCustomIconC()}
              onChangeText={value => this.setState({ enterdesc: value })}
              inputStyle={[TextStyles.h4lightwhite,{ fontSize: RFValue(16, 812),}]}
              containerStyle={{ height: 50, }}
              inputContainerStyle={{ width: '100%' ,borderColor:'#cccccc',borderBottomWidth:1}}
            />
          </View>

          <View style={[styles.darkpurplebuttonview,{marginTop:'5%'}]}>
            <TouchableOpacity style={styles.darkpurplebutton} onPress={()=>{this.props.navigation.navigate("GroupInHome",{emptygroup:this.state.navigation.emptygroup})}}>
              <Text style={styles.darkpurplebuttontext}>CREATE GROUP</Text>
            </TouchableOpacity>
          </View>
        </View>


      </ScrollView>);
  }
}


export default CreateGroupScreen;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  maincontainersub: {
    flex: 0.29,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  imageiconStyle: {
    width: 10,
    marginTop: wp('10%'),
    marginLeft: 10
  },
  searchview: { flex: 1, alignItems: 'flex-end', justifyContent: 'center', marginRight: '2%' },
  avatar: {
    // backgroundColor: 'black',                                                                                                                                                                                    
    width: 80,
    height: 80,
  },
  // badge: {
  //   //  backgroundColor: 'red',                                                                                                                                                                                      
  //   width: 30,
  //   height: 30,
  //   left: 24,
  //   top: 24,
  //   bottom:30
  // },
  dropdownStyle: {
    margin: 10,
    width: '30%'
  },
  close: {
    //  backgroundColor: 'red',                                                                                                                                                                                      
    width: 30,
    height: 30,
    left: 34,
    top: 0,
  },
  textboxfield: {
    fontFamily: 'silka-regular-webfont',

  },
  rounrectview: {
    alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center', padding: 10,
  },
  roundrecimagestyles: {
    resizeMode: 'contain', width: wp('3%'),
    height: hp('3%'),
  },
  mainfirstview: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', },
  mainview: { alignItems: 'center', justifyContent: 'center', marginTop: '5%',flexDirection:'row' },
  groupinview: {
    flex: 4, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center',
  },
  badge: {
    //  backgroundColor: 'red',                                                                                                                                                                                      
    width: 38,
    height: 38,
     left: 40,
    // top: 24,
  },
  badgeimage: {
    width: 15,
    height: 15,
    left: 11,
    top: 7,
  },
  buttonview: { alignItems: 'center', alignContent: 'center', marginLeft: wp('20%'), margin: '5%' ,justifyContent:'center'},
  button: { borderRadius: hp('5%'), backgroundColor: "#65248E", height: hp('5%'), width: wp('19%'), justifyContent: 'center', alignContent: 'center', alignItems: 'center', elevation: 10, margin: '10%' },
  buttontext: {
    textAlign: 'center',
    fontSize: RFValue(16, 812),
    color: '#fff',
    fontFamily: 'silka-medium-webfont',
  },
  authtextstyle: { fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', color: 'black' },
  container: {
    //   paddingTop: 30,
    //   marginLeft: 20,
    //   marginRight: 20,
    //  flex: 1,
    //  width:'80%'
    // height: 50,
    width: '90%',
    // marginTop: 8,
    // borderRadius: 2,
    // borderColor: 'gray',
    fontSize: 20,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: '4%', marginBottom: '8%'
  },
  buttontext: {
    textAlign: 'center',
    fontSize: RFValue(18, 812),
    color: '#fff',
    fontFamily: 'silka-medium-webfont'
  },
  generalgrid: {
    elevation: 1, backgroundColor: '#F1F5FF', flexDirection: 'row', borderRadius: 10, justifyContent: 'center', alignContent: 'center', alignItems: 'center',
    marginTop: '3%', marginBottom: '1%', marginLeft: '5%', marginRight: '5%',
    height: hp('9%', 812),
  },
  dropdownContainer: {
    height: 50,
  },
  buttonviews: { marginTop: '1%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: '3%' },
  darkpurplebutton: {
    borderRadius: hp('5%',812), backgroundColor: "#4E1373",  width: 'auto', justifyContent: 'center', alignContent: 'center', alignItems: 'center', elevation: 10, 
},
darkpurplebuttonview: { justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '1%', padding: '1%',marginBottom:'1%' },
darkpurplebuttontext: {
    textAlign: 'center',
    fontSize: RFValue(14, 812),
    color: '#fff',
    fontFamily: 'silka-medium-webfont',
    margin:'4%'
},
purplebuttontext: {
  textAlign: 'center',
  fontSize: RFValue(14, 812),
  color: '#fff',
  fontFamily: 'silka-medium-webfont',
  margin:'10%'
},
purplebutton:{
  borderRadius: hp('5%',812), backgroundColor: "#4E1373", width:wp('22%',812), justifyContent: 'center', alignContent: 'center', alignItems: 'center', elevation: 10, 
}
})