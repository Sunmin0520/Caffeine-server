import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import axios from "axios";
import StarRating from "react-native-star-rating";

const Addreview = ({ route, navigation }) => {
  //Cafeinfo 선택한 카페의 리뷰를 작성할수 있습니다.
  const cafe_id = route.params.cafe_id; //Cafeinfo에서 선택한 카페의 ID입니다.
  const user_id = route.params.user_id;

  const [review, onChangereview] = useState("리뷰를 작성해주세요");
  const [rating, onChangeRating] = useState(route.params.rating);
  const postReviewCall = () => {
    axios
      .post(
        `http://localhost:3001/cafes/:region_id/:cafe_id`,
        {
          text: review,
          rating: rating,
        },
        { withCredentials: true }
      ) // Serverside진행후 수정예정입니다.
      .then((res) => {
        //status 200 ok
        alert(JSON.stringify(res.data)); // 수정예정
      })
      .catch(function (error) {
        console.log(error); //401{result:"token expired"} 수정예정
      });
  };
  return (
    <View style={styles.container}>
      <Text>이 카페에서의 경험을 공유해주세요</Text>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={rating}
        selectedStar={(rating) => onChangeRating(rating)}
        fullStarColor={"#FEBF34"}
      />
      <TextInput
        placeholder={"리뷰를 작성해주세요"}
        onChangeText={(text) => onChangereview(text)}
        value={review}
      />
      <Button
        title={"등록하기"}
        onPress={() => {
          navigation.navigate("Cafeinfo");
          postReviewCall();
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

export default Addreview;
