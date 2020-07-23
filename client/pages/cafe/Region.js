import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";

const Region = ({ route, navigation }) => {
  //Regionlist에서 선택한 지역의 카페 목록을 가져옵니다.
  const city = route.params.city; //Regionlist에서 route로 받은 도시이름을 가져옵니다.
  const region_id = route.params.region_id;
  return (
    <View style={styles.container}>
      <Text>{city}</Text>
      <Button
        title="새로운 카페 추가"
        onPress={() => {
          navigation.navigate("Addcafe");
        }}
      />
      {axios
        .get(`http://localhost:3001/cafes/regions/${region_id}`)
        .then((res) => {
          //200 ok 선택한 지역의 모든 카페를 가져옵니다
          res
            .map((data) => (
              <View key={data.id}>
                <Text
                  onPress={() => {
                    navigation.navigate("Cafeinfo", { cafe_id: data.id });
                  }}
                >
                  {data.name}
                </Text>
                <Text>{data.address}</Text>
                <Text>{rating_average}</Text>
              </View>
            ))
            .catch(function (error) {
              console.log(error); //404{result:"region not found"}
            });
        })}
    </View>
  );
};

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

export default Region;
