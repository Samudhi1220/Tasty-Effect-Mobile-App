import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Home = () =>{
  return (
    <>
    <Stack.Screen options={{
    headerTransparent:true,
    headerTitle:"",


    }}/>
    <View style={
      styles.container
    }>
      <Text >Home</Text>
    </View>
    </>
  )
}
export default Home
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})