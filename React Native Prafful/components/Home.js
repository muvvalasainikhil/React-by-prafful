import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TextInput, Button } from "react-native";
import axios from "axios";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
export default function HomeComponent({ navigation }) {
  const [products, setProducts] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const captureSearch = (value) => {
    let filteredValues = originalList.filter((f) => {
      return f.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });
    setProducts(filteredValues);
  };
  useEffect(() => {
    axios.get("http://localhost:3000/allProducts").then((res) => {
      //   console.log(res.data);
      setProducts(res.data);
      setOriginalList(res.data);
    });
  }, []);
  const deleteItem = (id) => {
    axios.delete("http://localhost:3000/allProducts/" + id).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <ScrollView>
      <TextInput
        placeholder="Search the Product"
        style={mystyle.searchbar}
        onChangeText={captureSearch}
      ></TextInput>
      <View style={mystyle.addButton}>
        <Button
          title="ADD PRODUCT"
          onPress={() => {
            navigation.navigate("ADD_PRODUCT");
          }}
        ></Button>
      </View>

      {products.map((prod) => {
        return (
          <View key={prod.id} style={mystyle.card}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PRODUCT", { item: prod });
              }}
            >
              <Image
                source={require("../assets/images/" + prod.imageUrl)}
                style={{ width: 270, height: 300 }}
              />
              <Text style={mystyle.textstyle}>{prod.name}</Text>
              <Text>Category: {prod.category}</Text>
            </TouchableOpacity>
            <View style={mystyle.detebutton}>
              <Button
                onPress={() => {
                  deleteItem(prod.id);
                }}
                color="#ff0000"
                title="Delete"
              ></Button>
            </View>
            <View style={mystyle.updatebutton}>
              <Button
                onPress={() => {
                  navigation.navigate("UPDATE_PRODUCT", { item: prod });
                }}
                color="#00ff00"
                title="Update"
              ></Button>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
const mystyle = StyleSheet.create({
  card: {
    backgroundColor: "seashell",
    flex: 1,
    marginLeft: 350,
    marginTop: 10,
    marginRight: 350,
    marginBottom: 10,
    width: "10",
    height: "50",
    padding: "10px",
    borderTopColor: "red",
    borderTopWidth: 2,
    justifyContent: "center",
    borderBottomColor: "red",
    borderBottomWidth: 2,
    borderLeftColor: "red",
    borderLeftWidth: 2,
    borderRightColor: "red",
    borderRightWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textstyle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  searchbar: {
    width: 200,
    textAlignVertical: "center",
    textAlign: "center",
    marginLeft: 59,
    marginTop: 10,
    borderBottomColor: "red",
    borderBottomWidth: 1.5,
  },
  addButton: {
    width: 200,
    marginLeft: 100,
    marginTop: 11,
  },
});
