import {StyleSheet} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {widthScale,heightScale} from '../../CssStyles/TextStyles'

export default StyleSheet.create({
  root: {padding:10},
//   title: {textAlign: 'center',   fontSize:RFValue(18, 812) ,  color: '#fff',  fontFamily: 'silka-medium-webfont',},
  codeFiledRoot: {
    marginTop: '2%',
    width: widthScale(220),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    height: heightScale(58), 
    width: widthScale(48), 
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius:10,
    backgroundColor:'#fff',
  },
  cellText: {
    fontSize:widthScale(18) ,  color: '#560A86',  fontFamily: 'silka-medium-webfont',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
  subcontainerviewofview1: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5%', },
  submitbutton: { borderRadius: hp('1%',812), backgroundColor: "#fff", height: hp('5%',812), width: wp('20%',812), justifyContent: 'center', alignContent: 'center', alignItems: 'center' },
  submitbuttonview: { marginBottom: '5%',  marginTop: '5%', position: 'absolute', left: 0, right: 0, bottom: hp('5%',812), },
  submittext: {
      textAlign: 'center',
      textDecorationStyle: 'solid',
      textShadowRadius: 20,
      textDecorationColor: '#fff',
      fontSize: RFValue(20, 812),
      color: '#7826ac',
      fontFamily: 'silka-medium-webfont'
  },
});