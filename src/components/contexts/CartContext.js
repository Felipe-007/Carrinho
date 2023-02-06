/**
 * Contexto para armazenar as informações do carrinho
 * 
 * todos mundo tera acesso aos componentes do card
 */
import React, { useState, createContext } from "react";

export const CartContext = createContext({})

function CartProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0)

  function addItemCart(newItem) {
    const indexItem = carrinho.findIndex(item => item.id === newItem.id)  //percorre dentro do carrinho um item que seja igual a ele

    if (indexItem !== -1) {
      //Se entrar aqui quer dizer que temos que adicionar +1 quantidade por que ele já esta na sua lista
      let cartList = carrinho

      cartList[indexItem].amount = cartList[indexItem].amount + 1;  //ao adicionar o mesmo item, ira somar a quantidade
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price  //pega a quantidade e multiplica pelo preço

      setCarrinho(cartList);
      totalResultCart(cartList);
      return
    }

    //adicionamos ao carrinho caso ele não tenha no carrinho
    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }

    setCarrinho(products => [...products, data])  //setCarrinho recebe a lista e os itens adicionados
    totalResultCart([ ...carrinho, data ])
  }

  function removeItemCart(product) {
    const indexItem = carrinho.findIndex(item => item.id === product.id)  //percorre dentro do carrinho um item que seja igual a ele

    if (carrinho[indexItem]?.amount > 1) {
      let cartList = carrinho

      cartList[indexItem].amount = cartList[indexItem].amount - 1

      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price

      setCarrinho(cartList);
      totalResultCart(cartList);
      return;
    }

    //cai aqui caso o queira remover o ultimo item do carrinho, ou seja, remover o 1
    const removeItem = carrinho.filter(item => item.id !== product.id);
    setCarrinho(removeItem);
    totalResultCart(removeItem);
  }

  function totalResultCart(items) {
    let myCart = items
    let result = myCart.reduce((acc, obj) => { return acc + obj.total }, 0)

    setTotal(result.toFixed(2))
  }

  return (
    <CartContext.Provider
      value={{ carrinho, addItemCart, removeItemCart, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;