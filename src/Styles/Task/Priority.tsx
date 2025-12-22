import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './subTask'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import PriorityChoose from './PriorityChoose'

const Priority = () => {
    const [selected, setSelected] = React.useState(true);
    const [count, setCount] = React.useState(1);
    if (selected) {
        return (
            <PriorityChoose count={count} onClose={() => setSelected(false)} />
        )
    }
    return (
        <>
            <TouchableOpacity style={styles.indColumnBox}
                activeOpacity={0.85}
                onPress={() => {
                    setSelected(true)
                }}
            >
                <View style={styles.row}>
                    <MaterialCommunityIcons name="priority-high" size={30} color="orange" />
                    <Text style={styles.text}>Priority</Text>
                </View>

                <View style={styles.roundBox}>
                    <Text style={styles.todayText}>{count}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default Priority