//test
import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TextInput } from "react-native";
import FacebookLogin from "./FackbookLogin";

export default function UserInfo({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Google 로그인"></Button>
      <FacebookLogin />
      <Button
        title="등록된 이메일로 로그인"
        onPress={() => {
          navigation.navigate("Signin");
        }}
      ></Button>
      <Text onPress={() => navigation.navigate("Signup")}>
        아직 회원이 아니신가요? 회원가입
      </Text>
    </View>
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
