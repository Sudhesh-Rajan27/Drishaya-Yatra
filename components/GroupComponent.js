import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import FrameComponent from "./FrameComponent";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GroupComponent = () => {
  return (
    <View style={styles.frameParent}>
      <FrameComponent />
      <Text style={styles.forgotPassword}>Forgot password?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    top: 135,
    left: 12,
    fontSize: FontSize.buttonSmall_size,
    fontFamily: FontFamily.urbanistRegular,
    color: Color.color,
    textAlign: "right",
    position: "absolute",
  },
  frameParent: {
    top: 463,
    left: 26,
    width: 323,
    height: 152,
    position: "absolute",
  },
});

export default GroupComponent;
