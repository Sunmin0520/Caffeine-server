import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";

const Region = ({ route, navigation }) => {
  //Regionlist에서 선택한 지역의 카페 목록을 가져옵니다.
  const city = route.params.city; //Regionlist에서 route로 받은 도시이름을 가져옵니다.
  const region_id = route.params.region_id;

  const [cafename, Setcafename] = useState("");
  const [address, Setadress] = useState("");
  const [cafe_id, Setcafe_id] = useState(1);

  const getRegionCall = () => {
    //get cafes table
    axios
      .get(`http://localhost:3001/cafes/region?region_id=${region_id}`)
      .then((res) => {
        return JSON.stringify(res.data);
      })
      .then((data) => {
        data.map((result) => {
          key = result.id;
          Setcafename(result.name),
            Setadress(result.address),
            Setcafe_id(result.id);
        });
      })
      .catch(function (error) {
        console.log(error); //401{result:"token expired"} 수정예정
      });
  };

  useEffect(() => {
    getRegionCall();
  });

  return (
    <View style={styles.container}>
      <Text>{city}</Text>
      <Button
        title="새로운 카페 추가"
        onPress={() => {
          navigation.navigate("Addcafe");
        }}
      />
      <Text
        onPress={() => {
          navigation.navigate("Cafeinfo", {
            cafe_id: cafe_id,
            city: city,
            cafename: cafename,
            address: address,
          });
        }}
      >
        {cafename}
      </Text>
      <Text>{address}</Text>
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
