import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";

function Regionlist({ navigation }) {
  //DB에 있는 지역리스트를 가져옵니다.

  const [region_id, Setregion_id] = useState("");
  const [city, Setcity] = useState("");
  const [test, Settest] = useState("");

  const getAllData = () => {
    axios
      .get("http://13.125.247.226:3001/cafes")
      .then((res) => {
        JSON.stringify(res.data);
      })
      .then((data) => {
        console.log(data);
      });
  };

  const getRegionList = () => {
    axios
      .get("http://13.125.247.226:3001/cafes")
      .then((res) => {
        return JSON.stringify(res.data);
      })
      .then((data) => {
        return data.map((result) => {
          key = result.id;
          Setregion_id(result.id);
          Setcity(result.name);
        });
      })
      .catch(function (error) {
        console.log(error); //401{result:"token expired"} 수정예정
      });
  };

  useEffect(() => {
    getRegionList();
    getAllData();
  });
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>어떤 지역의 카페정보가 궁금하신가요?</Text>
      {/* 각각의 지역 목록을 버튼화하여 선택시 해당 지역의 카페 목록으로 이동합니다 */}
      <Text>{test}</Text>
      <Button
        title={city}
        style={styles.textstyle}
        onPress={() => {
          navigation.navigate("Region", {
            region_id: region_id,
            city: city,
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
  textstyle: {
    justifyContent: "center",
    margin: 10,
  },
});

export default Regionlist;
