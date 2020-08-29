import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeComponent from "../components/Home";
import ProductDetailComponent from "../components/Productdetail";
import { TextInput } from "react-native-gesture-handler";
import AddProductComponent from "../components/AddProduct";
import UpdateProductComponent from "../components/UpdateProduct";

const Stack = createStackNavigator();

function MyStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: "brown",
            height: 50,
          },
        }}
        headerMode="float"
      >
        <Stack.Screen name="Home" component={HomeComponent}></Stack.Screen>
        <Stack.Screen
          name="PRODUCT"
          component={ProductDetailComponent}
        ></Stack.Screen>
        <Stack.Screen
          name="ADD_PRODUCT"
          component={AddProductComponent}
        ></Stack.Screen>
      </Stack.Navigator>

      <Stack.Screen
        name="UPDATE_PRODUCT"
        component={UpdateProductComponent}
      ></Stack.Screen>
    </NavigationContainer>
  );
}

export default MyStackNavigator;
