import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Records = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.indiBox}>
                    <Text style={styles.text}>No Recent Records</Text>
                </View>
                <View style={styles.indiBox}>
                    <Text style={styles.text}>No Activity Selected </Text>
                </View>
            </View>
        </View>
    )
}

export default Records

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 27,
        flex: 1,
    },
    box: {
        borderRadius: 10,
        backgroundColor: "rgba(37, 37, 37, 0.98)",
        width: "100%",

    },
    indiBox: {
        paddingHorizontal: 110,
        paddingVertical: 20,
        borderBottomColor: "black",
        borderBottomWidth: 1
    },
    text: {
        color: "rgba(98, 98, 97, 1)"

    }
})