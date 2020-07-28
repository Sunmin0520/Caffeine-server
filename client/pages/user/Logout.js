import React, { useEffect } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

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
          onPress: () => navigation.goBack(),
          style: "cancel",
        },
        { text: "OK", onPress: () => navigation.popToTop() },
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <Button title={"Log out"} onPress={logoutFunc} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Logout;
