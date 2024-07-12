import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import categories from '@/data/categories.json'; // Make sure to replace this path with your actual path
import colors from '@/constants/colors'; // Make sure to replace this with your actual path

export default function Category() {
  return (
    <>
      <Stack.Screen
       options={{
        headerTitle: "Category",
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
      <View style={{ backgroundColor: 'white', padding: 20}}>
        <FlatList
          data={categories}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 20,
            paddingVertical: 5,
            paddingBottom: 50
          }}
          renderItem={({ item, index }) => (
            <View key={index} style={{ width: '100%', borderRadius: 15, borderColor: colors.black, borderWidth: 0.5 }}>
              <TouchableOpacity>
                <Image source={{ uri: item.photo_url }} style={{ width: '100%', height: 160, borderRadius: 15 }} />
                <View style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: 5
                }}>
                  <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}> {item.name} </Text>
                  <Text style={{ textAlign: 'center', fontSize: 12 }}> {item.recipesCount} </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </>
  );
}
