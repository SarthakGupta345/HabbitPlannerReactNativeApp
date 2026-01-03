import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Pressable,
    TouchableOpacity,
} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import Sidebar from "@/src/Components/SidebarMain";
import TaskBox from "@/src/Components/Task";

const Home = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const days = useMemo(() => {
        const result = [];
        const today = new Date();

        for (let i = 0; i < 14; i++) {
            const d = new Date();
            d.setDate(today.getDate() + i);

            result.push({
                id: i.toString(),
                day: d.toLocaleDateString("en-US", { weekday: "short" }),
                date: d.getDate(),
                isToday: i === 0,
            });
        }

        return result;
    }, []);

    const [prevSelected, setPrevSelected] = useState(false);
    const [nextSelected, setNextSelected] = useState(false);
    const [sidebarSelected, setSidebarSelected] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            {
                false && <Sidebar />
            }

            <View style={styles.mainBox}>
                {/* Top Bar */}
                <View style={styles.topBox}>
                    <TouchableOpacity style={styles.leftTop}
                        onPress={() => setSidebarSelected(true)}>
                        <Ionicons name="menu" size={22} color="white" />
                        <Text style={styles.mainTitle}>Today</Text>
                    </TouchableOpacity>

                    <View style={styles.rightTop}>
                        <Feather name="search" size={24} color="white" />
                        <Feather name="calendar" size={23} color="white" />
                        <FontAwesome name="star" size={24} color="yellow" />
                        <Entypo name="dots-three-vertical" size={22} color="white" />
                    </View>
                </View>

                {/* Horizontal Date Slider */}
                <View style={styles.movingBox}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContent}
                    >
                        {days.map((item, index) => (
                            <Pressable
                                key={item.id}
                                onPress={() => setSelectedIndex(index)}
                                style={[
                                    styles.indiBox,
                                    index === selectedIndex && styles.activeBox,
                                ]}
                            >
                                <View style={styles.movTopBox}>
                                    <Text
                                        style={[
                                            styles.dayText,
                                            index === selectedIndex && styles.activeText,
                                        ]}
                                    >
                                        {item.day}
                                    </Text>
                                </View>

                                <View style={styles.movBottomBox}>
                                    <Text
                                        style={[
                                            styles.dateText,
                                            index === selectedIndex && styles.activeText,
                                        ]}
                                    >
                                        {item.date}
                                    </Text>
                                </View>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>

                {/* Today Task */}

                <TaskBox/>

               


                {/* Previous Task */}


                <View style={styles.todayBox}>
                    <TouchableOpacity activeOpacity={0.85}
                        style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                        onPress={() => {
                            setPrevSelected(!prevSelected);
                        }}
                    >
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Previous</Text>

                        {
                            prevSelected ? (
                                <MaterialIcons name="arrow-drop-up" size={24} color="white" style={{ marginTop: 2 }} />
                            ) : (
                                <MaterialIcons name="arrow-drop-down" size={24} color="white" style={{ marginTop: 2 }} />
                            )
                        }

                    </TouchableOpacity>
                </View>

                {
                    prevSelected && (
                        <>
                            <View style={styles.taskBox}>
                                <View style={styles.categoryBox}>
                                    <Feather name="clock" size={20} color="white" />
                                </View>
                                <View>
                                    <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>All Machine Learning Done Today</Text>
                                    <View style={{ flexDirection: "row", gap: 3 }}>
                                        <View style={styles.bottomTaskBox} >
                                            <Text style={{ color: "white", fontSize: 10 }}>Task</Text>
                                        </View>
                                        <View style={styles.bottomTaskBox}>
                                            <Feather name="repeat" size={10} color="black" />                                </View>
                                    </View>
                                </View>
                                <View style={styles.circleBox}>

                                </View>

                            </View>


                            <View style={styles.taskBox}>
                                <View style={styles.categoryBox}>
                                    <Feather name="clock" size={20} color="white" />
                                </View>
                                <View>
                                    <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>All Machine Learning Done Today</Text>
                                    <View style={{ flexDirection: "row", gap: 3 }}>
                                        <View style={styles.bottomTaskBox} >
                                            <Text style={{ color: "white", fontSize: 10 }}>Task</Text>
                                        </View>
                                        <View style={styles.bottomTaskBox}>
                                            <Feather name="repeat" size={10} color="black" />                                </View>
                                    </View>
                                </View>
                                <View style={styles.circleBox}>

                                </View>

                            </View>

                        </>
                    )
                }

            </View>
        </SafeAreaView>
    );
};

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(40, 41, 41, 1)",
    },
    todayBox: {
        marginTop: 10,
        paddingVertical: 10
    },
    bottomTaskBox: {
        paddingHorizontal: 6,
        paddingVertical: 1,
        backgroundColor: "red",
        borderRadius: 3,
        alignContent: "center",
        justifyContent: "center"
    },
    categoryBox: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginTop: 4,
        backgroundColor: "red",
        borderRadius: 10

    },

    circleBox: {
        width: 22,
        height: 22,
        borderRadius: 100,
        backgroundColor: "red",
        marginLeft: 'auto',

    },
    prevBox: {

    },
    taskBox: {
        flexDirection: "row",
        gap: 10,
        borderBottomColor: "rgba(55, 55, 55, 1)",
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 4

    },

    mainBox: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },

    topBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    leftTop: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    rightTop: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },

    mainTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "800",
    },

    movingBox: {
        marginTop: 10,
    },

    scrollContent: {
        gap: 12,
    },

    indiBox: {
        width: 56,
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "#2a2a2a",
    },

    movTopBox: {
        backgroundColor: "#FFD700",
        paddingVertical: 6,
        alignItems: "center",
    },

    movBottomBox: {
        backgroundColor: "#E11D48",
        paddingVertical: 8,
        alignItems: "center",
    },

    dayText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#111",
    },

    dateText: {
        fontSize: 18,
        fontWeight: "800",
        color: "white",
    },

    activeBox: {
        transform: [{ scale: 1.08 }],
    },

    activeText: {
        color: "white",
    },
});
