import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const width = Dimensions.get("window").width
const MiddleBar = () => {
    const [selected, setSelected] = useState("Countdown")
    const isActive = (key: string) => selected === key

    return (
        <View style={styles.container}>

           

            {/* MODE SELECTOR */}
            <View style={styles.bottomBox}>

                {/* Alarm */}
                <TouchableOpacity
                    style={[styles.box, styles.leftBox, isActive("Alarm") && styles.activeBox]}
                    onPress={() => setSelected("Alarm")}
                    activeOpacity={0.8}
                >
                    <FontAwesome5
                        name="clock"
                        size={22}
                        color={isActive("Alarm") ? "#fff" : "#a3a3a2"}
                    />
                    <Text style={[styles.text, isActive("Alarm") && styles.activeText]}>
                        Alarm
                    </Text>
                </TouchableOpacity>

                {/* Countdown */}
                <TouchableOpacity
                    style={[styles.box, styles.midBox, isActive("Countdown") && styles.activeBox]}
                    onPress={() => setSelected("Countdown")}
                    activeOpacity={0.8}
                >
                    <MaterialCommunityIcons
                        name="timer-sand"
                        size={30}
                        color={isActive("Countdown") ? "#fff" : "#a3a3a2"}
                    />
                    <Text style={[styles.text, isActive("Countdown") && styles.activeText]}>
                        Countdown
                    </Text>
                </TouchableOpacity>

                {/* Stopwatch */}
                <TouchableOpacity
                    style={[styles.box, styles.rightBox, isActive("Stopwatch") && styles.activeBox]}
                    onPress={() => setSelected("Stopwatch")}
                    activeOpacity={0.8}
                >
                    <MaterialCommunityIcons
                        name="alarm"
                        size={22}
                        color={isActive("Stopwatch") ? "#fff" : "#a3a3a2"}
                    />
                    <Text style={[styles.text, isActive("Stopwatch") && styles.activeText]}>
                        Stopwatch
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default MiddleBar

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
    },


    bottomBox: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(69, 68, 67, 1)",
        flexDirection: "row",
        marginTop: 30,
        overflow: "hidden"
    },

    box: {
        backgroundColor: 'rgba(54, 55, 56, 1)',
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 13,
        width: "33.5%",
    },

    leftBox: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },

    midBox: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: "rgba(82, 81, 80, 1)",
    },

    rightBox: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    text: {
        color: "rgba(163, 163, 162, 1)",
        fontWeight: "500",
        fontSize: 13,
        marginTop: 4,
    },

    activeBox: {
        backgroundColor: "rgba(182, 14, 84, 1)",
    },

    activeText: {
        color: "#fff",
        fontWeight: "700",
    }
})
