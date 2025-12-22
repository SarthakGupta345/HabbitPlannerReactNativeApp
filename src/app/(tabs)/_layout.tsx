import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" options={{ headerShown: false }} />
            <Tabs.Screen name="task" options={{ title: 'Task' }} />
            <Tabs.Screen name="habits" options={{ title: 'Habits' }} />
            <Tabs.Screen name="timer" options={{ title: 'Timer' }} />
            <Tabs.Screen name="calendar" options={{ title: 'Calendar' }} />
        </Tabs>
    )
}

export default TabsLayout