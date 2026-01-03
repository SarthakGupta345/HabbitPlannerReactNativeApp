import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#dc2525ff",
                tabBarInactiveTintColor: "#9CA3AF",
                tabBarShowLabel: false,

                tabBarStyle: {
                    backgroundColor: "rgba(10, 10, 10, 1)",
                    paddingVertical: 10,
                    height: 75,
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="task"
                options={{
                    title: "Task",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "checkmark-circle" : "checkmark-circle-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="habits"
                options={{
                    title: "Habits",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "repeat" : "repeat-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="timer"
                options={{
                    title: "Timer",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "timer" : "timer-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="project"
                options={{
                    title: "Project",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "folder" : "folder-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
