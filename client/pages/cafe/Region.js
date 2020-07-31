import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import axios from "axios";
import StarRating from "react-native-star-rating";

const Region = ({ route, navigation }) => {
  //Regionlist에서 선택한 지역의 카페 목록을 가져옵니다.
  const city = route.params.city; //Regionlist에서 route로 받은 도시이름을 가져옵니다.
  const region_id = route.params.region_id;

  const [cafelist, Setcafelist] = useState(null);

  const getCafelistCall = async () => {
    //get cafes table
    const value = await AsyncStorage.getItem("userToken");
    axios
      .get(`http://13.125.247.226:3001/cafes/region/${region_id}`, {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      })
      .then((res) => {
        // console.log (res.data);
        Setcafelist(
          res.data.map((result) => {
            return (
              <View key={result.id}>
                <Button
                  title={result.name}
                  onPress={() => {
                    navigation.navigate("Cafeinfo", { cafe_id: result.id });
                  }}
                />
                <Text>{result.address}</Text>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={result.rating_average}
                  fullStarColor={"#FEBF34"}
                />
              </View>
            );
          })
        );
      })
      .catch(function (error) {
        console.log(error); //401{result:"token expired"} 수정예정
      });
  };

  useEffect(() => {
    getCafelistCall();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{city}</Text>
      {/**선택한지역명 */}
      <Button
        title="새로운 카페 추가"
        onPress={() => {
          navigation.navigate("Addcafe");
        }}
      />
      {cafelist}
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
