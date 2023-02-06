/**
 * Itens do carrinho
 */
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function CardItem({ data, addAmount, removeAmount }) {  //recebe o data do cart/index.js que contem o carrinho

  const [amount, setAmount] = useState(data?.amount)

  function handleIncrease() {
    addAmount();
    setAmount(item => item + 1)
  }

  function handleDecrease() {
    removeAmount();

    if (amount === 0) {
      setAmount(0);
      return;
    }

    setAmount(item => item - 1) //diminui no carrinho
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price}</Text>
      </View>

      <View style={styles.amountContainer}>
        <TouchableOpacity style={styles.buttonAdd} onPress={handleDecrease}>
          <Text>-</Text>
        </TouchableOpacity>

        <Text style={styles.amount}>{amount}</Text>

        <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}