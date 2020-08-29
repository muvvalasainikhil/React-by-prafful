import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ProductDetailComponent(props) {
  const product = props.route.params.item;
  return (
    <ScrollView>
      <View style={mystyle.card}>
        <Image
          source={require("../assets/images/" + product.imageUrl)}
          style={{ width: 230, height: 230 }}
        />
        <Text style={mystyle.textstyle}>{product.name}</Text>
        <Text style={mystyle.detailText}>Price:{product.price}</Text>
        <Text style={mystyle.detailText}>Category: {product.category}</Text>
        <Text style={mystyle.detailText}>Stock :{product.stock}</Text>
        <Text style={mystyle.detailText}>
          Description:{product.description}
        </Text>
      </View>
    </ScrollView>
  );
}
const mystyle = StyleSheet.create({
  card: {
    // backgroundColor: "grey",
    flex: 1,
    marginLeft: 150,
    marginTop: 10,
    marginRight: 150,
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
    // textAlign: "centre",
    justifyContent: "center",
    alignItems: "center",
  },
  textstyle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  detailText: {
    fontSize: 20,
  },
});
