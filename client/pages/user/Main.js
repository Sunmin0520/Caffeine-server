import React, { useEffect } from "react";
import { Text, Button, View, StyleSheet, AsyncStorage } from "react-native";

export default function Signin({ navigation }) {
  useEffect(() => {
    testFn4();
  });

  const testFn4 = async () => {
    const value = await AsyncStorage.getItem("userToken");
    console.log("Main.js 해당 페이지의 토큰 값을 확인합니다 ", value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputext}>Main</Text>
      <Button
        title="카페 찾기"
        style={styles.input}
        onPress={() => {
          navigation.navigate("Regionlist");
        }}
      />
      <Button
        title="커피콩콩콩"
        style={styles.input}
        onPress={() => {
          navigation.navigate("Addnote");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    width: 200,
    marginBottom: 10,
  },
  inputext: {
    width: 200,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 25,
  },
});
