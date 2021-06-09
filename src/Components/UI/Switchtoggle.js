import React, { Component } from 'react'
import { View, Switch, StyleSheet }

    from 'react-native'

export default Switchtoggle = (props) => {
    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ true: '#541E77', false: '#d3d3d3' }}
                // thumbColor={props.switchValue ? "#fff" : "#f4f3f4"}
                thumbColor='#FFF'
                onValueChange={props.toggleSwitch}
                value={props.switchValue}
                style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}

            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      
    }
})