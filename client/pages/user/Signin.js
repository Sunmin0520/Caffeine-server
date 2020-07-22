import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TextInput, Image } from "react-native";
import axios from "axios";
export default function Signin({ navigation }) {
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
        title={isLogin ? "로그인 되었습니다" : "Login"}
        onPress={() => {
          const data = JSON.stringify({
            email: email,
            password: password,
          });

          const config = {
            method: "post",
            url: "http://localhost:3001/user/signin/",
            headers: {
              "Content-Type": "application/json",
            },
            data: data,
          };

          axios(config)
            .then((response) => {
              console.log(response.data);
              console.log(`로그인 성공`);
              setIsLogin(true);
            })
            .catch((error) => {
              navigation.navigate("Tab"); // 읽어주세요!
              //서버와의 연결이 되어있지 않아 우선 로그인에 성공하지 못했을 경우 Main으로 넘어가집니다.
              //추후 로그인에 성공했을 경우로 바꾸어야 하며 로그인 상태도 같이 넘겨줄 예정입니다.
              console.log(
                `${error} 에러 ${data}를 보내지 못했습니다. 로그인 상태는 ${isLogin}입니다.`
              );
            });
        }}
      />
      <Text style={styles.signup} onPress={() => navigation.navigate("Signup")}>
        회원이 아니신가요?
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
