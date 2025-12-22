import Sidebar from "@/src/Components/sidebar";
import React, { useCallback, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* -------------------------------------------------------------------------- */
/*                                   CONSTS                                   */
/* -------------------------------------------------------------------------- */


const COLORS = {
    bg: "#000000",
    card: "#1a1a1a",
    primary: "#1e90ff",
    text: "#ffffff",
    muted: "#808080",
};

const DATES = [
    { day: "Wed", date: 17 },
    { day: "Thu", date: 18 },
    { day: "Fri", date: 19 },
    { day: "Sat", date: 20 },
    { day: "Sun", date: 21 },
    { day: "Mon", date: 22 },
    { day: "Tue", date: 23 },
    { day: "Wed", date: 24 },
    { day: "Thu", date: 25 },
];

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

const TodayScreen = () => {
    const [sidebarSelected, setSidebarSelected] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState(21);

    const renderDateItem = useCallback(
        ({ item }: { item: { day: string; date: number } }) => {
            const isActive = selectedDate === item.date;

            return (
                <TouchableOpacity
                    accessibilityRole="button"
                    onPress={() => setSelectedDate(item.date)}
                    style={[styles.dateItem, isActive && styles.dateItemActive]}
                >
                    <Text style={[styles.dayText, isActive && styles.dayTextActive]}>
                        {item.day}
                    </Text>
                    <Text style={[styles.dateText, isActive && styles.dateTextActive]}>
                        {item.date}
                    </Text>
                </TouchableOpacity>
            );
        },
        [selectedDate]
    );

    // TODO:
    return (
        <SafeAreaView style={styles.container}>
            {/* -------------------------------- HEADER -------------------------------- */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Pressable style={styles.menuIcon}
                        onPress={() => {
                            setSidebarSelected(true);
                        }}
                    >
                        <View style={styles.menuLine} />
                        <View style={styles.menuLine} />
                        <View style={styles.menuLine} />
                    </Pressable>
                    <Text style={styles.headerTitle}>Today</Text>
                </View>

                <View style={styles.headerRight}>
                    {["🔍", "☰", "📅", "❓"].map((icon, i) => (
                        <TouchableOpacity key={i} style={styles.iconButton}>
                            <Text style={styles.iconText}>{icon}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {
                true && <Sidebar/>
            }

            {/* ----------------------------- DATE SLIDER ------------------------------ */}
            <FlatList
                horizontal
                data={DATES}
                keyExtractor={(item) => item.date.toString()}
                renderItem={renderDateItem}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.dateSliderContent}
                style={styles.dateSlider}
            />

            {/* ------------------------------ EMPTY STATE ------------------------------ */}
            <View style={styles.emptyState}>
                <View style={styles.emptyIconContainer}>
                    <Text style={styles.calendarEmoji}>📅</Text>
                    <View style={styles.plusBadge}>
                        <Text style={styles.plusText}>+</Text>
                    </View>
                </View>

                <Text style={styles.emptyTitle}>No activities scheduled</Text>
                <Text style={styles.emptySubtitle}>
                    Add something to plan your day
                </Text>
            </View>

            {/* -------------------------- FLOATING ACTION BTN -------------------------- */}
            <TouchableOpacity
                accessibilityRole="button"
                style={styles.fab}
                onPress={() => console.log("Add new task")}
            >
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default TodayScreen;

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
    },

    /* Header */
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    menuIcon: {
        width: 24,
        justifyContent: "center",
        gap: 4,
    },
    menuLine: {
        width: 20,
        height: 3,
        backgroundColor: COLORS.primary,
        borderRadius: 2,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: COLORS.text,
    },
    headerRight: {
        flexDirection: "row",
        gap: 12,
    },
    iconButton: {
        width: 32,
        height: 32,
        justifyContent: "center",
    },
    iconText: {
        fontSize: 20,
    },

    /* Date Slider */
    dateSlider: {
        marginTop: 12,
        marginBottom: 20,
    },
    dateSliderContent: {
        paddingHorizontal: 12,
        gap: 10,
        alignItems: "center",
    },
    dateItem: {
        width: 64,
        paddingVertical: 12,
        backgroundColor: COLORS.card,
        borderRadius: 20,
        alignItems: "center",
    },
    dateItemActive: {
        backgroundColor: COLORS.primary,
    },
    dayText: {
        fontSize: 12,
        color: COLORS.muted,
        marginBottom: 4,
        fontWeight: "500",
    },
    dayTextActive: {
        color: COLORS.text,
    },
    dateText: {
        fontSize: 20,
        color: COLORS.text,
        fontWeight: "600",
    },
    dateTextActive: {
        fontWeight: "700",
    },

    /* Empty */
    emptyState: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 100,
    },
    emptyIconContainer: {
        position: "relative",
        marginBottom: 24,
    },
    calendarEmoji: {
        fontSize: 100,
    },
    plusBadge: {
        position: "absolute",
        bottom: 0,
        right: -10,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    plusText: {
        color: COLORS.text,
        fontSize: 24,
        fontWeight: "600",
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: COLORS.text,
        marginBottom: 8,
    },
    emptySubtitle: {
        fontSize: 14,
        color: COLORS.muted,
    },

    /* FAB */
    fab: {
        position: "absolute",
        bottom: 100,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: 16,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8,
    },
    fabText: {
        color: COLORS.text,
        fontSize: 32,
        fontWeight: "300",
    },
});
