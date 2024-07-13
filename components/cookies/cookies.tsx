import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import cookies from '@/data/cookies.json'; // Make sure to replace this path with your actual path
import colors from '@/constants/colors'; // Make sure to replace this with your actual path

export default function Cookies() {
  return (
    <>
      <Stack.Screen
       options={{
        headerTitle: "Cookies",
        headerTitleAlign: 'center',
        headerBackground: () => (
            <Image
            source={{ uri: 'https://www.shutterstock.com/image-photo/summer-bbq-food-corner-border-260nw-1765546103.jpg' }}
            style={{ width: '100%', height: '100%' }}
          />
        ),
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
          color: 'white',
        },
      }}
      />
      <View style={{ backgroundColor: 'white', padding: 16 }}>
        <FlatList
          data={cookies}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 20,
            paddingVertical: 5,
            paddingBottom: 50
          }}
          columnWrapperStyle={{ flex: 1, justifyContent: 'space-between' }}
          renderItem={({ item, index }) => (
            <View key={index} style={{ width: '48%', borderRadius: 15, borderColor: colors.black, borderWidth: 0.5 }}>
              <TouchableOpacity>
                <Image source={{ uri: item.image }} style={{ width: '100%', height: 150, borderRadius: 15 }} />
                <View style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: 20,
                  padding: 5
                }}>
                  <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 14 }}> {item.title} </Text>
                  <Text style={{ textAlign: 'center', fontSize: 12 }}> {item.description} </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </>
  );
}
