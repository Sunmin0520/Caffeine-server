import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as GoogleSignIn from "expo-google-sign-in";

export default function GoogleLogin() {
  signInWithGoogle = async () => {
    try {
      const result = await GoogleSignIn.logInAsync({
        androidClientId:
          "348379217678-iep3tgg5rfud3s2be2psvql59d74g10u.apps.googleusercontent.com",
        success: ["profile", "email"],
      });

      if (result.type === "success") {
        console.log(result.user.givenName);
        // console.log(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (error) {
      console.log("Err ", error);
      return { error: true };
    }
  };

  return (
    <View>
      <Text onPress={this.signInWithGoogle}>
        {/* <Image style={styles.tinyLogo} source={require("./google.png")} /> */}
        Google Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 15,
    height: 15,
  },
});
