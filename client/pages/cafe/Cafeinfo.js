import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";
import * as Linking from "expo-linking";
import StarRating from "react-native-star-rating";

const Cafeinfo = ({ route, navigation }) => {
  //Region에서 선택한 카페의 상세 내용을 출력합니다.
  const cafe_id = route.params.cafe_id; //Region에서 선택한 하나의 카페의 ID입니다.
  const region_id = route.params.region_id;
  const city = route.params.city;
  const user_id = route.params.user_id;

  const [name, Setname] = useState("");
  const [address, Setaddress] = useState("");
  const [sell_beans, Setsell_beans] = useState("");
  const [instagram_account, Setinstagram_account] = useState("");
  const [rating_average, Setrating_average] = useState(0);
  const [review, Setreview] = useState("");
  const [rating, Setrating] = useState(0);

  const getCafeinfoCall = () => {
    axios
      .get(`http://localhost:3001/cafes/${region_id}/${cafe_id}`)
      .then((res) => {
        return JSON.stringify(res.data);
      })
      .then((data) => {
        return (
          Setname(data.name),
          Setaddress(data.address),
          Setsell_beans(data.Setsell_beans),
          Setinstagram_account(data.instagram_account),
          Setrating_average(data.rating_average)
        );
      })
      .catch(function (error) {
        console.log(error); //401{result:"token expired"} 수정예정
      });
  };

  const getReview = () => {
    axios
      .get(`http://localhost:3001/cafes/${region_id}/${cafe_id}`) //리뷰url로 수정 예정
      .then((res) => {
        return JSON.stringify(res.data);
      })
      .then((data) => {
        return Setreview(data.text), Setrating(data.rating);
      });
  };

  useEffect(() => {
    getCafeinfoCall();
    getReview();
  });

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
      <Text>{sell_beans}</Text>
      <Text>{review}</Text>
      <Text>{rating}</Text>
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
