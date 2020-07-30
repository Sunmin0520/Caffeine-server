import React, { useState, useEffect } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  TextInput,
  Image,
  AsyncStorage,
} from "react-native";
import axios from "axios";
export default function Signin({ navigation, route }) {
  const [isLogin, setIsLogin] = useState(false); // 로그인 핸들링
  const [email, setEmail] = useState(""); // 이메일 인풋값 핸들링
  const [password, setPassword] = useState(""); // 패스워드 인풋값 핸들링

  // axios 요청
  const postLoginData = () => {
    const data = JSON.stringify({
      email: email,
      password: password,
    });

    const config = {
      method: "post",
      url: "http://13.125.247.226:3001/users/signin",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        const testFn = async () => {
          try {
            await AsyncStorage.setItem("userToken", response.data.token);
          } catch (error) {
            console.log("Something went wrong", error);
          }
        };
        testFn();
        navigation.navigate("Tab");
      })
      .catch((error) => {
        console.log(
          `${error} 에러 ${data}를 보내지 못했습니다. 로그인 상태는 ${isLogin}입니다.`
        );
      });
  };

  useEffect(() => {
    testFn2();
  });

  const testFn2 = async () => {
    const value = await AsyncStorage.getItem("userToken");
    console.log("로그인시 해당 페이지의 토큰 값을 확인합니다 ", value);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("./logo.png")} />
      <TextInput
        label="Email"
        placeholder="   Email"
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        placeholder="   Password"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
        autoCapitalize="none"
      />
      <Button
        style={styles.appButtonContainer}
        title={"Login"}
        onPress={postLoginData}
      />
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
  input: {
    width: 300,
    height: 44,
    marginBottom: 10,
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
  },
  signup: {
    marginTop: 20,
  },
  tinyLogo: {
    width: 220,
    height: 220,
    marginTop: -50,
    marginBottom: 20,
  },
});
