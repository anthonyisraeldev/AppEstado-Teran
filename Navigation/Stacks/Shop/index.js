import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../../../Screens/CategoriesScreen";
import ProductsScreen from "../../../Screens/ProductsScreen";
import DetailScreen from "../../../Screens/DetailScreen";
import { colors } from "../../../Styles/colors";

const Stack = createNativeStackNavigator();

function ShopNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.lightGreen,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "OpenSansBold",
          fontSize: 28,
        },
        headerTitleAlign: "center",
        // headerTransparent: true,
        // header: () => {
        //   return <Header/>
        // }
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Categorías",
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          title: route.params.categoryTitle,
          headerStyle: {
            backgroundColor:
              route.params.categoryTitle === "Ropa"
                ? colors.darkGreen
                : route.params.categoryTitle === "Electrónica"
                ? "black"
                : colors.darkGreen,
          },
        })}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: colors.darkGreen,
          },
          title: route.params.productTitle,
          headerTintColor: "white",
        })}
      />
    </Stack.Navigator>
  );
}

export default ShopNavigator;

const styles = StyleSheet.create({});
