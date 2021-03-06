import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../Styles/colors";
import { useSelector } from "react-redux";

const DetailScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  const [orientation, setOrientation] = useState("portrait");
  const {
    productSelected: { image, title, description, price, offer },
  } = useSelector((state) => state.products.value);

  useEffect(() => {
    setOrientation(height > width ? "portrait" : "landscape");
  }, [height, width]);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <Image source={image} style={styles.image} />
      <View style={styles.containerContent}>
        <ScrollView
          style={
            orientation === "portrait"
              ? styles.containerVertical
              : styles.containerHorizontal
          }
        >
          {offer && (
            <View style={styles.boxOffer}>
              <Text style={styles.offer}>Oferta</Text>
            </View>
          )}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>$ {price}</Text>
          <TouchableOpacity onPress={handleBack} style={styles.backBtn}>
            <Text style={styles.textBtn}>Regresar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  containerVertical: {
    flex: 1,
    flexDirection: "column",
  },
  containerContent: {
    backgroundColor: colors.lightBeige,
    width: "100%",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    alignSelf: "center",
    paddingBottom: 100,
  },
  containerHorizontal: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 0.8 * Dimensions.get("window").width,
    height: 300,
    marginTop: 30,
    alignSelf: "center",
    borderRadius: 18,
    marginBottom: 30,
    shadowColor: "#cccccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.42,
    shadowRadius: 4.22,
  },
  backBtn: {
    backgroundColor: "#6200ff",
    width: 300,
    borderRadius: 5,
    padding: 10,
    alignSelf: "center",
  },
  textBtn: {
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "OpenSansBold",
  },
  title: {
    fontSize: 20,
    fontFamily: "OpenSansBold",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontFamily: "OpenSansBold",
    paddingBottom: 20,
  },
  boxOffer: {
    borderRadius: 4,
    backgroundColor: "#b8ceff",
    marginTop: 10,
    width: 60,
    marginBottom: 10,
  },
  offer: {
    textAlign: "center",
    color: "#407bff",
    fontFamily: "OpenSansBold",
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 12,
  },
});
