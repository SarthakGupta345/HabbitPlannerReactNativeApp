import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Animated,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../Constants/Colors/Colors";
import { Image } from "expo-image";
const person = "data:image/webp;base64,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"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
const { width } = Dimensions.get("window");
const SIDEBAR_WIDTH = width * 0.7;
const visible = true;
const Sidebar = () => {
    // ⬅️ start hidden on the LEFT
    const translateX = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;

    useEffect(() => {
        Animated.timing(translateX, {
            toValue: visible ? 0 : -SIDEBAR_WIDTH,
            duration: 250,
            useNativeDriver: true,
        }).start();
    }, [visible]);

    if (!visible) return null;

    return (
        <View style={styles.overlay} >
            {/* Sidebar FIRST so it stays on left */}
            <Animated.View
                style={[
                    styles.sidebar,
                    { transform: [{ translateX }] },
                ]}
            >
                <SafeAreaView style={{ paddingHorizontal: 10 }}>
                    <View style={{ margin: 5 }}>
                        <View style={{ flexDirection: "row", marginLeft: 8, marginTop: 2 }}>
                            <Text style={styles.logoText1}>Daily</Text>
                            <Text style={styles.logoText2}>Planner</Text>
                        </View>


                        {/* Profile */}
                        <View style={styles.profileBox}>
                            <Image
                                source={person}
                                style={styles.profileImage}
                            />
                            <TouchableOpacity style={{ marginLeft: 1, marginTop: 10 }} activeOpacity={0.8}
                                onPress={() => {
                                    router.push("/(progress)/Progress")
                                }}
                            >
                                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Hello Sarthak 🤗</Text>
                                <Text style={{ color: "gray", fontSize: 13, fontWeight: "medium" }}>Your Progress</Text>
                            </TouchableOpacity>

                        </View>

                        {/* date  */}

                        {/* <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginLeft: 10 }}>
                            <View>
                                <Text style={{
                                    fontSize: 16, fontWeight: "semibold", color: "white"
                                }}
                                >Monday</Text>
                                <Text
                                    style={{
                                        fontSize: 13, fontWeight: "semibold", color: "gray"
                                    }}
                                >22 December 2025</Text>
                            </View>


                        </View> */}

                        {/* Options */}

                        <View>


                            {/* Tasks */}

                            <View style={styles.optinBox}>


                                <View style={styles.indiBox}>
                                    <FontAwesome name="star" size={24} color="white" />
                                    <Text style={styles.text}>Starred Task</Text>
                                </View>



                                <View style={styles.indiBox}>
                                    <FontAwesome6 name="swatchbook" size={20} color="white" />
                                    <Text style={styles.text}>Categories</Text>
                                    <MaterialIcons name="arrow-drop-down" size={24} color="white" style={{ marginLeft: "auto" }} />
                                </View>

                                <View style={styles.indiBox}>
                                    <MaterialCommunityIcons name="widgets" size={24} color="white" />                                    <Text style={styles.text}>Widgest</Text>
                                </View>

                            </View>



                            {/* Timer */}
                            {/* //TODO:implement timer and rate us later */}




                            {/* settings */}


                            <View style={styles.optinBox}>
                                <View style={styles.indiBox}>
                                    <Ionicons name="color-fill-sharp" size={28} color="orange" />
                                    <Text style={styles.text}>Customize</Text>
                                </View>

                                <TouchableOpacity style={styles.indiBox} activeOpacity={0.85}
                                    onPress={() => {
                                        router.push("/(Setting)/mainPage")
                                    }}
                                >
                                    <Ionicons name="settings" size={24} color="white" />
                                    <Text style={styles.text}>Settings</Text>
                                </TouchableOpacity>


                                <View style={styles.indiBox}>
                                    <AntDesign name="cloud-upload" size={28} color="white" />
                                    <Text style={styles.text}>Account & Backup</Text>
                                </View>

                            </View>


                            {/* Premium Options */}

                            <TouchableOpacity style={styles.optinBox} activeOpacity={0.85}
                                onPress={() => {
                                    router.push("/(Premium)/PremiumPage")
                                }}
                            >
                                <View style={styles.indiBox}>
                                    <FontAwesome5 name="crown" size={22} color="rgba(207, 142, 0, 1)" />                                     <Text style={styles.text}>Premium</Text>
                                </View>

                                <View style={styles.indiBox}>
                                    <Ionicons name="settings" size={22} color="white" />
                                    <Text style={styles.text}>Feedback</Text>
                                </View>



                                <View style={styles.indiBox}>
                                    <AntDesign name="cloud-upload" size={22} color="white" />
                                    <Text style={styles.text}>Contact us</Text>
                                </View>

                            </TouchableOpacity>

                        </View>



                    </View>
                </SafeAreaView>
            </Animated.View>

            {/* Dim background */}
            <Pressable style={styles.backdrop} />
        </View>
    );
};

export default Sidebar;


const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: "row", // 👈 critical
        zIndex: 100,
    },

    profileBox: {
        flexDirection: "row",
        gap: 15,
        marginTop: 15,
        marginLeft: 3

    },

    profileImage: {
        width: 65,
        height: 65,
        borderRadius: 50

    },
    optinBox: {
        flexDirection: "column",
        gap: 15,
        marginTop: 10,
        borderBottomColor: "rgba(44, 44, 45, 1)",
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingBottom: 14,
        paddingTop: 14
    },
    indiBox: {
        flexDirection: "row",
        gap: 10
    },
    text: {
        color: "rgba(180, 181, 177, 0.84)",
        fontSize: 17,
        fontWeight: "medium"
    },

    logoText1: {
        color: COLORS.accent,
        fontSize: 28,
        fontWeight: "condensedBold"
    },
    logoText2: {
        color: COLORS.accent,
        fontSize: 28,
        fontWeight: "bold"
    },

    sidebar: {
        width: "70%",
        backgroundColor: "#1e1f1e",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },

    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
    },

});
