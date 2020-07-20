import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"

const Regionlist = () => {
  //DB에 있는 지역리스트를 가져옵니다.
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>어떤 지역의 카페정보가 궁금하신가요?</Text>
      {Fakedata.map((data) => (
        <View key={data.id}>
          <Text style={styles.textstyle}>{data.region}</Text>
        </View>
      ))}
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
