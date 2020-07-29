import React, { useState } from "react";
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

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("./logo.png")} />
      <Text></Text>
      <TextInput
        label="Email"
        placeholder="   Email"
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        label="Password"
        placeholder="   Password"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        style={styles.appButtonContainer}
        title={"Login"}
        onPress={() => {
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
              // console.log(
              //   "로그인 성공 토큰값: ",
              //   response.data.token,
              //   "전체 response data:",
              //   response.data
              // );
              AsyncStorage.setItem("isLoggedIn", "1");
              navigation.navigate("Tab");
            })
            .catch((error) => {
              console.log(
                `${error} 에러 ${data}를 보내지 못했습니다. 로그인 상태는 ${isLogin}입니다.`
              );
            });
        }}
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
