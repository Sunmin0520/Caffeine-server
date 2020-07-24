import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import StarRating from "react-native-star-rating";

const Noteinfo = ({ navigation, route }) => {
  const name = route.params.name;
  const origin = route.params.origin;
  const mall = route.params.mall;
  const price = route.params.price;
  const feature = route.params.feature;
  //const rating = route.params.rating;
  const [rating, onChangeRating] = useState(route.params.rating);

  console.log(route);

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F5" }}>
      <Text>{name}</Text>
      <Text>원산지 : {origin}</Text>
      <Text>구입처 : {mall}</Text>
      <Text>가격 : {price}</Text>
      <Text>특징 : {feature}</Text>
      <Text>
        평점 :
        <StarRating
          disabled={true}
          maxStars={5}
          rating={rating}
          selectedStar={(rating) => onChangeRating(rating)}
          fullStarColor={"#FEBF34"}
        />
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Modifynote", {
            name: name,
            origin: origin,
            mall: mall,
            price: price,
            feature: feature,
            rating: rating,
          })
        }
      >
        <Text>수정하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Modifynote", {
            name: name,
            origin: origin,
            mall: mall,
            price: price,
            feature: feature,
            rating: rating,
          })
        }
      >
        <Text>삭제하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default Noteinfo;
