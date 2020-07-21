import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

import Regionlist from "./Regionlist"
import Region from "./Region"
import Cafeinfo from "./Cafeinfo"
import Permissions from "./Permissions"
import Addcafe from "./Addcafe"
import Addreview from "./Addreview"
import { Button, Text, View } from "react-native"

function HomeScreen({ navigation }) {
  //Test Main page 입니다.
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  )
}

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Home() {
  // Home 출력 및 각각의 페이지가 정상 출력되는지 Tab으로 이동하여 확인 할 수 있는 Test Tabbar입니다.
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Regionlist" component={Regionlist} />
      {/* <Tab.Screen name="Region" component={Region} />
      <Tab.Screen name="Cafeinfo" component={Cafeinfo} />
      <Tab.Screen name="Addcafe" component={Addcafe} />
      <Tab.Screen name="Addreview" component={Addreview} /> */}
    </Tab.Navigator>
  )
}
export default function Nav() {
  // 실제로 사용할 각각의 NavigationContainer 입니다.
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Regionlist" component={Regionlist} />
        {/* <Stack.Screen name="Region" component={Region} />
        <Stack.Screen name="Cafeinfo" component={Cafeinfo} />
        <Stack.Screen name="Addcafe" component={Addcafe} />
        <Stack.Screen name="Addreview" component={Addreview} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
