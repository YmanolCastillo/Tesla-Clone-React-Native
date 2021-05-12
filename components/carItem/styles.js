import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    alignItems: "center",
    marginTop: "30%",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    color: "#5c5e62",
  },
  imgBackground: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  tagLineCTA: {
    textDecorationLine: "underline",
  },
});

export default styles;
