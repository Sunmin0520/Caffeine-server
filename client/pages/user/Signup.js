//test
import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TextInput } from "react-native";
import axios from "axios";
export default function Signup() {
  const [email, setEmail] = useState(""); // 이메일 인풋값 핸들링
  const [nickname, setNickname] = useState(""); // 닉네임 인풋값 핸들링
  const [password, setPassword] = useState(""); // 패스워드 인풋값 핸들링
  const [passwordCheck, setPasswordCheck] = useState(""); // 패스워드체크 인풋값 핸들링

  return (
    <View style={styles.container}>
      <Text style={styles.inputext}>회원가입 페이지</Text>
      <TextInput
        label="Email"
        placeholder="   Email"
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        label="Text"
        placeholder="   Nickname"
        style={styles.input}
        onChangeText={(nickname) => setNickname(nickname)}
      />
      <TextInput
        label="Password"
        placeholder="   Password"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
      />
      <TextInput
        label="Password"
        placeholder="   Password Check"
        style={styles.input}
        onChangeText={(passwordCheck) => setPasswordCheck(passwordCheck)}
      />
      <Button
        title="회원가입"
        onPress={() => {
          console.log(
            `이메일: ${email} 패스워드: ${password} 닉네임: ${nickname}`
          );
          const data = JSON.stringify({
            email: email,
            password: password,
            nickname: nickname,
          });

          const config = {
            method: "post",
            url: "http://localhost:3001/user/signup/",
            headers: {
              "Content-Type": "application/json",
            },
            data: data,
          };

          axios(config)
            .then((response) => {
              console.log(response.data);
              console.log("회원가입 성공");
            })
            .catch((error) => {
              console.log(`${error} 에러 ${data}를 보내지 못했습니다.`);
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
    width: 350,
    height: 40,
    marginBottom: 10,
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
  },
  inputext: {
    width: 200,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
