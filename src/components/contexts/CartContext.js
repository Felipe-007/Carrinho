/**
 * Contexto para armazenar as informações do carrinho
 * 
 * todos mundo tera acesso aos componentes do card
 */
import React, { useState, createContext } from "react";

export const CartContext = createContext({})

function CartProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <CartContext.Provider
      value={{ carrinho }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;