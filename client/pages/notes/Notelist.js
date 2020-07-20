import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function NoteListScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Note Screen</Text>
      <Button
        title="새 노트 추가"
        onPress={() => navigation.navigate("Addnote")}
      />
    </View>
  );
}

function AddnoteScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="수정하기" onPress={() => navigation.push("Modifynote")} />
      <Button
        title="삭제하기"
        onPress={() => navigation.navigate("Deletenote")}
      />
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function Notelist() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notelist" component={NoteListScreen} />
        <Stack.Screen name="Addnote" component={AddnoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Notelist;
