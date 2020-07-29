import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";
import Token from "./navigation/Token";

export default function App() {
  useEffect(() => {
    testFn2();
  });

  const [userToken, setUserToken] = useState(null);

  const testFn2 = async () => {
    try {
      const value = await AsyncStorage.getItem("userToken");
      if (value !== null) {
        setUserToken(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return userToken ? (
    <NavigationContainer>
      <Token />
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
