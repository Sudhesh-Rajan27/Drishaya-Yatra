import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FrameComponent4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleParent}>
        <Pressable
          style={styles.groupChild}
          onPress={() => navigation.navigate("LearningModule")}
        />
        <View style={[styles.groupItem, styles.groupItemShadowBox]} />
        <View style={styles.groupInner} />
        <Text style={styles.gujaratiToSign}>Gujarati to Sign Language</Text>
      </View>
      <View style={[styles.englishToSignLanguageWrapper, styles.englishLayout]}>
        <Text style={[styles.englishToSign, styles.englishLayout]}>
          English to Sign Language
        </Text>
      </View>
      <View style={[styles.frameChild, styles.groupItemShadowBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemShadowBox: {
    width: 330,
    opacity: 0.3,
    height: 91,
    backgroundColor: Color.colorGreen,
    borderRadius: Border.br_6xl,
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  englishLayout: {
    width: 205,
    height: 19,
    position: "absolute",
  },
  groupChild: {
    opacity: 0.3,
    height: 91,
    backgroundColor: Color.colorGreen,
    borderRadius: Border.br_6xl,
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: 0,
    top: 0,
    width: 333,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  groupItem: {
    top: 138,
    left: 3,
  },
  groupInner: {
    top: 225,
    left: 8,
    width: 157,
    height: 27,
    justifyContent: "space-between",
    position: "absolute",
  },
  gujaratiToSign: {
    top: 36,
    left: 60,
    width: 211,
    height: 19,
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  rectangleParent: {
    top: 28,
    left: 24,
    height: 252,
    width: 333,
    position: "absolute",
  },
  englishToSign: {
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    width: 205,
    left: 0,
    top: 0,
  },
  englishToSignLanguageWrapper: {
    top: 202,
    left: 87,
  },
  frameChild: {
    top: 400,
    left: 11,
  },
  groupParent: {
    top: 199,
    left: 25,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 381,
    height: 292,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
});

export default FrameComponent4;
