import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    ActivityIndicator
} from 'react-native';
const Loader = props => {
    const {
        loading,
        ...attributes
    } = props;
    console.log("loading=="+JSON.stringify(loading))
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator size="large" color="#4E1373" />
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'transparent'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 50,
        width: 50,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
export default Loader;