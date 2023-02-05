/**
 * Home
 */
import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import Product from "../../components/Product";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../components/contexts/CartContext";  //todos mundo tera acesso aos componentes do card

export default function Home() {

  const { carrinho } = useContext(CartContext)

  const navigation = useNavigation();

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

        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={styles.cardButton}
        >
          <View style={styles.dot}>
            <Text style={styles.dotText}>
              {carrinho?.length}
            </Text>
          </View>

          <AntDesign name="shoppingcart" size={30} color="black" />
        </TouchableOpacity>

      </View>
      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}  //converte a lista em string
        renderItem={({ item }) => <Product data={item} />}  //passa para o item as propriedades da lista
      />

    </SafeAreaView>
  )
}