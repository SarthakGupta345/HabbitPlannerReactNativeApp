import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { router } from 'expo-router'
import Feather from '@expo/vector-icons/Feather'

const TaskBox = () => {
    return (
        <View style={styles.todayBox}>
            {/* <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Today</Text>
                <MaterialIcons name="arrow-drop-down" size={24} color="white" style={{ marginTop: 2 }} />
            </View> */}

            <TouchableOpacity style={styles.taskBox} activeOpacity={0.85}
                onPress={() => {
                    router.push('/(task)/EditTask')
                }}
            >
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

            </TouchableOpacity>



        </View>
    )
}

export default TaskBox

const styles = StyleSheet.create({
    categoryBox: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: "red",
        borderRadius: 10

    },

    todayBox: {
        marginTop: 1,
        paddingVertical: 3,
        
    },
    bottomTaskBox: {
        paddingHorizontal: 6,
        paddingVertical: 1,
        backgroundColor: "red",
        borderRadius: 3,
    },
    taskBox: {
        flexDirection: "row",
        gap: 10,
        borderBottomColor: "rgba(55, 55, 55, 1)",
        borderBottomWidth: 1,
        paddingVertical: 13,
        paddingHorizontal: 12

    },
    circleBox: {
        width: 22,
        height: 22,
        borderRadius: 100,
        backgroundColor: "red",
        marginLeft: 'auto',

    },

})