import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './subTask'
import Foundation from '@expo/vector-icons/Foundation'
import { router } from 'expo-router'

const Notes = () => {
    return (
        <>
            <TouchableOpacity style={styles.indColumnBox} activeOpacity={0.85}
                onPress={() => {
                    router.push('/(task)/notes')
                }}
            >
                <View style={styles.row}>
                    <Foundation name="clipboard-notes" size={30} color="orange" />
                    <Text style={styles.text}>Notes</Text>
                </View>

                <View style={styles.todayBox}>
                    <Text style={styles.todayText}>None</Text>
                </View>
            </TouchableOpacity></>
    )
}

export default Notes