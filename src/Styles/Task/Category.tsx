import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './subTask'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { COLORS } from '@/src/Constants/Colors/Colors'

const Category = () => {
    return (
        <>
            <View style={styles.indColumnBox}>
                <View style={styles.row}>
                    <MaterialIcons name="now-widgets" size={24} color="orange" />
                    <Text style={styles.text}>Category</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.accentText}>Task</Text>
                    <MaterialIcons name="task" size={35} color={COLORS.accent} />
                    <MaterialIcons name="arrow-drop-down" size={24} color="white" />
                </View>
            </View>
        </>
    )
}

export default Category