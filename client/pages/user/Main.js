import React, { useEffect } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

export default function Signin({ navigation }) {
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
