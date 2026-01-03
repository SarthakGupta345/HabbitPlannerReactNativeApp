import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Project = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text>5 Ai Projects
        </Text>
      </View>


    </SafeAreaView>
  )
}

export default Project

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    backgroundColor: "red",
    width: "95%",
    height: "10%",
    alignSelf: "center",
    borderRadius: 10

  }
})