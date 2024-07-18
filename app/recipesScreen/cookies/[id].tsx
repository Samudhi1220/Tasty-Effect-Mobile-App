import { View, Text,Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';
import CategoryList from '@/data/category.json';
import colors from '@/constants/colors'; 
import { CategoryTypes } from '@/types/CategoryTypes ';



export default function Cookies() {
    const { id } = useLocalSearchParams();
  const category: CategoryTypes | undefined = (CategoryList as unknown as CategoryTypes[]).find(
    (item) => item.id == id
  )

    if (!category) {
        return (
          <View style={styles.centered}>
            <Text>Recipe not found!</Text>
          </View>
        );
      }
    
      return (
        <>
          <Stack.Screen
            options={{
              headerTitle: category.name,
              headerTitleAlign: 'center',
              headerBackground: () => (
                <Image
                  source={{ uri: 'https://www.shutterstock.com/image-photo/summer-bbq-food-corner-border-260nw-1765546103.jpg' }}
                  style={styles.headerImage}
                />
              ),
              headerTitleStyle: styles.headerTitle,
            }}
          />
          <View style={styles.container}>
            <FlatList
              data={category.recipes}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.flatListContainer}
              columnWrapperStyle={styles.columnWrapper}
              renderItem={({ item }) => (
                <View style={styles.recipeCard}>
                  <TouchableOpacity>
                    <Image source={{ uri: item.image }} style={styles.recipeImage} />
                    <View style={styles.recipeContent}>
                      <Text style={styles.recipeTitle}>{item.title}</Text>
                      <Text style={styles.recipeDescription}>{item.description}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </>
      );
    }
    
    const styles = StyleSheet.create({
      centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerImage: {
        width: '100%',
        height: '100%',
      },
      headerTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
      },
      container: {
        backgroundColor: 'white',
        padding: 16,
        flex: 1,
      },
      flatListContainer: {
        gap: 20,
        paddingVertical: 5,
        paddingBottom: 50,
      },
      columnWrapper: {
        justifyContent: 'space-between',
      },
      recipeCard: {
        width: '48%',
        borderRadius: 15,
        borderColor: colors.black,
        borderWidth: 0.5,
        marginBottom: 20,
        overflow: 'hidden',
      },
      recipeImage: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      recipeContent: {
        padding: 5,
        justifyContent: 'space-between',
        flex: 1,
      },
      recipeTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 5,
      },
      recipeDescription: {
        textAlign: 'center',
        fontSize: 12,
        marginBottom: 5,
      },
    });