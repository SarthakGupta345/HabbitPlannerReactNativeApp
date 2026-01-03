import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo'

const { width } = Dimensions.get("window")

const Footer = () => {
    const [start, setStart] = useState(false)
    const [time, setTime] = useState(10)

    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const startTimer = () => {
        if (timerRef.current) return   // prevent multiple timers

        timerRef.current = setInterval(() => {
            setTime(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current!)
                    timerRef.current = null
                    setStart(false)
                    return 0
                }
                return prev + 1
            })
        }, 1000)
    }

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = null
        }
        setStart(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={{ fontSize: 75, color: "white" }}>{time}</Text>
            </View>

            {start ? (
                <View style={{ flexDirection: "row", gap: 5 }}>
                    <TouchableOpacity
                        style={[styles.startBox, { width: 143 }]}
                        activeOpacity={0.85}
                        onPress={startTimer}
                    >
                        <Entypo name="controller-play" size={24} color="white" />
                        <Text style={styles.startText}>RESUME</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.startBox, { width: 118 }]}
                        activeOpacity={0.85}
                        onPress={stopTimer}
                    >
                        <Entypo name="controller-paus" size={24} color="white" />
                        <Text style={styles.startText}>STOP</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity
                    style={styles.startBox}
                    activeOpacity={0.85}
                    onPress={() => {
                        setStart(true)
                        startTimer()
                    }}
                >
                    <Entypo name="controller-play" size={24} color="white" />
                    <Text style={styles.startText}>START</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}



export default Footer

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 50,
        marginBottom: 50
    },
    box: {
        borderRadius: 150,
        width: 230,
        height: 230,
        borderWidth: 8,
        borderColor: "rgba(96, 30, 57, 0.86)",
        alignItems: "center",
        justifyContent: "center"

    },
    startBox: {
        backgroundColor: "rgba(182, 14, 84, 1)",
        paddingHorizontal: 11,
        paddingVertical: 14,
        flexDirection: "row",
        gap: 12,
        width: 130,
        marginTop: 50,
        marginLeft: width / 40,
        borderRadius: 12,
        alignItems: "center"
    },

    startText: {
        fontWeight: "800",
        fontSize: 18,
        color: "white"
    },

})