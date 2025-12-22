import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './subTask'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const Date = () => {
    return (
        <>
            <View style={styles.indColumnBox}>
                <View style={styles.row}>
                    <MaterialIcons name="now-widgets" size={24} color="orange" />
                    <Text style={styles.text}>Date</Text>
                </View>

                <View style={styles.todayBox}>
                    <Text style={styles.todayText}>Today</Text>
                </View>
            </View>
        </>
    )
}

export default Date