import { COLORS } from "@/src/Constants/Colors/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1 },

    mainBox: { paddingVertical: 10 },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        alignItems: "center",
    },
    checkBox: {

    },

    headerTitle: {
        color: "white",
        fontWeight: "700",
        fontSize: 14,
    },

    taskBox: {
        backgroundColor: "gray",
        padding: 10,
        width: 90,
        borderRadius: 4,
        alignItems: "center",
    },

    indiBox: {
        marginTop: 10,
        gap: 6,
        borderBottomColor: COLORS.divider,
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        paddingBottom: 20,
    },

    label: {
        color: "white",
        fontSize: 15,
        fontWeight: "700",
    },

    taskInputBox: {
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderWidth: 1.5,
        borderRadius: 10,
    },

    input: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },

    subTaskColumn: {
        borderBottomColor: COLORS.divider,
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        paddingBottom: 20,
        gap: 6,
    },

    subTaskHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 7,
        marginLeft: 7
    },

    subTaskInput: {
        paddingHorizontal: 10,
        width: 320,
        marginLeft: 10,
        paddingVertical: 2,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "rgba(227, 176, 11, 0.53)",
    },

    subTaskBox: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        width: 220,
        gap: 4
    },

    addIcon: { marginTop: 4, marginLeft: 5 },

    indColumnBox: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: COLORS.divider,
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        paddingBottom: 15,
    },

    row: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
    },

    text: {
        color: "white",
        fontSize: 14,
        fontWeight: "500",
    },

    accentText: {
        color: COLORS.accent, // ✅ FIXED
        fontSize: 15,
        fontWeight: "700",
    },

    todayBox: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: COLORS.boxBg,
        borderRadius: 7,
    },

    todayText: {
        color: "orange",
        fontSize: 15,
        fontWeight: "700",
    },

    roundBox: {
        borderRadius: 100,
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: "gray",
        marginRight: 15
    },

    helperText: {
        color: "gray",
        fontSize: 12,
        marginTop: 3,
    },
});
