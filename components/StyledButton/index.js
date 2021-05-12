import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const { type, content, onPress } = props;

  // Background Color
  const backgroundColor = type === "primary" ? "black" : "white";
  //Text Color
  const textColor = type === "secondary" ? "black" : "white";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
