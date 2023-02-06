/**
 * Carrinho
 */
import React, { useContext } from "react";
import { View, FlatList, Text } from "react-native";
import { styles } from "./styles";
import { CartContext } from "../../components/contexts/CartContext";
import CardItem from "../../components/CardItem";

export default function Cart() {

  const { carrinho, addItemCart, removeItemCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={carrinho}
        keyExtractor={(item) => String(item.id)}  //pega o id do item, convertendo ele para string
        ListEmptyComponent={() => <Text>Nenhum item no carrinho</Text>}
        renderItem={({ item }) => (
          <CardItem
            data={item}
            addAmount={() => addItemCart(item)}  //adicona um item = quando aumentar a quantidade, aumentara tbem o carrinho
            removeAmount={() => removeItemCart(item)}  //remove um item
          />
        )}
      />
    </View>
  )
}