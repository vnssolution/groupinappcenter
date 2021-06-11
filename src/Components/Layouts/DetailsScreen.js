import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, ImageBackground, Image, KeyboardAvoidingView, TouchableOpacity, Dimensions, Alert, ToastAndroid } from 'react-native';
import CssStyles from '../../CssStyles/CssStyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import {
//   Dropdown,
//   GroupDropdown,
//   MultiselectDropdown,
// } from 'sharingan-rn-modal-dropdown';
import { heightScale, TextStyles, widthScale } from '../../CssStyles/TextStyles';

import { Component } from 'react';
import { CategoryList, CityListApi, StateListApi,CityListApiBYSTATEID,INSERTPROFILE } from '../../ApiManager/ApiFetch'
import { CATEGORIES_ENDPOINTS } from '../../ApiManager/ApiEndpoints'
import DropdownScreen from '../UI/DropdownScreen';
import { Dropdown } from 'react-native-material-dropdown';
import AsyncStorageContants from '../../ApiManager/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const categorydata = [
  {
    value: 'Adult',
  },
  {
    value: 'Student',

  },
  {
    value: 'Employee',
  },
  {
    value: 'Non-working category',
  },
];
export const countrydata = [
  {
    value: 'Australia',
  },
  {
    value: 'India',
  },
  {
    value: 'Pakistan',
  },
  {
    value: 'Srilanka',
  },
];
export const statedata = [
  {
    value: 'Andhra Pradesh',
  },
  {
    value: 'Kerala',
  },
  {
    value: 'Tamilnadu',
  },
  {
    value: 'Telangana',
  },
];
export const CityData = [
  {
    value: 'kadapa',
  },
  {
    value: 'Guntur',
  },
  {
    value: 'Tirupati',
  },
  {
    value: 'Telangana',
  },
];

class DetailsScreen extends Component {
  // const [valueMS, setValueMS] = useState('');
  // const [valueSS, setValueSS] = useState('');
  // const [valueGS, setValueGS] = useState('');
  // const onChangeMS = (value) => {
  //   setValueMS(value);
  // };
  // const onChangeSS = (value) => {
  //   setValueSS(value);
  // };
  // const onChangeGS = (value) => {
  //   setValueGS(value);
  // };
  // useEffect(() => () => console.log("unmount"), []);
  constructor(props) {
    super(props);
    this.state = {
      CategoryList: [],
      StateList:[],
      CityList:[],
      stateidvalue:"",
      categoreyidvalue:"",
      cityidvalue:"",
      cityvalue:"City",
      navigation: this.props.route.params,
    }
  }
  componentDidMount() {
    this.categoryListApi()
    this.getStateListAPI()
   this.getCityListAPI()
  }



  async categoryListApi() {
    let categoryres = await CategoryList()
    if (((categoryres || {}).data || {}) !== undefined) {
      console.log("categoryListApi res" + JSON.stringify(categoryres.data))
      this.setState({ CategoryList: categoryres.data })
      
    }
  }
  categorylistdata() {
    if(this.state.CategoryList!==undefined && this.state.CategoryList.length>0){
    return (
      this.state.CategoryList.map(item => ({
        value: item.categoryName,id:item.categoryId
      }))
    )
    }
    else{
      <View>
        <Text>No Data Found</Text>
      </View>
    }
  }
  async getStateListAPI() {

    const tokenval = await AsyncStorage.getItem("token")
    let stateres = await StateListApi(tokenval)
    if (((stateres || {}).data || {}) !== undefined) {

      this.setState({ StateList: stateres.data })
      console.log("state res" + JSON.stringify(this.state.StateList))
    }
  }
  stateListData() {
    if(this.state.StateList!==undefined&&this.state.StateList.length>0){
    return (
      this.state.StateList.map(item => ({
        value: item.stateName,id:item.stateId
      }))
    )
    }
  }
  async getCityListAPI(id) {
    const tokenval = await AsyncStorage.getItem("token")
    console.log("getCityListAPI token =="+tokenval)
    console.log(" getCityListAPI stateidvalue ==="+id+"CityID ==="+this.state.cityidvalue)
    if(id!=="" &&this.state.stateidvalue!==""){
      let Cityres = await CityListApiBYSTATEID(tokenval,id)
      if (((Cityres || {}).data || {}) !== undefined) {
        if(Cityres.data.length>0){
          this.setState({ CityList: Cityres.data })
        }
        else{
          ToastAndroid.show("Empty City data", ToastAndroid.LONG)
          this.setState({cityvalue:"City",})
     
        }
        console.log("getCityListAPI res  if" + JSON.stringify(this.state.CityList))
      }
  }
  else{
    let Cityres = await CityListApi(tokenval)
    if (((Cityres || {}).data || {}) !== undefined) {
        this.setState({ CityList: Cityres.data })
        this.setState({cityvalue:"City"})
      console.log("getCityListAPI res  else" + JSON.stringify(Cityres.data))
    }
  }
  }
  cityListData() {
    if(this.state.CityList!==undefined&&this.state.CityList.length>0){
    return (
      this.state.CityList.map(item => ({
        value: item.cityName,id:item.cityId
      }))
    )
  }
  }

  async userRegForm(){
    const tokenval = await AsyncStorage.getItem("token")
    const phonum = await AsyncStorage.getItem("phone")
    const userval =await AsyncStorage.getItem("useridval")
    console.log("userid"+userval)

    let userRegFormreq= {
      userId:userval,
      mobileNumber: phonum,
      displayName:this.state.navigation.username,
      cityId: this.state.cityidvalue,
      stateId: this.state.stateidvalue,
      categoryId: this.state.categoreyidvalue,
      password:this.state.navigation.password
      
  }
  console.log("userRegFormres req =="+JSON.stringify(tokenval))

  console.log("userRegFormres req =="+JSON.stringify(userRegFormreq))

  let userRegFormres = await INSERTPROFILE(userRegFormreq,tokenval,userval)
  if (((userRegFormres || {}).data || {}) !== undefined) {
    console.log("userRegFormres res =="+JSON.stringify(userRegFormres.data))
    if(userRegFormres.data.status ===true){
        ToastAndroid.show(userRegFormres.data.message, ToastAndroid.LONG)
        this.props.navigation.navigate("GroupInHome")
    }
  }
  else{
    ToastAndroid.show(userRegFormres, ToastAndroid.LONG)
  }

  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.welcomebackimgview}
          resizeMode='stretch'
          source={require('../../Images/bg.png')}>
          <View style={{ flexDirection: 'row', margin: '3%', marginTop: '2%' }}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Image source={require('../../Images/backimagecircle.png')} style={{
                resizeMode: 'contain', width: wp('10%', 812),
                height: hp('7%', 812),
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


            <View style={styles.groupimageview}>
              <Text style={[TextStyles.h3whitecenter, { justifyContent: 'center', alignSelf: 'center', alignContent: 'center' }]}>Fill your details</Text>
            </View>
          </View>
          <View style={{ marginLeft: '5%', marginRight: '5%', marginBottom: '5%' }}>
            <Text style={TextStyles.ptextcenter}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
          </View>
          <ScrollView>
            <View style={styles.dropdownContainer}>
              <Image
                style={styles.mapIcon}
                source={require('../../Images/category.png')}
              />
              <DropdownScreen
               pickerStyle={{
                borderRadius: 10,
                alignItems: 'center',
                right: 0,
                width: widthScale(300),
                 marginLeft: widthScale(5), marginRight: widthScale(5)
            }}
                dropdownPosition={-4}
                data={this.categorylistdata()}
                value={"Category"}
                style={{ fontSize: widthScale(16), fontFamily: 'silka-medium-webfont', color: 'rgba(173, 122, 204, 1)' }}
                itemTextStyle={{ fontSize: widthScale(16), fontFamily: 'silka-medium-webfont' }}
                inputContainerStyle={{ borderBottomColor: 'transparent', width: '100%', }}
                onChangeText={(value,id)=>{
                  this.setState({categoreyidvalue:id})
                  console.log("value == "+JSON.stringify(id))
                }}
              
              />
              <Image
                style={styles.dropdownicon}
                source={require('../../Images/dropdown3x.png')}
              />
            </View>
            <View style={styles.lastborder} />
            <View style={styles.dropdownContainer}>
              <Image
                style={styles.mapIcon}
                source={require('../../Images/vector8.png')}
              />
              <DropdownScreen
               pickerStyle={{
                borderRadius: 10,
                alignItems: 'center',
                right: 0,
                width: widthScale(300),
                 marginLeft: widthScale(5), marginRight: widthScale(5)
            }}
                dropdownPosition={-3}
                data={this.stateListData()}
                value={"State"}
                style={{ fontSize: widthScale(16), fontFamily: 'silka-medium-webfont', color: 'rgba(173, 122, 204, 1)' }}
                itemTextStyle={{ fontSize: widthScale(16), fontFamily: 'silka-medium-webfont' }}
                onChangeText={(value,id)=>{
                  this.setState({stateidvalue:id})
                  this.getCityListAPI(id)
                  console.log("value == "+JSON.stringify(id))
                }}
              />
              <Image
                style={styles.dropdownicon}
                source={require('../../Images/dropdown3x.png')}
              />
            </View>
            <View style={styles.lastborder} />
            <View style={styles.dropdownContainer}>
              <Image
                style={styles.mapIcon}
                source={require('../../Images/vector8.png')}
              />
              <DropdownScreen
               pickerStyle={{
                borderRadius: 10,
                width: widthScale(300),
                 marginLeft: widthScale(5), marginRight: widthScale(5),
                 height:heightScale(200)
            }}
                dropdownPosition={-5}
                data={this.cityListData()}
                value={this.state.cityvalue}
                style={{ fontSize: widthScale(16), fontFamily: 'silka-medium-webfont', color: 'rgba(173, 122, 204, 1)' }}
                itemTextStyle={{ fontSize: widthScale(16), fontFamily: 'silka-medium-webfont' }}
                onChangeText={(value,id)=>{
                  this.setState({cityvalue:value})
                  this.setState({cityidvalue:id})
                  console.log("value == "+JSON.stringify(id))
                }}
                
              />
              <Image
                style={styles.dropdownicon}
                source={require('../../Images/dropdown3x.png')}
              />
            </View>
            <View style={styles.lastborder} />
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '10%', padding: '3%' }}>
              <TouchableOpacity style={CssStyles.arrowbutton} onPress={() => this.userRegForm()}>
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
      </View>

    );
  }
};

const styles = StyleSheet.create({
  dropdownContainer: {
    marginLeft: '5%', marginRight: '7%', marginTop: '2%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  container: { flex: 1, width: '100%', height: '100%', alignItems: 'center', },
  backgroundImage: {
    flex: 1,
    width: '100%', height: '100%'
  },
  welcjustycenter: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
  textstylewelscrn: { fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', color: '#D9C9E4', textAlign: 'center' },
  groupimage: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
  groupimageview: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: '18%' },
  textstyle: { fontSize: RFValue(20, 812), fontFamily: 'silka-bold-webfont', color: '#fff', textAlign: 'center' },
  authtextstyle: { fontSize: RFValue(18, 812), color: '#fff' },
  mapIcon: {
    resizeMode: 'contain', width: wp('5%', 812),
    height: hp('5%', 812),
    marginLeft: '3%'
  },
  lastborder: { borderBottomColor: '#808080', marginLeft: '5%', marginRight: '5%', borderBottomWidth: 1, },
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
  h1whitecenterbold: { fontSize: RFValue(25, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center', },
  welcomebackimgview: { width: '100%', height: '100%', flex: 1, },
  dropdownicon: {
    resizeMode: 'contain', width: wp('4%', 812),
    height: hp('5%', 812),
  }

});

export default DetailsScreen;
