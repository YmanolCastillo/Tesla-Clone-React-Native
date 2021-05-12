import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={image} style={styles.imgBackground} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline}
          {/* {""} */}
          <Text style={styles.tagLineCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {}}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default CarItem;
