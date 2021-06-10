import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, ImageBackground, Image, KeyboardAvoidingView, TouchableOpacity, Dimensions } from 'react-native';
import CssStyles from '../../CssStyles/CssStyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import {
//   Dropdown,
//   GroupDropdown,
//   MultiselectDropdown,
// } from 'sharingan-rn-modal-dropdown';
import { TextStyles, widthScale } from '../../CssStyles/TextStyles';

import { Component } from 'react';
import { CategoryList } from '../../ApiManager/ApiFetch'
import { CATEGORIES_ENDPOINTS } from '../../ApiManager/ApiEndpoints'
import DropdownScreen from '../UI/DropdownScreen';
import { Dropdown } from 'react-native-material-dropdown';

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
      CategoryList: []
    }
  }
  componentDidMount() {
    this.categoryListApi()
  }

  async categoryListApi() {

    let categoryres = await CategoryList()
    if (((categoryres || {}).data || {}) !== undefined) {

      this.setState({ CategoryList: categoryres.data })
      console.log("category res" + JSON.stringify(this.state.CategoryList))
    }
  }
  categorylistdata(){
    return(
      this.state.CategoryList.map(item => ({
        value: item.categoryName,
      }))
    )
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
              <Text style={[TextStyles.h3whitecenter,{justifyContent:'center',alignSelf:'center',alignContent:'center'}]}>Fill your details</Text>
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
                  dropdownPosition={-3}
                  data={this.categorylistdata()}
                  value={"Category"}
                  style={{ fontSize: widthScale(16), fontFamily: 'silka-medium-webfont', color: 'rgba(173, 122, 204, 1)' }}
                  itemTextStyle={{ fontSize: widthScale(16), fontFamily: 'silka-medium-webfont' }}
                  inputContainerStyle={{ borderBottomColor: 'transparent', width: '100%', }}
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
                data={statedata}
                value={"State"}
                style={{ fontSize: widthScale(16), fontFamily: 'silka-medium-webfont', color: 'rgba(173, 122, 204, 1)' }}
                itemTextStyle={{ fontSize: widthScale(16), fontFamily: 'silka-medium-webfont' }}
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
                data={CityData}
                value={"City"}
                style={{ fontSize: widthScale(16), fontFamily: 'silka-medium-webfont', color: 'rgba(173, 122, 204, 1)' }}
                itemTextStyle={{ fontSize: widthScale(16), fontFamily: 'silka-medium-webfont' }}
              />
              <Image
                style={styles.dropdownicon}
                source={require('../../Images/dropdown3x.png')}
              />
            </View>
            <View style={styles.lastborder} />
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '10%', padding: '3%' }}>
              <TouchableOpacity style={CssStyles.arrowbutton} onPress={() => this.props.navigation.navigate("GroupInHome")}>
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
  textstylewelscrn: { fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', color: '#D9C9E4', textAlign: 'center'},
  groupimage: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
  groupimageview: { alignContent: 'center', alignItems: 'center', justifyContent: 'center',marginLeft:'18%' },
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
