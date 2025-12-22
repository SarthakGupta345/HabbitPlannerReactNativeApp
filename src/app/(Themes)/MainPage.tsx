import { View, Text, StyleSheet, Pressable, ScrollView, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { Image } from "expo-image";
import Entypo from '@expo/vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';
import { bgImages } from "@/src/Constants/bgImages";
import { accentColors } from "@/src/Constants/Colors/Colors";
import { router } from "expo-router";


const ThemesPage = () => {
    const [image, setImage] = useState<string | null>(null);

    const handleImageSubmit = async () => {

        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert('Permission required', 'Permission to access the media library is required.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.mainBox}>


                {/* Header */}
                <View style={styles.header}>
                    <Pressable hitSlop={10} onPress={() => { router.back() }}>
                        <Feather name="arrow-left" size={24} color="white" />
                    </Pressable>
                    <Text style={styles.headerText}>Themes & Wallpapers</Text>
                </View>

                {/* Accent Colors */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Accent Colors</Text>
                    <View style={styles.colorRow}>
                        {accentColors.map(item => (
                            <Pressable
                                key={item.id}
                                style={[styles.colorBox, { backgroundColor: item.color }]}
                            >
                                <Feather name="check" size={30} color="white" style={{ marginLeft: 10 }} />
                            </Pressable>
                        ))}
                    </View>
                </View>

                {/* Themes */}
                <View style={styles.lineBox}>
                    <Text style={styles.sectionTitle}>Theme</Text>
                    <Text style={{ color: "gray", fontSize: 16, fontWeight: "500" }}>Dark</Text>
                </View>


                {/* Icons */}
                <View style={styles.lineBox}>
                    <Text style={styles.sectionTitle}>Category Icons </Text>
                    <Text style={{ color: "gray", fontSize: 16, fontWeight: "500" }}>Dark</Text>
                </View>

                {/* Backgrounds */}
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { marginTop: 10, marginBottom: 10 }]}>Backgrounds</Text>
                    <View style={styles.imageGrid}>
                        {bgImages.map(item => (
                            <Image
                                key={item.id}
                                source={item.link}
                                style={styles.backgroundImage}
                                contentFit="cover"
                                transition={200}
                            />


                        ))}
                        {
                            image && (
                                <Image
                                    source={{ uri: image }}
                                    style={styles.backgroundImage}
                                    contentFit="cover"
                                    transition={200}
                                />
                            )
                        }
                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", marginLeft: 40, marginTop: 10 }} activeOpacity={0.85}
                            onPress={handleImageSubmit}
                        >
                            <Entypo name="plus" size={50} color="white" />
                            <Text style={{ color: "white" }}>Choose Image</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default ThemesPage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191818ff",
    },

    mainBox: {
        paddingVertical: 10,
        paddingBottom: 20
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        marginBottom: 20,
        paddingHorizontal: 15
    },

    lineBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopColor: "rgba(41, 42, 41, 1)",
        borderTopWidth: 0.5,
        borderBottomColor: "rgba(41, 42, 41, 1)",
        borderBottomWidth: 0.5,
        paddingVertical: 13,
        borderColor: "white",
        paddingHorizontal: 15
    },

    headerText: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fbf7f7ff",

    },

    section: {
        marginBottom: 24,
        marginTop: 10,
        paddingHorizontal: 15
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
        color: "#fbf8f8ff",
    },

    colorRow: {
        flexDirection: "row",
        gap: 10,
        flexWrap: "wrap",
    },

    colorBox: {
        width: 50,
        height: 50,
        borderRadius: 100,
        alignContent: "center",
        justifyContent: "center"
    },

    imageGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },

    backgroundImage: {
        width: 190,
        height: 130,
        borderRadius: 12,
        opacity: 0.9,
    },
});
