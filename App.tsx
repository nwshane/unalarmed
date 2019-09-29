import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddAlarmButton from "./components/AddAlarmButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  header: {
    fontSize: 30
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Unalarmed</Text>
        <Text>6 AM</Text>
        <Text>7 AM</Text>
      </View>
      <AddAlarmButton />
    </View>
  );
}
