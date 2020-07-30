import React from "react";
import { Text, View, StyleSheet, Button, AsyncStorage } from "react-native";
import * as Google from "expo-google-app-auth";
import { useNavigation } from "@react-navigation/native";

const ANDROID_CLIENT_ID =
  "348379217678-iep3tgg5rfud3s2be2psvql59d74g10u.apps.googleusercontent.com";

function GoogleLogin() {
  const navigation = useNavigation();
  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        // console.log("LoginGoogle: ", result);
        const _storeData = async () => {
          try {
            await AsyncStorage.setItem("userToken", result.accessToken);
          } catch (error) {
            console.log(error);
          }
        };
        _storeData();
        navigation.navigate("Tab");
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("에러: ", e);
      return { error: true };
    }
  };

  return (
    <View>
      <Button title="Login with Google" onPress={signInWithGoogleAsync} />
    </View>
  );
}

export default GoogleLogin;
