import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notelist from "../pages/notes/Notelist";
import Noteinfo from "../pages/notes/Noteinfo";
import Modifynote from "../pages/notes/Modifynote";
import Signin from "../pages/user/Signin";
import Signup from "../pages/user/Signup";
import Main from "../pages/user/Main";
import Tabs from "./Tabs";
import userInfo from "../pages/user/userInfo";
// import Addnote from "../pages/notes/Addnote";
import Regionlist from "../pages/cafe/Regionlist";

const Stack = createStackNavigator();

export default () => (
  //screen은 컴포넌트가 필요하다. 꼭 이름을 주어야한다.
  //Stack.Navigator가 항상 하위 Stack.Screen에게 prop(navigation)을 준다.
  //Navigator의 모든 screen 들은 navigation이란 prop에 접근권을 가지고 있다.
  //component는 불려지고 screen은 props를 보낸다.
  //stack안에 tabs들이 있도록 해주었다.
  //screenOptions는 모든 screen에 대한 style을 정할 수있다.
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#F8F8F5",
        borderBottomColor: "#F8F8F5",
        shadowColor: "#F8F8F5",
      },
      headerTintColor: "black",
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen name="userInfo" component={userInfo} />
    <Stack.Screen name="Signin" component={Signin} />
    <Stack.Screen name="Signup" component={Signup} />
    {/* <Stack.Screen name="Main" component={Main} /> */}
    <Stack.Screen name="Tab" component={Tabs} />
    <Stack.Screen name="Notelist" component={Notelist} />
    <Stack.Screen name="Noteinfo" component={Noteinfo} />
    <Stack.Screen name="Modifynote" component={Modifynote} />
    {/* <Stack.Screen name="Addnote" component={Addnote} /> */}
    <Stack.Screen name="Regionlist" component={Regionlist} />
  </Stack.Navigator>
);
