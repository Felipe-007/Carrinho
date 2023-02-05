/**
 * Produtos
 * 
 * recebe a lista do home/index.js
 */
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Product({ data, adicionaAoCarrinho }) {  //({ data }) pega as propriedades da lista home/index.js
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price}</Text>
      </View>

      <TouchableOpacity style={styles.buttonAdd} onPress={adicionaAoCarrinho}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}