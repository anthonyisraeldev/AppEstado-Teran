import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../Styles/colors";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.description}</Text>
      </View>
      <View style={styles.detail}>
        <View>
          <Text style={styles.text}>Cantidad: {item.quantity}</Text>
          <Text style={styles.text}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons style={styles.btnDelete} name="trash" size={24}></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,

    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    shadowColor: "#b1b1b1",
    marginBottom: 15,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 10.42,
    shadowRadius: 2,
    elevation: 10,
  },
  header: {
    fontSize: 18,
    fontFamily: "OpenSansBold",
    color: "#1e1f3a",
  },
  btnDelete: {
    color: "red",
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontFamily: "OpenSansRegular",
  },
});
