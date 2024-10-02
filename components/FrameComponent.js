import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Gap } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={[styles.emailAddressParent, styles.emailPosition]}>
      <View style={styles.emailLayout}>
        <View style={[styles.emailAddressChild, styles.emailLayout]} />
        <Text style={[styles.emailAddress1, styles.password1Typo]}>
          Email Address
        </Text>
        <Image
          style={styles.mailFill0Wght400Grad0Opsz4Icon}
          contentFit="cover"
          source={require("../assets/mail-fill0-wght400-grad0-opsz48-1-1.png")}
        />
      </View>
      <View style={styles.emailLayout}>
        <View style={[styles.emailAddressChild, styles.emailLayout]} />
        <Text style={[styles.password1, styles.password1Typo]}>Password</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={styles.mailFill0Wght400Grad0Opsz4Icon}
          contentFit="cover"
          source={require("../assets/lock-fill0-wght400-grad0-opsz48-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailPosition: {
    top: 0,
    position: "absolute",
  },
  emailLayout: {
    height: 52,
    width: 323,
  },
  password1Typo: {
    opacity: 0.5,
    color: Color.color,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_mid_4,
    top: 17,
    position: "absolute",
  },
  emailAddressChild: {
    marginLeft: -161.35,
    left: "50%",
    borderRadius: 9,
    backgroundColor: Color.fFFFFF,
    top: 0,
    position: "absolute",
  },
  emailAddress1: {
    left: 53,
    textAlign: "center",
  },
  mailFill0Wght400Grad0Opsz4Icon: {
    top: 16,
    left: 17,
    width: 21,
    height: 21,
    overflow: "hidden",
    position: "absolute",
  },
  password1: {
    left: 47,
    textAlign: "left",
  },
  vectorIcon: {
    height: "27.72%",
    top: "36.71%",
    right: 20,
    bottom: "35.56%",
    maxHeight: "100%",
    width: 22,
    position: "absolute",
  },
  emailAddressParent: {
    left: 0,
    gap: Gap.gap_md,
  },
});

export default FrameComponent;
