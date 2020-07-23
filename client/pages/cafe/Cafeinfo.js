import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";
import * as Linking from "expo-linking";

const Cafeinfo = ({ route, navigation }) => {
  //Region에서 선택한 카페의 상세 내용을 출력합니다.
  const cafe_id = route.params.cafe_id; //Region에서 선택한 하나의 카페의 ID입니다.
  const region_id = route.params.region_id;
  return (
    <View style={styles.container}>
      {axios
        .get(`http://localhost:3001/cafes/:region_id/:cafe_id`) // Serverside진행후 수정예정입니다.
        .then((res) => {
          //status 200 ok
          <View>
            <Text>{res.name}</Text>
            <Text>{res.address}</Text>
            <Text>{res.sell_beans}</Text>
            <Text
              onPress={() => {
                Linking.openURL(`https://www.instagram.com/${instagram}`);
              }}
            >
              {instagram_account}
            </Text>
            <Text>{rating_average}</Text>
          </View>;
          <Button
            title="리뷰남기기"
            onPress={() => {
              navigation.navigate("Addreview", { cafe_id: res.id });
            }}
          />;
        })
        .catch(function (error) {
          console.log(error); //401{result:"token expired"} 수정예정
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

export default Cafeinfo;
