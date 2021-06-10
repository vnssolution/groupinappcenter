import React,{ Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import CssStyles from '../../CssStyles/CssStyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImageStyle,{ width: '100%', height: '100%',alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,}}
                    resizeMode='stretch'
                    source={require('../../Images/bg.png')}>
                        <View style={{
                        
                            marginLeft:hp('2%'),
                          
                        
                        }}>
                            
                            <Image source={require('../../Images/logo.png')} style={CssStyles.logostyle} resizeMode="contain" />
                        </View>
                        <View style={{
                            marginTop:hp('-24%'),
                        }}>
                            <Image source={require('../../Images/gin2.png')} style={CssStyles.logobgstyle} resizeMode="contain" />
                        </View>

                 
                </ImageBackground>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: { width: '100%', height: '100%',flex:1 ,alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,},
    backgroundImageStyle: {
        flex: 1,
        resizeMode: 'cover',
    },
  
})

export default SplashScreen;