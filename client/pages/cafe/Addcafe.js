import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import axios from "axios";
import StarRating from "react-native-star-rating";

const Addreview = ({ route, navigation }) => {
  //새로운 카페를 등록할 수 있습니다.

  const [name, Setname] = useState("");
  const [address, Setaddress] = useState("");
  const [regionid, Setregionid] = useState("");
  const [region, Setregion] = useState("");
  const [sell_beans, Setsell_beans] = useState(false);
  const [instagram_account, Setinstagram_account] = useState("");

  const getRegionCall = () => {
    axios
      .get("http://localhost:3001/cafes")
      .then((res) => {
        return JSON.stringify(res.data);
      })
      .then((data) => {
        data.map((result) => {
          key = result.id;
          Setregionid(result.id);
          Setregion(result.name);
        });
      })
      .catch(function (error) {
        console.log(error); //401{result:"token expired"} 수정예정
      });
  };

  const postCafeCall = () => {
    axios
      .post(
        "http://localhost:3001/cafes/:region_id/cafe",
        {
          name: name,
          address: address,
          sell_beans: sell_beans,
          instagram_account: instagram_account,
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

  const handleSellBeans = () => {
    Setsell_beans(true);
  };

  return (
    <View style={styles.container}>
      <Text>새로운 카페 등록</Text>
      <Text>
        상호명
        <TextInput
          placeholder={"상호명을 입력해주세요"}
          onChangeText={(text) => Setname(text)}
          value={review}
        />
      </Text>
      <Text>지역선택</Text>
      {/* 주소 입력  */}
      <Text>원두를 판매하나요?</Text>
      {/* 판매여부 버튼 생성 */}
      <Button></Button>
      <Text>
        인스타그램 계정
        <TextInput
          placeholder={"계정 아이디만 적어주세요"}
          onChangeText={(text) => Setinstagram_account(text)}
          value={instagram_account}
        />
      </Text>

      <Button
        title={"등록하기"}
        onPress={() => {
          navigation.navigate("Region");
          postCafeCall();
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
