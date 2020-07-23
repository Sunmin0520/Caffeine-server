import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import Fakedatanotes from "./FakeDatanotes";
//import { useNavigation } from "@react-navigation/native";

const Notelist = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F5" }}>
      <Text>Cupping Note</Text>
      <Button
        title="새 노트 추가하기"
        onPress={() => navigation.navigate("Addnote")}
      />
      <View>
        {Fakedatanotes.map((data) => (
          <View key={data.id}>
            <Button
              title={data.name}
              onPress={() => {
                navigation.navigate("Noteinfo", {
                  name: data.name,
                  origin: data.origin,
                  mall: data.mall,
                  price: data.price,
                  feature: data.feature,
                  rating: data.rating,
                });
              }}
            ></Button>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Notelist;
