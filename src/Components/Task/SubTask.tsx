import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import { styles } from '@/src/Styles/Task/subTask'
import { COLORS } from '@/src/Constants/Colors/Colors'

const SubTask = () => {
    const [subTaskSelected, setSubTaskSelected] = React.useState<boolean>(false)

    return (
        <View style={styles.subTaskColumn}>
            <TouchableOpacity style={styles.subTaskHeader} activeOpacity={0.85}
                onPress={() => {
                    setSubTaskSelected(true)
                }}
            >
                <Text style={styles.text}>Subtask</Text>
                {
                    subTaskSelected ? (
                        <MaterialIcons name="arrow-drop-down" size={24} color="white" />

                    ) : (
                        <MaterialIcons name="arrow-drop-up" size={24} color="white" />
                    )
                }
            </TouchableOpacity>

            {
                subTaskSelected && (
                    <>
                        <View style={[styles.subTaskBox, { borderColor: COLORS.border }]}>
                            <AntDesign name="check-circle" size={24} color="white" style={{ marginTop: 13 }} />
                            <View style={styles.subTaskInput}>
                                <TextInput
                                    placeholder="Enter Subtask"
                                    placeholderTextColor={COLORS.mutedText}
                                    style={styles.input}
                                />

                            </View>
                            <MaterialIcons name="drag-indicator" size={32} color="gray" style={{ marginLeft: "auto", marginTop: 10, marginRight: 10 }} />
                        </View>

                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 5 }}>
                            <Entypo
                                name="circle-with-plus"
                                size={24}
                                color="orange"
                                style={styles.addIcon}
                            />

                            <Text style={{ color: "orange", marginLeft: 10 }}>Add Subtask</Text>
                        </View>
                    </>
                )
            }
        </View>
    )
}

export default SubTask


