import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CountDown = () => {
    return (
        <View style={styles.container}>
            <View style={styles.lane}>

                <Text style={styles.sideText}>56</Text>
            </View>
        </View>
    )
}


export default CountDown

const styles = StyleSheet.create({
    container: {
        marginLeft: 100

    },
    lane: {

    },
    midBox: {

    },
    mainText: {
        color: "white",
        fontSize: 40

    },
    sideText: {
        color: "white",
        fontSize: 20

    }
})