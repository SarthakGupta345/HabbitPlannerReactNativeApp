import { View, Text, StyleSheet, TouchableOpacity, Dimensions, PanResponder } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

import TaskImage from "../../assets/images/taskBro.png";
import SecondPage from "./SecondPage";

const { width } = Dimensions.get("window");

const FirstPage = () => {


    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gesture) =>
                Math.abs(gesture.dx) > Math.abs(gesture.dy),

            onPanResponderRelease: (_, gesture) => {
                if (gesture.dx < -50) {
                    setNextSelected(true);
                    console.log(nextSelected);
                }

                if (gesture.dx > 50) {
                    setPrevSelected(true);
                }
            },
        })
    ).current;
    const [nextSelected, setNextSelected] = useState(false);

    if (nextSelected) {
        return (
            <SecondPage />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                {/* Illustration */}
                <View style={styles.iconWrapper}>
                    <Image
                        source={TaskImage}
                        style={styles.icon}
                        contentFit="contain"
                    />
                </View>

                {/* Text */}
                <View style={styles.textBox}>
                    <Text style={styles.title}>Welcome to Planner</Text>
                    <Text style={styles.subtitle}>
                        Stay focused, organize tasks, and build powerful daily habits.
                    </Text>
                </View>

                {/* Bottom Navigation */}
                <View style={styles.bottom}>
                    <TouchableOpacity>
                        <Text style={styles.skip}>Skip</Text>
                    </TouchableOpacity>

                    <View style={styles.dots}>
                        <View style={[styles.dot, styles.activeDot]} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>

                    <TouchableOpacity activeOpacity={0.7}
                        onPress={() => {
                            setNextSelected(true)
                        }}
                    >
                        <Text style={styles.next}>Next</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default FirstPage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f0f0fff",
    },

    wrapper: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: "space-between",
    },

    /* Illustration */
    iconWrapper: {
        marginTop: 60,
        alignItems: "center",
        marginRight: 17
    },

    icon: {
        width: width * 0.9,
        height: width * 0.9,
    },

    /* Text */
    textBox: {
        alignItems: "center",
        paddingHorizontal: 12,
        marginBottom: 60
    },

    title: {
        color: "#22c538ff",
        fontSize: 30,
        fontWeight: "800",
        marginBottom: 10,
    },

    subtitle: {
        color: "#b5b7baff",
        fontSize: 16,
        textAlign: "center",
        lineHeight: 24,
    },

    /* Bottom */
    bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
    },

    skip: {
        color: "#9CA3AF",
        fontSize: 16,
        marginLeft: 15
    },

    next: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
        marginRight: 15
    },

    dots: {
        flexDirection: "row",
        gap: 6,
    },

    dot: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: "#374151",
    },

    activeDot: {
        backgroundColor: "#22c548ff",
        width: 12,
    },
});
