import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import axios from "axios"

function Regionlist({ navigation }) {
  //DB에 있는 지역리스트를 가져옵니다.
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>어떤 지역의 카페정보가 궁금하신가요?</Text>
      <View>
        {axios
          .get("http://localhost:4000/region")
          .then((res) =>
            res.map((data) => (
              <View key={data.id}>
                {/* 각각의 지역 목록을 버튼화하여 선택시 해당 지역의 카페 목록으로 이동합니다 */}
                <Button
                  title={data.name}
                  style={styles.textstyle}
                  onPress={() => {
                    navigation.navigate("Region")
                  }}
                ></Button>
              </View>
            ))
          )
          .catch(function (error) {
            console.log(error) //401{result:"token expired"}
          })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textstyle: {
    justifyContent: "center",
    margin: 10,
  },
})

export default Regionlist
