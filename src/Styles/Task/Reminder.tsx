import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './subTask'
import Ionicons from '@expo/vector-icons/Ionicons'

const Reminder = () => {
    return (
        <>
            <View style={styles.indColumnBox}>
                <View style={styles.row}>
                    <Ionicons name="notifications" size={24} color="orange" />
                    <Text style={styles.text}>Reminder</Text>
                </View>

                <View style={styles.todayBox}>
                    <Text style={styles.todayText}>None</Text>
                </View>
            </View>
        </>
    )
}

export default Reminder