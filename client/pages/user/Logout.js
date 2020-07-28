import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

const Logout = ({ navigation }) => {
  useEffect(() => {
    logoutFunc();
  });

  const logoutFunc = () =>
    Alert.alert(
      "Log out",
      "로그아웃 하시겠습니까?",
      [
        {
          text: "Cancel",
          onPress: () => navigation.navigate("Main"),
          // style: "cancel",
        },
        { text: "OK", onPress: () => navigation.navigate("userInfo") },
      ],
      { cancelable: false }
    );

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Logout;
