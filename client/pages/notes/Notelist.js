import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import Fakedatanotes from "./FakeDatanotes";
import axios from "axios";
//import { useNavigation } from "@react-navigation/native";
const Notelist = ({ navigation }) => {
  const [noteListUp, setNoteListUp] = useState([]);

  const getNoteList = async () => {
    const value = await AsyncStorage.getItem("userToken");

    axios
      .get("http://13.125.247.226:3001/notes", {
        headers: {
          Authorization: `Bearer ${value}`,
        },
      })
      .then((res) => {
        console.log(res.data);

        setNoteListUp(
          res.data.map((result) => {
            return result;
          }),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNoteList();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F5" }}>
      {/* <Text>Cupping Note</Text>
      <View style={styles.header}>
        <Text style={{ flex: 1 }}>원두</Text>
        <Text style={{ flex: 1 }}>날짜</Text>
        <Text style={{ flex: 1 }}>평점</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.element}>
          <Text style={styles.profile}>{beenName[0].name}</Text>
          <Text style={styles.profile}>{beenDate}</Text>
          <Text style={styles.profile}>{beenRate}</Text>
        </View>
      </View> */}

      {/* <View style={{ flexDirection: "row", flex: 1 }}>
        <Text style={{ alignItems: "center", flex: 1 }}>원두 {noteListUp}</Text> */}
      {noteListUp.map((listup) => (
        <View key={listup.id}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Noteinfo", {
                user_id: listup.user_id,
                name: listup.name,
                origin: listup.origin,
                mall: listup.mall,
                price: listup.price,
                feature: listup.feature,
                rating: listup.rating,
              });
            }}
          >
            <Text>정보보기</Text>
          </TouchableOpacity>
          <Text>원두 : {listup.name}</Text>
          <Text>구매처 : {listup.mall}</Text>
          <Text>평점 : {listup.rating}</Text>
        </View>
      ))}
      <Button
        title="새 노트 추가하기"
        onPress={() => navigation.navigate("Addnote")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "brown",
  },
  content: {
    flex: 1,
    //flexDirection: "row",
  },
  element: {
    flex: 1,
    width: "100%",
    //flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "space-between",

    borderBottomWidth: 0.5,
    padding: 5,
  },
  profile: {
    padding: 8,
    backgroundColor: "yellow",
    borderRadius: 5,
  },
});

export default Notelist;
