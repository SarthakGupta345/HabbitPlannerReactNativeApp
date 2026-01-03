import React, { useEffect, useRef } from 'react'
import { Animated, Text, View } from 'react-native'

const AnimatedDigit = ({ value, style }: { value: string; style: any }) => {
    const translateY = useRef(new Animated.Value(0)).current
    const prevValue = useRef(value)

    useEffect(() => {
        if (prevValue.current !== value) {
            translateY.setValue(-20)

            Animated.timing(translateY, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start()

            prevValue.current = value
        }
    }, [value])

    return (
        <Animated.View style={{ transform: [{ translateY }] }}>
            <Text style={style}>{value}</Text>
        </Animated.View>
    )
}

export default AnimatedDigit
