import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FrameComponent1 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.groupContainer, styles.groupLayout1]}>
        <View style={[styles.rectangleWrapper, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
        </View>
        <Text style={[styles.momos, styles.momosTypo]}>Schemes</Text>
      </View>
      <View style={[styles.groupView, styles.chineseLayout]}>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
        </View>
        <Text style={[styles.chinese, styles.chineseTypo]}>News Update</Text>
      </View>
      <View style={[styles.groupParent1, styles.groupParent1Layout]}>
        <View style={[styles.rectangleFrame, styles.groupLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <Text style={[styles.latestMaterials, styles.groupParent1Layout]}>
          Latest Materials
        </Text>
      </View>
      <View style={[styles.groupParent2, styles.groupParent2Layout]}>
        <View style={[styles.rectangleWrapper1, styles.rectanglePosition]}>
          <View style={[styles.rectangleView, styles.rectanglePosition]} />
        </View>
        <Text style={[styles.continueLearning, styles.groupParent2Layout]}>
          Continue Learning
        </Text>
      </View>
      <Image
        style={styles.pngwingcom331}
        contentFit="cover"
        source={require("../assets/pngwingcom-33-1.png")}
      />
      <Image
        style={styles.pngwingcom321}
        contentFit="cover"
        source={require("../assets/pngwingcom-32-1.png")}
      />
      <Image
        style={styles.pngwingcom1001Icon}
        contentFit="cover"
        source={require("../assets/pngwingcom100-1.png")}
      />
      <Image
        style={styles.pngwingcom341}
        contentFit="cover"
        source={require("../assets/pngwingcom-34-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    height: 82,
    top: 34,
  },
  groupChildLayout: {
    height: 54,
    top: 0,
    width: 56,
    position: "absolute",
  },
  groupShadowBox: {
    backgroundColor: Color.colorOrangered_100,
    borderRadius: Border.br_xl,
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  momosTypo: {
    height: 18,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    top: 64,
  },
  chineseLayout: {
    width: 56,
    position: "absolute",
  },
  groupLayout: {
    height: 55,
    width: 55,
    top: 0,
    position: "absolute",
  },
  chineseTypo: {
    color: Color.colorGray_200,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    left: 0,
  },
  groupParent1Layout: {
    width: 65,
    position: "absolute",
  },
  groupParent2Layout: {
    width: 66,
    position: "absolute",
  },
  rectanglePosition: {
    width: 57,
    height: 55,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    height: 54,
    top: 0,
    width: 56,
    position: "absolute",
    left: 0,
    borderRadius: Border.br_xl,
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  rectangleWrapper: {
    left: 4,
    opacity: 0.3,
  },
  momos: {
    color: Color.color,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    height: 18,
    width: 64,
    left: 0,
    position: "absolute",
  },
  groupContainer: {
    left: 17,
    width: 64,
    height: 82,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorOrangered_100,
    borderRadius: Border.br_xl,
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
  },
  rectangleContainer: {
    left: 1,
    opacity: 0.3,
  },
  chinese: {
    top: 63,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    height: 19,
    width: 56,
    position: "absolute",
  },
  groupView: {
    left: 115,
    height: 82,
    top: 34,
  },
  groupInner: {
    backgroundColor: Color.colorOrangered_100,
    borderRadius: Border.br_xl,
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
  },
  rectangleFrame: {
    left: 5,
    opacity: 0.3,
  },
  latestMaterials: {
    height: 17,
    color: Color.colorGray_200,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    left: 0,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    top: 64,
    width: 65,
  },
  groupParent1: {
    left: 205,
    height: 81,
    width: 65,
    top: 34,
  },
  rectangleView: {
    backgroundColor: Color.colorOrangered_100,
    borderRadius: Border.br_xl,
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  rectangleWrapper1: {
    opacity: 0.3,
  },
  continueLearning: {
    color: Color.colorGray_200,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    left: 0,
    height: 18,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    top: 64,
  },
  groupParent2: {
    left: 302,
    height: 82,
    top: 34,
  },
  pngwingcom331: {
    top: 44,
    left: 121,
    width: 44,
    height: 34,
    position: "absolute",
  },
  pngwingcom321: {
    top: 43,
    left: 30,
    width: 38,
    height: 37,
    position: "absolute",
  },
  pngwingcom1001Icon: {
    top: 45,
    left: 313,
    width: 33,
    height: 33,
    position: "absolute",
  },
  pngwingcom341: {
    top: 42,
    left: 218,
    width: 39,
    height: 39,
    position: "absolute",
  },
  groupParent: {
    top: 238,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 359,
    height: 116,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    position: "absolute",
  },
});

export default FrameComponent1;
