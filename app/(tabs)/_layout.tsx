import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '@/constants/colors'

export default function _layout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle:{
         backgroundColor:colors.bgColor,
         borderTopWidth:0,
         padding:0
      },
      tabBarShowLabel:false,
      tabBarActiveTintColor:colors.black,
      tabBarInactiveTintColor:'#999'
    }}>
        <Tabs.Screen name='index' options={{tabBarIcon:({color}) => (
           <Ionicons name='home' size={28} color={color}/> 
        )}} />
       
        <Tabs.Screen name='search'
        options={{tabBarIcon:({color}) => (
            <View style={{backgroundColor:colors.primaryColor,paddingHorizontal: 16,paddingVertical:12,borderRadius:10,height:50}}>
              <Ionicons name='search-outline' size={24} color={colors.white}/> 
            </View>
  
         )}}/>
          <Tabs.Screen name='category'options={{tabBarIcon:({color}) => (
           <MaterialIcons name='space-dashboard' size={28} color={color}/> 
        )}}
        />
      
    </Tabs>
  )
}