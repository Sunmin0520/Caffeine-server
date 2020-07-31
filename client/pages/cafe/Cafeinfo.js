import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import axios from "axios";
import * as Linking from "expo-linking";
import StarRating from "react-native-star-rating";

const Cafeinfo = ({ route, navigation }) => {
  //Region에서 선택한 카페의 상세 내용을 출력합니다.
  const cafe_id = route.params.cafe_id; //Region에서 선택한 하나의 카페의 ID입니다.
  const region_id = route.params.region_id;
  const city = route.params.city;
  const user_id = route.params.user_id;

  const [name, Setname] = useState(null);
  const [address, Setaddress] = useState(null);
  const [sell_beans, Setsell_beans] = useState(null);
  const [instagram_account, Setinstagram_account] = useState(null);
  const [rating_average, Setrating_average] = useState(null);
  const [test, Settest] = useState(null);
  const [review, Setreview] = useState(null);

  const getCafeinfoCall = async () => {
    const value = await AsyncStorage.getItem("userToken");
    axios
      .get(`http://13.125.247.226:3001/cafes/${cafe_id}`, {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      })
      .then((res) => {
        console.log("data", res.data.review);
        return (
          Settest(res.data),
          Setname(res.data.name),
          Setaddress(res.data.address),
          Setsell_beans(res.data.Setsell_beans),
          Setinstagram_account(res.data.instagram_account),
          Setrating_average(res.data.rating_average),
          Setreview(
            res.data.review.map((result) => {
              return (
                <View key={result.text}>
                  <Text>{result.text}</Text>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={result.rating}
                    fullStarColor={"#FEBF34"}
                  />
                </View>
              );
            })
          )
        );
      })
      .catch(function (error) {
        console.log(error); //401{result:"token expired"} 수정예정
      });
  };
  useEffect(() => {
    getCafeinfoCall();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{city}</Text>
      <Text>{name}</Text>
      <Text>{address}</Text>
      <Text>{sell_beans}</Text>
      <Text
        onPress={() => {
          Linking.openURL(`https://www.instagram.com/${instagram_account}`);
        }}
      >
        @{instagram_account}
      </Text>
      <StarRating
        disabled={true}
        maxStars={5}
        rating={rating_average}
        fullStarColor={"#FEBF34"}
      />
      {review}

      <Button
        title="리뷰남기기"
        onPress={() => {
          navigation.navigate("Addreview", {
            cafe_id: cafe_id,
            user_id: user_id,
          });
        }}
      />
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
