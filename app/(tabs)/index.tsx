import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import recipes from '@/data/best-recipes.json'
import colors from '@/constants/colors'

export default function Home() {
  return (
    <>
      <Stack.Screen options={
        {
          headerTitle: "Home",
          headerTitleAlign: 'center',
    
        

        }
      } />
      <View style={{ backgroundColor:'white', padding:16}} >
        <FlatList 
        data={recipes}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap:20,
          paddingVertical:5,
          paddingBottom:50
        }}
        columnWrapperStyle={{flex:1,justifyContent:'space-between'}}

        renderItem={({item,index}) => (
          <View key={index} style={{width:'48%',borderRadius:15,borderColor:colors.black,  borderWidth: 0.5,
          }}>
            <TouchableOpacity>
              <Image source={{uri: item.image}} style={{width:'100%',height:150 ,borderRadius:15}}/>
              <View style={{
                flex:1,
                flexDirection:'column',
                justifyContent:'space-between',
                gap:20,
                padding:5
              }}>
                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14}}> {item.title} </Text>
                <Text style={{textAlign:'center',fontSize:12}}> {item.description} </Text>
          
              </View>
            </TouchableOpacity>
          </View>
        )}  
        />
    
      </View>
    </>


  )
}