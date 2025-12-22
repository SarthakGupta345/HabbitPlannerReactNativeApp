import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Footer = () => {

    const handleSubmit = async () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TouchableOpacity style={{ marginLeft: 55 }}
                    activeOpacity={0.85}
                    onPress={() => {
                        router.replace('/(tabs)/Home')
                    }}
                >
                    <Text style={styles.cancelText}>CANCEL</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 50 }}
                    activeOpacity={0.85}
                    onPress={handleSubmit}
                >
                    <Text style={styles.confirmText}>CONFIRM</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 2,
        borderTopColor: "rgba(40, 41, 41, 1)",
        marginTop: 60
    },
    box: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15
    },
    cancelText: {
        color: "rgba(229, 233, 233, 1)",
        fontSize: 17,
        fontWeight: "bold"

    },
    confirmText: {
        color: "orange",
        fontSize: 17,
        fontWeight: "bold"
    }

})