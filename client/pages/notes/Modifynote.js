import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import StarRating from "react-native-star-rating";

const Modifynote = ({ navigation, route }) => {
  const [name, onChangeName] = useState(route.params.name);
  const [origin, onChangeOrigin] = useState(route.params.origin);
  const [mall, onChangeMall] = useState(route.params.mall);
  const [price, onChangePrice] = useState(route.params.price);
  const [feature, onChangeFeature] = useState(route.params.feature);
  const [rating, onChangeRating] = useState(route.params.rating);

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F5" }}>
      <Text>
        원두이름
        <TextInput
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeName(text)}
          value={name}
        />
      </Text>
      <Text>
        원산지
        <TextInput
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeOrigin(text)}
          value={origin}
        />
      </Text>

      <Text>
        구매처
        <TextInput
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeMall(text)}
          value={mall}
        />
      </Text>

      <Text>
        가격
        <TextInput
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangePrice(text)}
          value={price}
        />
      </Text>

      <Text>
        특징
        <TextInput
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeFeature(text)}
          value={feature}
        />
      </Text>

      <Text>
        평점
        <StarRating
          disabled={false}
          maxStars={5}
          rating={rating}
          selectedStar={(rating) => onChangeRating(rating)}
          fullStarColor={"#FEBF34"}
        />
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          axios
            .post(
              //"http://localhost:3000/
              {
                name: name,
                origin: origin,
                mall: mall,
                price: price,
                feature: feature,
                rating: rating,
              },
              //withCredentials는 origin이 다른 http 통신에서는 request header에 쿠키가 자동으로 들어가지 않기 때문에 client쪽에서 설정해주어야 하는 옵션
              { withCredentials: true },
            )
            .then((result) => {
              console.log(result);
              //
              navigation.navigate("Noteinfo");
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <Text>저장하기</Text>
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

export default Modifynote;
