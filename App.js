/**
 * 
 * npx expo install @react-navigation/native
 * npx expo install react-native-screens react-native-safe-area-context
 * npx expo install @react-navigation/native-stack
 */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { StatusBar } from "react-native";

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  )
}
