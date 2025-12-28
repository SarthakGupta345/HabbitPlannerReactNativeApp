import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Foundation from "@expo/vector-icons/Foundation";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from "@/src/Constants/Colors/Colors";
import { styles } from "@/src/Styles/Task/subTask";
import SubTask from "@/src/Components/Task/SubTask";
import Category from "@/src/Styles/Task/Category";
import Date from "@/src/Styles/Task/Date";
import Reminder from "@/src/Styles/Task/Reminder";
import Priority from "@/src/Styles/Task/Priority";
import Notes from "@/src/Styles/Task/Notes";
import Attachment from "@/src/Styles/Task/Attachment";
import PendingTask from "@/src/Styles/Task/PendingTask";
import Footer from "@/src/Styles/Task/Footer";



const CreateTask = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: COLORS.background }]}>
            <ScrollView
                contentContainerStyle={styles.mainBox}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.mainBox}>

                    {/* Header */}
                    <View style={styles.header}>
                        <Feather name="arrow-left" size={28} color="white" />
                        <View style={styles.taskBox}>
                            <Text style={styles.headerTitle}>New Task</Text>
                        </View>
                    </View>

                    {/* Task Name */}
                    <View style={styles.indiBox}>
                        <Text style={styles.label}>Task name</Text>
                        <View style={[styles.taskInputBox, { borderColor: COLORS.border }]}>
                            <TextInput
                                placeholder="Enter Task Name"
                                placeholderTextColor={COLORS.mutedText}
                                style={styles.input}
                            />
                        </View>
                    </View>

                    {/* Subtask */}
                    <SubTask />

                    {/* Category */}
                    <Category />

                    {/* Date */}
                    <Date />

                    {/* Reminder */}
                    <Reminder />

                    {/* Priority */}
                    <Priority />

                    {/* Pending Task */}
                    <PendingTask />

                    {/* Notes */}
                    <Notes />

                    {/* Attachment */}
                    <Attachment />



                    <Footer />

                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateTask;

