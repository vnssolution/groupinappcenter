import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import res from '../../../res'
// import { widthScale} from '../../utility/Utils'
// import strings from '../../../res/constants/strings'



class Modal extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.containerView}>
                <Text style={styles.label}>No data found</Text>    
            </View>
        )
    }
}

const styles = StyleSheet.create({

    containerView: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
    },
    label: {
        // fontFamily: ,
        fontSize: 20
        // color: res.colors.formLabelGrey
    },
})

export default Modal;

