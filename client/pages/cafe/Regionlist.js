import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import axios from "axios";

function Regionlist({ route, navigation }) {
  //DB에 있는 지역리스트를 가져옵니다.
  const [city, Setcity] = useState(null);

  const getRegionList = async () => {
    const value = await AsyncStorage.getItem("userToken");
    axios
      .get("http://13.125.247.226:3001/cafes", {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      })
      .then((res) => {
        Setcity(
          res.data.map((result) => {
            return (
              <Button
                key={result.name}
                title={result.name}
                onPress={() => {
                  navigation.navigate("Region", {
                    region_id: result.id,
                    city: result.name,
                  });
                }}
              />
            );
          })
        );
      })
      .catch(function (error) {
        console.log(error); //401{result:"token expired"} 수정예정
      });
  };

  useEffect(() => {
    getRegionList();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>어떤 지역의 카페정보가 궁금하신가요?</Text>
      {city}
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
