import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContinueWithGoogle = ({ loginWithGoogle, socialIcons, propWidth }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={styles.continueLayout}>
      <View style={[styles.continueWithGoogleChild, styles.continueLayout]} />
      <View
        style={[
          styles.loginWithGoogleParent,
          styles.socialIconsLayout,
          groupViewStyle,
        ]}
      >
        <Text style={styles.loginWithGoogle}>{loginWithGoogle}</Text>
        <Image
          style={[styles.socialIcons, styles.socialIconsLayout]}
          contentFit="cover"
          source={socialIcons}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continueLayout: {
    height: 61,
    width: 340,
  },
  socialIconsLayout: {
    height: 26,
    position: "absolute",
  },
  continueWithGoogleChild: {
    marginLeft: -170.05,
    left: "50%",
    borderRadius: 9,
    backgroundColor: Color.fFFFFF,
    top: 0,
    position: "absolute",
  },
  loginWithGoogle: {
    top: 1,
    left: 45,
    fontSize: FontSize.size_lgi_2,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    color: Color.color,
    textAlign: "left",
    position: "absolute",
  },
  socialIcons: {
    left: 0,
    width: 28,
    overflow: "hidden",
    top: 0,
  },
  loginWithGoogleParent: {
    top: 17,
    left: 71,
    width: 198,
  },
});

export default ContinueWithGoogle;
