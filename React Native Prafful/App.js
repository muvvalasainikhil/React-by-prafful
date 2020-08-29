import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import MyStackNavigator from "./routes/stacknavigation";

export default function App() {
  return <MyStackNavigator />;
}
