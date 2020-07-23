import React from "react";
import { Button, View, Text } from "react-native";
import Notelist from "./Notelist";

const Noteinfo = ({ navigation, route }) => {
  const name = route.params.name;
  const origin = route.params.origin;
  const mall = route.params.mall;
  const price = route.params.price;
  const feature = route.params.feature;
  const rating = route.params.rating;

  console.log(route);

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F5" }}>
      <Text>{name}</Text>
      <Text>{origin}</Text>
      <Text>{mall}</Text>
      <Text>{price}</Text>
      <Text>{feature}</Text>
      <Text>{rating}</Text>
      <Button
        title="수정하기"
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
      />
    </View>
  );
};

export default Noteinfo;
