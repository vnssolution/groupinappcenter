import { StyleSheet, PixelRatio, Platform, Dimensions, StatusBar, Alert } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export const myWidth = Dimensions.get('window').width;
export const myHeight = Dimensions.get('window').height;
export const isPlatformIOS = Platform.OS == 'ios';
const standardWidth = 375.0;
const isiPhoneX = isPlatformIOS && myHeight > 800;
const standardHeight = 667.0;
const statusBarHeight = (() => {
    if (Platform.OS === 'android') {
        return StatusBar.currentHeight || 20;
        // return 30;
    }
    if (isiPhoneX) {
        return 45;
    }
    return 20;
})();
var validateEmail = email => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};
var validateMobileNumber = phone => {
    let regex = /^[0-9]{10}$/;
    return regex.test(phone);
};
export function widthScale(dimension) {
    return (dimension / standardWidth) * myWidth;
}

export function heightScale(dimension) {
    return (dimension / standardHeight) * myHeight;
}
export const SCRBG ="#FAF4FF"
console.log("fonts " +"widthScale(30) =" +widthScale(30));
console.log("fonts " +"widthScale(28) =" +widthScale(28));
console.log("fonts " +"widthScale(26) =" +widthScale(26));
console.log("fonts " +"widthScale(24) =" +widthScale(24));
console.log("fonts " +"widthScale(22) =" +widthScale(22));
console.log("fonts " +"widthScale(16) =" +widthScale(16));
console.log("fonts " +"widthScale(18) =" +widthScale(18));
console.log("fonts " +"widthScale(15) =" +widthScale(15));
console.log("fonts " +"widthScale(14) =" +widthScale(14));
console.log("fonts " +"widthScale(12) =" +widthScale(12));
console.log("fonts " +"widthScale(10) =" +widthScale(10));
console.log("fonts " +"widthScale(9) =" +widthScale(9));
export const TextStyles = StyleSheet.create(
    {

    h1whitecenterbold: { fontSize: widthScale(22), fontFamily: 'silka-bold-webfont', color: '#fff', textAlign: 'center', },
    h1blackbold: { fontSize: widthScale(28), fontFamily: 'silka-bold-webfont', textAlign: 'center', color: '#000' },
    h2whitecenter: { fontSize: widthScale(22), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center', },
    h2whitecenterbold: { fontSize: widthScale(20), fontFamily: 'silka-bold-webfont', color: '#fff', textAlign: 'center' },
    h2blackbold: { fontSize: widthScale(20), fontFamily: 'silka-bold-webfont', textAlign: 'center', color: '#000' },

    h3whitecenter: { fontSize: widthScale(18), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center', },
    h3white: { color: '#fff', fontSize: widthScale(16), fontFamily: 'silka-medium-webfont' },
    h3blackcenter: { fontSize: widthScale(18), fontFamily: 'silka-medium-webfont', textAlign: 'center', color: '#000' },
    h3whitebold: { fontSize: widthScale(18), color: '#fff', fontFamily: 'silka-bold-webfont' },
    h3blackbold: { fontSize: widthScale(18), fontFamily: 'silka-bold-webfont', textAlign: 'center', color: '#000' },


    h4whitecenter: { fontSize: widthScale(14), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center', },
    h4purpletext: { fontSize: widthScale(14), fontFamily: 'silka-medium-webfont', color: '#792BA9' },
    h4purpletextcenter: { fontSize: widthScale(16), fontFamily: 'silka-medium-webfont', textAlign: 'center', color: '#792BA9' },
    h4white: { flex: 1, fontSize: widthScale(16), color: '#fff', fontFamily: 'silka-medium-webfont' },
    h4whitewof: { fontSize: widthScale(14), color: '#fff', fontFamily: 'silka-medium-webfont' },
    h4lightwhite: { fontSize: widthScale(16), color: 'rgba(0, 0, 0, 0.5)', fontFamily: 'silka-medium-webfont', },
    h4blackcenter: { fontSize: widthScale(16), fontFamily: 'silka-medium-webfont', color: '#000', textAlign: 'center', },
    h4lightwhitecenter: { fontSize: widthScale(14), fontFamily: 'silka-medium-webfont', textAlign: 'center', color: '#999999' },
    h4whitegreycenter: { fontSize: widthScale(16), fontFamily: 'silka-medium-webfont', textAlign: 'center', color: '#333333' },
    h4black: { fontSize: widthScale(14), color: '#333333', fontFamily: 'silka-medium-webfont' },

    h5blackbold: { fontSize: widthScale(14), color: '#000', fontFamily: 'silka-bold-webfont', },
    h5semiblack: { fontSize: widthScale(14), fontFamily: 'silka-medium-webfont', color: '#333333' },
    h5black: { fontSize: widthScale(12), fontFamily: 'silka-medium-webfont', color: '#333333' },

    h5lightpurple: { fontSize: widthScale(14), fontFamily: 'silka-medium-webfont', color: '#792BA9' },
    h5lightpurplebold: { fontSize: widthScale(16), fontFamily: 'silka-bold-webfont', color: '#792BA9' },
    h5purple: { fontSize: widthScale(14), fontFamily: 'silka-medium-webfont', color: '#560A86' },
    h5purplebold: { fontSize: widthScale(14), fontFamily: 'silka-bold-webfont', color: '#560A86' },
    h5blackcenter: { fontSize: widthScale(12), fontFamily: 'silka-medium-webfont', color: '#000', textAlign: 'center' },
    h5white: { flex: 1, fontSize: widthScale(14), color: '#fff', fontFamily: 'silka-medium-webfont', },
    h5whitebold: { flex: 1, fontSize: widthScale(14), color: '#fff', fontFamily: 'silka-bold-webfont', },

    h6white: { flex: 1, fontSize: widthScale(14), color: '#fff', fontFamily: 'silka-medium-webfont', },
    h6lightblack: { fontSize: widthScale(14), fontFamily: 'silka-medium-webfont', color: '#333333' },
    h6semiblack: { fontSize: widthScale(14), fontFamily: 'silka-medium-webfont', color: '#333333' },
    h7purplelightpurple: { fontSize: widthScale(12), fontFamily: 'silka-bold-webfont', color: '#560A86' },
    h7purplecont: { color: '#A47CC3', fontSize: widthScale(11), fontFamily: 'silka-medium-webfont', },
    h7lightwhitetext: { flex: 1, fontSize: widthScale(10), color: '#7E8793', fontFamily: 'silka-medium-webfont', },
    ptextcenter: { fontSize: widthScale(14), fontFamily: 'silka-medium-webfont', color: '#D9C9E4', textAlign: 'center', },
    h7lightblack: { fontSize: widthScale(9), fontFamily: 'silka-medium-webfont', color: '#999999' },

    inputtextstyle: { fontSize: widthScale(16), fontFamily: 'silka-medium-webfont', color: '#fff', marginLeft: '2%' },
    phoneinputtextstyle: { fontSize: widthScale(16), fontFamily: 'silka-medium-webfont', color: '#fff', },

    itemText: { flex: 1, fontSize: widthScale(14), color: '#560A86', fontFamily: 'silka-medium-webfont', paddingBottom: '1%', },
    memitemText: { flex: 1, fontSize: widthScale(12), color: '#7E8793', fontFamily: 'silka-medium-webfont', marginRight: '2%' },
    admintimetext: { color: '#767676', fontFamily: 'silka-medium-webfont', fontSize: widthScale(10), marginRight: '3%', },
    genitemText: { flex: 1, fontSize: widthScale(14), color: '#560A86', fontFamily: 'silka-medium-webfont', },
    genmemitemText: { fontSize: widthScale(12), color: '#7E8793', fontFamily: 'silka-medium-webfont', flex: 1, },
    counttext: { fontSize: widthScale(10), color: '#fff', fontFamily: 'silka-medium-webfont', textAlign: 'center', },

    tabTextStyle: { color: '#A47CC3', fontSize: widthScale(16), fontFamily: 'silka-medium-webfont', width: 'auto', justifyContent: 'center', alignItems: 'center', },
    activeTabTextStyle: { color: '#fff', width: 'auto', fontSize: widthScale(18), fontFamily: 'silka-bold-webfont', justifyContent: 'center', alignItems: 'center', },

    oktextstyle: {
        color: '#69C7FF',
        fontFamily: 'silka-medium-webfont',
        fontSize: widthScale(14)
    },

    brocastext: { fontSize: widthScale(12), fontFamily: 'silka-medium-webfont', color: '#800080', textAlign: 'center', }


})
export default TextStyles;