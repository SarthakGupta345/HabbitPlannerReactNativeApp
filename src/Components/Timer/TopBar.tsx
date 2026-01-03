import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';
const TopBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <TouchableOpacity activeOpacity={0.85} onPress={() => {
                        router.back()
                    }}>
                        <Feather name="arrow-left" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: "800", fontSize: 18, color: "white" }}>Timer</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 13 }}>
                    <MaterialCommunityIcons name="vibrate" size={24} color="white" />
                    <Ionicons name="notifications-sharp" size={24} color="white" />
                    <AntDesign name="sound" size={24} color="white" />
                </View>

            </View>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        height: 65,
        borderBottomColor: "rgba(52, 53, 53, 1)",
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingBottom: 15
    },
    box: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 13
    }
})