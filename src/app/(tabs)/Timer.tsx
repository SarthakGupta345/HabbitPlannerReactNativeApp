import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '@/src/Components/Timer/TopBar'
import MiddleBar from '@/src/Components/Timer/Middlebar'
import Records from '@/src/Components/Timer/Records'
import Footer from '@/src/Components/Timer/Footer'
import CountDown from '@/src/Components/Timer/CountDown'

const Timer = () => {
  return (
   <SafeAreaView style={styles.container}>
    <TopBar/>
    <CountDown/>
    <MiddleBar/>
    <Records/>

   </SafeAreaView>
  )
}

export default Timer

const styles = StyleSheet.create({
  container:{
      flex:1,
      flexDirection:"column",
      gap:20,
      height:"100%",
      width:"100%",
      backgroundColor:"black"
  }
})