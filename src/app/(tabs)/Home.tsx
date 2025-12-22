import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Sidebar from '@/src/Components/SidebarMain'
import SidebarMain from '@/src/Components/SidebarMain'

const Home = () => {
  return (
   <SafeAreaView style={styles.container}>
    <SidebarMain/>

   </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1
    }

})
