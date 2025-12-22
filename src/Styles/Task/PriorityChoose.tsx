import {
  View,
  Text,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

const MAX_PRIORITY = 10;
const MIN_PRIORITY = 0;


const PriorityChoose = ({ count, onClose }: { count: number, onClose: () => void }) => {
  const [priority, setPriority] = useState<number>(count);
  const [selected, setSelected] = useState<boolean>(false);

  if (selected) {
    onClose();
  }

  return (
    <View style={styles.overlay}>
      {/* Dim background */}

      <Pressable style={styles.backdrop} onPress={onClose} />

      {/* Keyboard-aware container */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardWrapper}
      >
        <View style={styles.box}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>Choose Priority</Text>

          </View>

          {/* Priority selector */}
          <View style={styles.priorityBox}>
            <TouchableOpacity
              style={styles.minusBox}
              activeOpacity={0.8}
              onPress={() =>
                setPriority((p) => Math.max(MIN_PRIORITY, p - 1))
              }
            >
              <AntDesign name="minus" size={22} color="white" />
            </TouchableOpacity>

            <View style={styles.textBox}>
              <Text style={styles.item}>{priority}</Text>
            </View>

            <TouchableOpacity
              style={styles.plusBox}
              activeOpacity={0.8}
              onPress={() =>
                setPriority((p) => Math.min(MAX_PRIORITY, p + 1))
              }
            >
              <AntDesign name="plus" size={22} color="white" />
            </TouchableOpacity>
          </View>

          {/* Default */}
          <View style={styles.defaultBox}>
            <Text style={styles.defaultText}>Default &nbsp; -1</Text>
            <Ionicons name="flag" size={18} color="orange" style={{
              marginTop: 3
            }} />
          </View>

          {/* Info */}
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Higher priority will be displayed higher in task list
            </Text>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Pressable onPress={onClose} style={styles.footerBtn}
              onPressIn={() => {
                setSelected(true)
              }}
            >
              <Text style={styles.CancelButtonText}>CLOSE</Text>
            </Pressable>

            <Pressable style={styles.footerBtn}
              onPress={() => {
                count = priority
                setSelected(true)
              }}
            >
              <Text style={styles.DoneButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PriorityChoose;


const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  titleBox: {
    alignItems: "center",
    paddingBottom: 10,
    marginBottom: 15,
    borderBottomColor: "rgba(46, 46, 45, 1)",
    borderBottomWidth: 1
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  keyboardWrapper: {
    width: "100%",
    alignItems: "center",
  },

  box: {
    width: "80%",
    backgroundColor: "#1e1f1e",
    borderRadius: 17,
    paddingVertical: 16,
  },

  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 14,
    textAlign: "center",
  },

  priorityBox: {
    flexDirection: "row",
    backgroundColor: "rgba(38, 38, 37, 1)",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    marginLeft: 40,
    marginRight: 40,
    borderColor: "white",
    overflow: "hidden",
    marginBottom: 12,
  },

  minusBox: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "rgba(92, 92, 90, 1)",
    paddingVertical: 15,
  },

  textBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "rgba(92, 92, 90, 1)",
  },

  plusBox: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },

  item: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },

  defaultBox: {
    alignSelf: "center",
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginVertical: 10,
    flexDirection: "row"
  },

  defaultText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  infoBox: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(46, 46, 45, 1)",
    paddingVertical: 10,
    marginBottom: 14,
  },

  infoText: {
    color: "white",
    textAlign: "center",
    flexWrap: "wrap",
    width: "85%",
    marginLeft: 15,
    fontSize: 13,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  footerBtn: {
    flex: 1,
    alignItems: "center",
  },

  CancelButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "red",
  },

  DoneButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "orange",
  },
});
