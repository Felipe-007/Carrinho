/**
 * Home
 */
import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';

export default function Home() {

  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Coca cola',
      price: 9.90
    },
    {
      id: '2',
      name: 'Chocolate',
      price: 19.90
    },
    {
      id: '3',
      name: 'Queijo 500g',
      price: 10.90
    },
    {
      id: '4',
      name: 'Batata frita',
      price: 8.90
    },
    {
      id: '5',
      name: 'Guarana',
      price: 5.90
    },
    {
      id: '6',
      name: 'Bolo',
      price: 7.90
    },
  ])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>

        <TouchableOpacity style={styles.cardButton}>
          <View style={styles.dot}>
            <Text style={styles.dotText}>3</Text>
          </View>

          <AntDesign name="shoppingcart" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}