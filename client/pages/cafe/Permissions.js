import React, { useState, useEffect } from "react"
import { Text, View, StyleSheet } from "react-native"
import * as Location from "expo-location"

const Permissions = () => {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [city, setCity] = useState("city")
  useEffect(() => {
    ;async () => {
      let { status } = await Location.requestPermissionsAsync()
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied")
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)

      Location.setApiKey(process.env.REACT_APP_LOCATION_API_KEY)

      await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }).then((data) => {
        setCity(data[0].city)
      })
    }
  })

  let text = "Waiting.."
  if (errorMsg) {
    text = errorMsg
  } else if (city) {
    text = JSON.stringify(city)
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Allowlocation
