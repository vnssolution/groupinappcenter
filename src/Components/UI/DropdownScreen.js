import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import { heightScale, widthScale } from '../../CssStyles/TextStyles';
import { LogBox } from 'react-native';


class DropdownScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userTypeValue: "",
            userType:[]
            // navigation: this.props.route.params,

        }
    }
    componentDidMount() {
        const { data ,datavalue} = this.props
        LogBox.ignoreLogs(['useNativeDriver',]);
        this.setState({ userType: data,userTypeValue:datavalue })
        console.log(JSON.stringify(data))
    }
    render() {

        return (
            <View style={styles.container}>
                <Dropdown
                    useNativeDriver={false}
                    pickerStyle={{
                        borderRadius: 10,
                        alignItems: 'center',
                        right: 0,
                        width: widthScale(300),
                         marginLeft: widthScale(5), marginRight: widthScale(5)
                    }}
                    animationDuration={1}
                    rippleDuration={1}
                    value={this.state.userTypeValue}
                    data={this.state.userType}
                    dropdownPosition={-5}
                    style={{fontSize:widthScale(16),fontFamily:'silka-medium-webfont',color:'rgba(173, 122, 204, 1)'}}
                    itemTextStyle={{fontSize:widthScale(14),fontFamily:'silka-medium-webfont',color:'rgba(173, 122, 204, 1)'}}
                    inputContainerStyle={{ borderBottomColor: 'transparent',  width: '100%' }}
                />

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        width: '100%'
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 100,
        width: 348,
        elevation: 50
    },
})

export default DropdownScreen;