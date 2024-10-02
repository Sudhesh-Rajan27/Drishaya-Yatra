import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent3 from "../components/FrameComponent3";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LearningModule = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.learningModule}>
      <View style={[styles.ellipseParent, styles.parentLayout]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <LinearGradient
          style={styles.frameItem}
          locations={[0, 1]}
          colors={["#fef2e6", "#f0f5e6"]}
        />
        <View style={styles.innovativeLearningForInclusParent}>
          <Text style={[styles.innovativeLearningFor, styles.innovativeTypo]}>
            Innovative Learning for Inclusive Horizons
          </Text>
          <View style={[styles.searchBar, styles.searchLayout1]}>
            <View style={[styles.searchBarChild, styles.searchLayout1]} />
            <Image
              style={[styles.searchBarItem, styles.searchLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.searchBarInner, styles.searchLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Text style={styles.search}>Search</Text>
          </View>
          <FrameComponent1 />
          <Text style={[styles.popularNow, styles.featuredTypo]}>
            Popular now
          </Text>
          <Text style={[styles.featured, styles.featuredTypo]}>Featured</Text>
          <FrameComponent3 />
          <Image
            style={[styles.pngwingcom161, styles.pngwingcomLayout1]}
            contentFit="cover"
            source={require("../assets/pngwingcom-16-1.png")}
          />
        </View>
        <Image
          style={styles.pngwingcom141}
          contentFit="cover"
          source={require("../assets/pngwingcom-14-1.png")}
        />
        <View style={styles.navPop}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[
              styles.settingsFill0Wght400Grad0OIcon,
              styles.fill0IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/settings-fill0-wght400-grad0-opsz48-1.png")}
          />
          <Image
            style={[
              styles.sellFill0Wght400Grad0Opsz4Icon,
              styles.fill0IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/sell-fill0-wght400-grad0-opsz48-1.png")}
          />
          <Text style={[styles.offerAndPromo, styles.locationTypo]}>
            Offer and promo
          </Text>
          <Text style={[styles.recentOrders, styles.locationTypo]}>
            Recent Orders
          </Text>
          <Image
            style={[
              styles.locationOnFill0Wght400GradIcon,
              styles.fill0IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/location-on-fill0-wght400-grad0-opsz48-1.png")}
          />
          <Text style={[styles.location, styles.locationTypo]}>Location</Text>
          <Text style={[styles.settings, styles.locationTypo]}>Settings</Text>
          <Image
            style={[
              styles.shieldFill0Wght400Grad0OpsIcon,
              styles.fill0IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/shield-fill0-wght400-grad0-opsz48-1.png")}
          />
          <Text style={[styles.security, styles.locationTypo]}>Security</Text>
          <Image
            style={[
              styles.descriptionFill0Wght400GradIcon,
              styles.fill0IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/description-fill0-wght400-grad0-opsz48-1.png")}
          />
          <Text style={[styles.privacyPolicy, styles.locationTypo]}>
            Privacy Policy
          </Text>
        </View>
        <Image
          style={styles.pngwingcom191}
          contentFit="cover"
          source={require("../assets/pngwingcom-19-1.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.parentLayout]}>
        <LinearGradient
          style={styles.frameItem}
          locations={[0, 1]}
          colors={["#fef2e6", "#f0f5e6"]}
        />
        <View style={styles.navPop}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[
              styles.settingsFill0Wght400Grad0OIcon,
              styles.fill0IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/settings-fill0-wght400-grad0-opsz48-1.png")}
          />
          <Image
            style={[
              styles.sellFill0Wght400Grad0Opsz4Icon,
              styles.fill0IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/sell-fill0-wght400-grad0-opsz48-1.png")}
          />
          <Text style={[styles.offerAndPromo, styles.locationTypo]}>
            Offer and promo
          </Text>
          <Text style={[styles.recentOrders, styles.locationTypo]}>
            Recent Orders
          </Text>
          <Image
            style={[
              styles.locationOnFill0Wght400GradIcon,
              styles.fill0IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/location-on-fill0-wght400-grad0-opsz48-1.png")}
          />
          <Text style={[styles.location, styles.locationTypo]}>Location</Text>
          <Text style={[styles.settings, styles.locationTypo]}>Settings</Text>
          <Image
            style={[
              styles.shieldFill0Wght400Grad0OpsIcon,
              styles.fill0IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/shield-fill0-wght400-grad0-opsz48-1.png")}
          />
          <Text style={[styles.security, styles.locationTypo]}>Security</Text>
          <Image
            style={[
              styles.descriptionFill0Wght400GradIcon,
              styles.fill0IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/description-fill0-wght400-grad0-opsz48-1.png")}
          />
          <Text style={[styles.privacyPolicy, styles.locationTypo]}>
            Privacy Policy
          </Text>
        </View>
        <Image
          style={[styles.pngwingcom361, styles.pngwingcomLayout]}
          contentFit="cover"
          source={require("../assets/pngwingcom-36-1.png")}
        />
        <Image
          style={[styles.pngwingcom362, styles.pngwingcomLayout]}
          contentFit="cover"
          source={require("../assets/pngwingcom-36-1.png")}
        />
        <Image
          style={[styles.pngwingcom363, styles.pngwingcomLayout]}
          contentFit="cover"
          source={require("../assets/pngwingcom-36-1.png")}
        />
        <Image
          style={[styles.pngwingcom364, styles.pngwingcomLayout]}
          contentFit="cover"
          source={require("../assets/pngwingcom-36-1.png")}
        />
        <Pressable
          style={[styles.pngwingcom1611, styles.pngwingcomLayout1]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/pngwingcom-16-1.png")}
          />
        </Pressable>
        <Image
          style={styles.imageRemovebgPreview11}
          contentFit="cover"
          source={require("../assets/imageremovebgpreview-1-11.png")}
        />
        <Text
          style={[styles.innovativeLearningFor1, styles.arrowRightPosition]}
        >
          Innovative Learning for Inclusive Horizons
        </Text>
      </View>
      <View style={[styles.learningModuleChild, styles.learningChildLayout]} />
      <View style={[styles.learningModuleItem, styles.learningLayout]} />
      <View style={[styles.learningModuleInner, styles.learningLayout]} />
      <View style={[styles.rectangleView, styles.learningLayout]} />
      <View style={[styles.learningModuleChild1, styles.learningLayout]} />
      <View style={[styles.learningModuleChild2, styles.learningChildLayout]} />
      <View style={[styles.learningModuleChild3, styles.learningChildLayout]} />
      <View style={[styles.learningModuleChild4, styles.learningChildLayout]} />
      <Text
        style={[styles.alphabetsSignLanguage, styles.learningModule1Layout]}
      >
        Alphabets (Sign Language)
      </Text>
      <Text style={[styles.aZ, styles.aZTypo]}>A - Z letters</Text>
      <Text style={[styles.aZ1, styles.aZTypo]}>A - Z with words</Text>
      <Text style={styles.aZ2}>A - Z Single Hand</Text>
      <Text style={[styles.aZ3, styles.aZTypo]}>A - Z Double Hand</Text>
      <Text style={[styles.learningModule1, styles.learningModule1Layout]}>
        Learning Module
      </Text>
      <Text style={[styles.numbers, styles.numbersClr]}>Numbers</Text>
      <Text style={[styles.sciencesAndEnvironment, styles.numbersClr]}>
        Sciences and Environment
      </Text>
      <Text style={[styles.mathematics, styles.numbersClr]}>Mathematics</Text>
      <Pressable
        style={styles.home}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/home1.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon2, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <View style={[styles.learningModuleChild5, styles.lineViewBorder]} />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Text style={[styles.completed, styles.completedTypo]}>
        15% completed
      </Text>
      <Text style={[styles.hr47mRemaining, styles.completedTypo]}>
        2hr 47m remaining
      </Text>
      <Pressable
        style={[styles.arrowRight, styles.arrowRightPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowright.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon3, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 844,
    width: 430,
    position: "absolute",
  },
  innovativeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.urbanistBlack,
    fontWeight: "900",
    color: Color.color,
  },
  searchLayout1: {
    height: 32,
    width: 359,
    position: "absolute",
  },
  searchLayout: {
    height: 28,
    width: 28,
    top: 2,
    position: "absolute",
  },
  featuredTypo: {
    height: 33,
    width: 358,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.urbanistBlack,
    fontWeight: "900",
    position: "absolute",
  },
  pngwingcomLayout1: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fill0IconLayout: {
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  locationTypo: {
    color: Color.fFFFFF,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    fontSize: FontSize.buttonSmall_size,
    textAlign: "left",
    position: "absolute",
  },
  pngwingcomLayout: {
    height: 14,
    width: 14,
    left: 377,
    position: "absolute",
  },
  arrowRightPosition: {
    top: 61,
    position: "absolute",
  },
  learningChildLayout: {
    height: 50,
    backgroundColor: Color.colorOrangered_200,
    left: 0,
    width: 390,
    position: "absolute",
  },
  learningLayout: {
    opacity: 0.3,
    height: 40,
    width: 346,
    backgroundColor: Color.colorGreen,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  learningModule1Layout: {
    height: 21,
    width: 283,
    fontFamily: FontFamily.urbanistRegular,
    textAlign: "left",
    position: "absolute",
  },
  aZTypo: {
    color: Color.colorDimgray_100,
    left: 39,
    height: 21,
    width: 283,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  numbersClr: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  lineViewBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  completedTypo: {
    color: Color.colorDimgray_400,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.urbanistRegular,
    textAlign: "left",
    position: "absolute",
  },
  frameChild: {
    top: 36,
    left: 52,
    width: 30,
    height: 30,
    position: "absolute",
  },
  frameItem: {
    left: 20,
    backgroundColor: "transparent",
    width: 390,
    height: 844,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  innovativeLearningFor: {
    top: 67,
    fontSize: FontSize.size_13xl,
    width: 342,
    height: 71,
    left: 17,
    position: "absolute",
  },
  searchBarChild: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.fFFFFF,
    left: 0,
    top: 0,
  },
  searchBarItem: {
    left: 294,
  },
  searchBarInner: {
    left: 327,
  },
  search: {
    top: 4,
    fontWeight: "200",
    fontFamily: FontFamily.urbanistExtraLight,
    color: Color.colorSilver_100,
    width: 62,
    height: 24,
    fontSize: FontSize.size_xl,
    left: 14,
    textAlign: "left",
    position: "absolute",
  },
  searchBar: {
    top: 180,
    left: 12,
  },
  popularNow: {
    top: 402,
    left: 11,
  },
  featured: {
    top: 235,
    left: 13,
  },
  pngwingcom161: {
    left: 325,
    top: 0,
  },
  innovativeLearningForInclusParent: {
    top: 32,
    left: 25,
    width: 396,
    height: 700,
    position: "absolute",
  },
  pngwingcom141: {
    left: 336,
    width: 19,
    height: 19,
    top: 219,
    position: "absolute",
  },
  vectorIcon: {
    height: "5.22%",
    width: "3.53%",
    top: "18.28%",
    right: "41.87%",
    bottom: "76.5%",
    left: "54.59%",
    position: "absolute",
  },
  settingsFill0Wght400Grad0OIcon: {
    left: 430,
    top: 219,
  },
  sellFill0Wght400Grad0Opsz4Icon: {
    left: 428,
    top: 0,
  },
  offerAndPromo: {
    top: 5,
    left: 460,
  },
  recentOrders: {
    top: 70,
    left: 339,
  },
  locationOnFill0Wght400GradIcon: {
    top: 138,
    left: 228,
  },
  location: {
    top: 142,
    left: 260,
  },
  settings: {
    top: 223,
    left: 188,
  },
  shieldFill0Wght400Grad0OpsIcon: {
    top: 289,
    left: 104,
  },
  security: {
    top: 293,
    left: 136,
  },
  descriptionFill0Wght400GradIcon: {
    top: 358,
    left: 0,
  },
  privacyPolicy: {
    top: 362,
    left: 32,
  },
  navPop: {
    height: "45.38%",
    width: "131.63%",
    top: "15.28%",
    right: "156.98%",
    bottom: "39.34%",
    left: "-188.6%",
    position: "absolute",
  },
  pngwingcom191: {
    top: 220,
    left: 368,
    width: 21,
    height: 18,
    position: "absolute",
  },
  ellipseParent: {
    left: -20,
    top: 0,
  },
  pngwingcom361: {
    top: 197,
  },
  pngwingcom362: {
    top: 454,
  },
  pngwingcom363: {
    top: 519,
  },
  pngwingcom364: {
    top: 578,
  },
  pngwingcom1611: {
    left: 351,
    top: 38,
  },
  imageRemovebgPreview11: {
    top: 34,
    left: 30,
    width: 148,
    height: 46,
    position: "absolute",
  },
  innovativeLearningFor1: {
    left: 69,
    fontSize: FontSize.size_8xs,
    width: 98,
    height: 4,
    textAlign: "left",
    fontFamily: FontFamily.urbanistBlack,
    fontWeight: "900",
    color: Color.color,
  },
  rectangleParent: {
    top: -18,
    left: -16,
  },
  learningModuleChild: {
    top: 158,
  },
  learningModuleItem: {
    top: 218,
    left: 14,
  },
  learningModuleInner: {
    top: 267,
    left: 14,
  },
  rectangleView: {
    top: 316,
    left: 15,
  },
  learningModuleChild1: {
    top: 365,
    left: 15,
  },
  learningModuleChild2: {
    top: 415,
  },
  learningModuleChild3: {
    top: 479,
  },
  learningModuleChild4: {
    top: 543,
  },
  alphabetsSignLanguage: {
    top: 174,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    width: 283,
    left: 15,
  },
  aZ: {
    top: 228,
  },
  aZ1: {
    top: 277,
  },
  aZ2: {
    top: 326,
    left: 39,
    height: 21,
    width: 283,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.color,
    position: "absolute",
  },
  aZ3: {
    top: 374,
  },
  learningModule1: {
    top: 87,
    fontSize: FontSize.size_2xl,
    left: 14,
    width: 283,
    color: Color.color,
  },
  numbers: {
    top: 432,
    fontFamily: FontFamily.urbanistRegular,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 17,
    position: "absolute",
  },
  sciencesAndEnvironment: {
    top: 495,
    fontFamily: FontFamily.urbanistRegular,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 17,
    position: "absolute",
  },
  mathematics: {
    top: 558,
    fontFamily: FontFamily.urbanistRegular,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 17,
    position: "absolute",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  home: {
    left: "5.13%",
    top: "92.99%",
    right: "88.56%",
    bottom: "3.81%",
    width: "6.31%",
    height: "3.2%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "3.69%",
    width: "6.44%",
    top: "92.74%",
    right: "46.38%",
    bottom: "3.57%",
    left: "47.18%",
    position: "absolute",
  },
  lineView: {
    top: 735,
    borderColor: Color.colorDimgray_500,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    left: 0,
  },
  learningModuleChild5: {
    top: 126,
    borderColor: "rgba(97, 97, 97, 0.2)",
    borderTopWidth: 5,
    width: 360,
    height: 5,
    left: 15,
  },
  lineIcon: {
    top: 128,
    width: 48,
    height: 0,
    left: 17,
    position: "absolute",
  },
  completed: {
    top: 132,
    left: 17,
  },
  hr47mRemaining: {
    top: 129,
    left: 268,
  },
  icon2: {
    overflow: "hidden",
  },
  arrowRight: {
    left: 10,
    width: 24,
    height: 24,
  },
  vectorIcon3: {
    height: "3.44%",
    width: "5.9%",
    top: "92.87%",
    right: "4.62%",
    bottom: "3.69%",
    left: "89.49%",
    position: "absolute",
  },
  learningModule: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 813,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_11xl,
  },
});

export default LearningModule;
