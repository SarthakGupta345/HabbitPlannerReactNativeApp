import { View, Text, StyleSheet, Modal, Pressable, Dimensions } from "react-native";
import { BlurView } from "expo-blur";

const { height } = Dimensions.get("window");
const onClose = false;
const BottomModal = () => {
    return (
        <Modal
            visible={true}
            transparent
            animationType="slide"
            statusBarTranslucent
        >
            {/* Blurred Background */}
            <Pressable style={styles.overlay} >
                <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
            </Pressable>

            {/* Bottom Sheet */}
            <View style={styles.sheet}>
                <View style={styles.handle} />

                <Text style={styles.title}>Image</Text>
                <Text style={styles.item}>Image</Text>
                <Text style={styles.item}>Image</Text>
            </View>
        </Modal>
    );
};

export default BottomModal;


const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        position:"absolute"
    },

    sheet: {
        height: height * 0.2, // ✅ 20% of screen
        backgroundColor: "#1e1f1e",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
    },

    handle: {
        width: 40,
        height: 4,
        backgroundColor: "#555",
        borderRadius: 2,
        alignSelf: "center",
        marginBottom: 10,
    },

    title: {
        color: "white",
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 10,
    },

    item: {
        color: "white",
        fontSize: 14,
        paddingVertical: 6,
    },
});
