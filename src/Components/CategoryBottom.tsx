import React, { useEffect, useRef } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
    View,
    Text,
    Modal,
    Animated,
    StyleSheet,
    TouchableWithoutFeedback,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const NoCategoryBottomSheet = ({ visible, onClose }: {
    visible: boolean,
    onClose: () => void
}) => {
    const slideAnim = useRef(new Animated.Value(300)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 500,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visible]);

    return (
        <Modal transparent visible={visible} animationType="none">
            {/* Backdrop */}
            <TouchableWithoutFeedback onPress={onClose}>
                <Animated.View
                    style={[styles.backdrop, { opacity: opacityAnim }]}
                />
            </TouchableWithoutFeedback>

            {/* Bottom Sheet */}
            <Animated.View
                style={[
                    styles.sheet,
                    { transform: [{ translateY: slideAnim }] },
                ]}
            >
                <View>
                    <View style={styles.colBox}>
                        <Text style={styles.text}>No Category</Text>
                        <View style={{ backgroundColor: "red", width: 35, height: 35, borderRadius: 10, alignContent: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="widgets" size={22} color="black" style={{ marginLeft: 6 }} />
                        </View>
                    </View>

                    <View style={styles.colBox}>
                        <FontAwesome5 name="pen" size={20} color="white" />
                        <Text style={styles.text}>Category Name</Text>

                    </View>
                </View>
            </Animated.View>
        </Modal>
    );
};

export default NoCategoryBottomSheet;


const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)", // dim background
    },
    sheet: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 300,
        paddingVertical: 1,
        backgroundColor: "#1e1e1e",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    colBox: {
        borderBottomColor: "rgba(55, 55, 55, 1)",
        borderBottomWidth: 1,
        paddingBottom: 20,
        flexDirection: "row",
        paddingVertical: 15,
        gap: 10,
        alignItems: "center",
        paddingHorizontal: 15

    },
    text: {
        color: "white",
        fontSize: 15,
        fontWeight: "600"
    }

});
