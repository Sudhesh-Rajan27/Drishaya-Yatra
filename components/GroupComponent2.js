import * as React from "react";
import { StyleSheet, View } from "react-native";
import FrameComponent from "./FrameComponent";

const GroupComponent2 = () => {
  return (
    <View style={styles.signUpPageInner}>
      <FrameComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpPageInner: {
    position: "absolute",
    top: 390,
    left: 26,
    width: 323,
    height: 122,
  },
});

export default GroupComponent2;
