import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";

const formatDay = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ item }) => {
  return (
    <View style={styles.order}>
      <View style={styles.container}>
        <Text style={styles.date}>{formatDay(item.date)}</Text>
        <Text style={styles.total}>${item.total}</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  order: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: colors.lightBeige,
    borderRadius: 10,
    width: 300,
    alignSelf: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  date: {
    fontSize: 18,
    marginBottom: 10,
    paddingBottom: 5,
    backgroundColor: colors.lightGreen,
    color: "#ffffff",
    padding: 5,
    borderRadius: 5,
  },
  total: {
    fontSize: 18,
    fontFamily: "OpenSansBold",
  },
});
