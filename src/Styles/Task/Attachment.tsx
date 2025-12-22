import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import { styles } from './subTask'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import BottomModal from '@/src/Components/BottomView'

const Attachment = () => {
    const [selected, setSelected] = React.useState(false);

    return (
        <>
            <TouchableOpacity style={styles.indColumnBox} activeOpacity={0.85}
                onPress={() => {
                    setSelected(true)
                }}
            >
                <View style={styles.row}>
                    <FontAwesome6 name="paperclip" size={30} color="orange" />
                    <Text style={styles.text}>Attachment</Text>
                </View>

                <View style={styles.todayBox}>
                    <Text style={styles.todayText}>None</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default Attachment