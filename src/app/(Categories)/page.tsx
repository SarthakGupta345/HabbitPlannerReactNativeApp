import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import TaskBox from '@/src/Components/Task';
import NoCategoryBottomSheet from '@/src/Components/CategoryBottom';
const Category = [
    {
        id: 1,
        name: "Home",
        icon: <FontAwesome5 name="paint-brush" size={30} color="black" />,
        bgColor: "red",
        entries: 3
    }, {
        id: 2,
        name: "Task",
        icon: <FontAwesome5 name="paint-brush" size={30} color="black" />,
        bgColor: "yellow",
        entries: 4
    }, {
        id: 3,
        name: "Work",
        icon: <FontAwesome5 name="paint-brush" size={30} color="black" />,
        bgColor: "green",
        entries: 5
    }, {
        id: 4,
        name: "Home",
        icon: <FontAwesome5 name="paint-brush" size={30} color="black" />,
        bgColor: "red",
        entries: 3
    }, {
        id: 5,
        name: "Task",
        icon: <FontAwesome5 name="paint-brush" size={30} color="black" />,
        bgColor: "yellow",
        entries: 4
    }, {
        id: 6,
        name: "Work",
        icon: <FontAwesome5 name="paint-brush" size={30} color="black" />,
        bgColor: "green",
        entries: 5
    }
]
const CategoryPage = () => {
    const [type, setType] = useState<string>("Default")
    const [selected, setSelected] = useState<number>(0)
    const [click, setClick] = useState<boolean>(false)
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.topBox}>
                <Feather name="arrow-left" size={24} color="white" />
                <Text style={{ fontWeight: "700", fontSize: 18, color: "white" }}>Categories</Text>
            </View>



            <View style={styles.midBox}>
                <Text style={{
                    fontWeight: "700",
                    fontSize: 15,
                    marginLeft: 5,
                    color: "white"
                }}>{type == "Default" ? "Default" : "Custom"}</Text>
                <TouchableOpacity activeOpacity={0.5}
                    onPress={() => {
                        setType(type == "Default" ? "Custom" : "Default")

                    }}
                >
                    <MaterialCommunityIcons name="swap-vertical" size={22} color="white" />
                </TouchableOpacity>
            </View>

            {
                type == "Default" ? (
                    <View style={styles.categoryBox}>
                        <ScrollView contentContainerStyle={{}} horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{ alignContent: "center", justifyContent: "center", flexDirection: "row", gap: 15 }}>

                                {
                                    Category.map((item, index) => (
                                        <TouchableOpacity style={styles.indiBox} key={index} activeOpacity={0.8}
                                            onPress={() => {
                                                setSelected(item.id)
                                            }}
                                        >
                                            <View style={[styles.box, { backgroundColor: item.bgColor }]}>
                                                {item.icon}
                                            </View>
                                            <Text style={[styles.text, { marginLeft: 14 }]}>{item.name}</Text>
                                            <Text style={{ color: "rgba(158, 156, 158, 1)", marginLeft: 6, fontSize: 13 }}>{item.entries} entries</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>

                        </ScrollView>

                    </View>
                ) : (
                    <View style={styles.categoryBox}>
                        <ScrollView contentContainerStyle={{}} horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{ alignContent: "center", justifyContent: "center", flexDirection: "row", gap: 15 }}>

                                {
                                    true && <View>
                                        <Text style={{ color: "white" }}>No Custom Categories</Text>
                                    </View>
                                }
                            </View>

                        </ScrollView>

                    </View>

                )
            }

            <View style={{ marginTop: 5 }}>
                <TaskBox />
                <TaskBox />
                <TaskBox />
                <TaskBox />
            </View>


            <NoCategoryBottomSheet
                visible={true}
                onClose={() => setClick(false)}
            />;


            <TouchableOpacity style={styles.bottomBox} activeOpacity={0.9}>
                <Text style={{
                    color: "black", fontSize: 17, fontWeight: "700", marginLeft: "30%"
                }}>NEW CATEGORY</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default CategoryPage


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    indiBox: {

    },

    text: {
        color: "white",
        fontSize: 14,
        fontWeight: "700"
    },

    box: {
        height: 70,
        width: 70,
        backgroundColor: "red",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },

    categoryBox: {

        paddingHorizontal: 15,
        borderBottomColor: "rgba(35, 35, 36, 1)",
        paddingBottom: 20,
        borderBottomWidth: 1,
        paddingVertical: 10
    },
    midBox: {
        paddingHorizontal: 15,
        paddingBottom: 5,
        justifyContent: "space-between",
        paddingVertical: 10,
        flexDirection: "row",

    },
    topBox: {
        height: 50,
        paddingVertical: 4,
        paddingHorizontal: 5,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(35, 35, 35, 1)",
        paddingBottom: 6,
        flexDirection: "row",
        gap: 15
    },
    bottomBox: {
        backgroundColor: "rgba(117, 11, 55, 1)",
        width: "90%",
        paddingVertical: 16,
        borderRadius: 15,
        alignSelf: "center",
        alignContent: "center",
        textAlign: "center",
        justifyContent: "center",
        marginTop: "auto",
        marginBottom: 12
    }
})