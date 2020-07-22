import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Fakedatanotes from "./FakeDatanotes";

export default ({ navigation }) => (
  //navigate로 라우팅 가능하다 이름을 항상 적어준다.
  <View style={{ flex: 1, backgroundColor: "#F8F8F5" }}>
    <Text>Cupping Note</Text>
    <Button
      title="새 노트 추가하기"
      onPress={() => navigation.navigate("Addnote")}
    />
    {Fakedatanotes.map((data) => (
      <View key={data.id}>
        <Text style={styles.textstyle}>
          {data.name}, {data.price},{data.rating}
        </Text>
      </View>
    ))}
  </View>
);

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
