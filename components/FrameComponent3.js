import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FrameComponent3 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <View style={styles.groupInner} />
        <Text style={styles.learningModule}>Learning Module</Text>
      </View>
      <View
        style={[styles.communicationToolWrapper, styles.communicationLayout]}
      >
        <Text style={[styles.communicationTool, styles.communicationLayout]}>
          Communication Tool
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupShadowBox: {
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
  communicationLayout: {
    width: 169,
    height: 19,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
    height: 91,
    backgroundColor: Color.colorGreen,
    borderRadius: Border.br_6xl,
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 333,
  },
  groupItem: {
    top: 101,
    left: 3,
    width: 330,
  },
  groupInner: {
    top: 178,
    left: 8,
    width: 157,
    height: 27,
    justifyContent: "space-between",
    position: "absolute",
  },
  learningModule: {
    top: 36,
    left: 96,
    width: 140,
    height: 19,
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  rectangleParent: {
    top: 25,
    left: 11,
    height: 205,
    width: 333,
    position: "absolute",
  },
  communicationTool: {
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    width: 169,
    left: 0,
    top: 0,
  },
  communicationToolWrapper: {
    top: 162,
    left: 95,
  },
  groupParent: {
    top: 408,
    left: 15,
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

export default FrameComponent3;
