import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Searcher from "../Components/Searcher";
import { colors } from "../Styles/colors";
import List from "../Components/List";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../features/categories";
import { setProductsByCategory } from "../features/products";

const CategoriesScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [categoriesFilter, setCategoriesFilter] = useState("");

  const { categories } = useSelector((state) => state.categories.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (input === "") setCategoriesFilter(categories);
    else {
      console.log("Se ejecuta el efecto");
      const categoriasFiltradas = categories.filter((category) =>
        category.category.toLowerCase().includes(input.toLowerCase())
      );
      setCategoriesFilter(categoriasFiltradas);
    }
  }, [input]);

  const handleErase = () => {
    setInput("");
  };

  const handleSelectedCategory = (category) => {
    dispatch(setProductsByCategory(category.id));
    dispatch(selectCategory(category.id));
    navigation.push("Products", {
      categoryId: category.id,
      categoryTitle: category.category,
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Searcher
          additionalStyles={{
            backgroundColor: colors.lightGreen,
          }}
        >
          <TextInput
            value={input}
            onChangeText={setInput}
            keyboardType="default"
            style={styles.input}
            placeholder="Ingrese categoría a buscar..."
            placeholderTextColor="#4a4a4a"
          />
          <TouchableOpacity onPress={handleErase}>
            <Entypo name="erase" size={30} color="white" />
          </TouchableOpacity>
        </Searcher>
        <View style={styles.listContainer}>
          <List data={categoriesFilter} onPress={handleSelectedCategory} />
        </View>
      </View>
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
    width: "80%",
    padding: 10,
    margin: 10,
    backgroundColor: "#cccccc",
    borderRadius: 10,
    color: "black",
    height: 50,
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.lightBeige,
    width: "100%",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 25,
  },
});
