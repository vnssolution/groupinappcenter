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
        LogBox.ignoreLogs(['useNativeDriver',]);
        LogBox.ignoreAllLogs()
    }
    render() {
        const { data ,value,itemclr,font,itemTextStyle,style,dropdownPosition,onChangeText,pickerStyle} = this.props
        return (
            <View style={styles.container}>
                <Dropdown
                    useNativeDriver={false}
                    pickerStyle={pickerStyle}
                    animationDuration={1}
                    rippleDuration={1}
                    value={value}
                    data={data}
                    renderAccessory={() => null}
                    dropdownPosition={dropdownPosition}
                    style={style}
                    itemTextStyle={itemTextStyle}
                    onChangeText={onChangeText}
                    inputContainerStyle={{ borderBottomColor: 'transparent',  width: '100%', }}
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
        width: '100%',
    },
   
})

export default DropdownScreen;