import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './subTask'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const PendingTask = () => {
  return (
    <>
    <View style={styles.indColumnBox}>
                            <View style={styles.row}>
                                <FontAwesome name="calendar-times-o" size={27} color="orange" />
                                <View>
                                    <Text style={styles.text}>Pending Task</Text>
                                    <Text style={styles.helperText}>
                                        It will show in Pending Task until completed
                                    </Text>
                                </View>
                            </View>
    
                            <MaterialCommunityIcons
                                name="checkbox-marked-circle"
                                size={34}
                                color="orange"
                            />
                        </View>
    </>
  )
}

export default PendingTask