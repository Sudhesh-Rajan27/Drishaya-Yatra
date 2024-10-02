import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={[styles.ellipseParent, styles.frameItemPosition]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <LinearGradient
          style={[styles.frameItem, styles.frameItemPosition]}
          locations={[0, 1]}
          colors={["#fef2e6", "#f0f5e6"]}
        />
        <View
          style={[
            styles.innovativeLearningForInclusParent,
            styles.innovativePosition,
          ]}
        >
          <Text style={[styles.innovativeLearningFor, styles.innovativeTypo]}>
            Innovative Learning for Inclusive Horizons
          </Text>
          <View style={[styles.searchBar, styles.searchLayout1]}>
            <View style={styles.rectangleViewShadowBox} />
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
          <Text style={[styles.popularNow, styles.usesTypo]}>Popular now</Text>
          <Text style={[styles.featured, styles.featuredTypo]}>Featured</Text>
          <FrameComponent3 />
          <Image
            style={styles.pngwingcom161}
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
      <View style={[styles.ellipseParent, styles.frameItemPosition]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <LinearGradient
          style={[styles.frameItem, styles.frameItemPosition]}
          locations={[0, 1]}
          colors={["#fef2e6", "#f0f5e6"]}
        />
        <View
          style={[
            styles.innovativeLearningForInclusGroup,
            styles.innovativePosition,
          ]}
        >
          <Text style={[styles.innovativeLearningFor1, styles.innovativeTypo]}>
            Innovative Learning for Inclusive Horizons
          </Text>
          <View style={[styles.searchBar1, styles.searchLayout1]}>
            <View style={styles.rectangleViewShadowBox} />
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
          <FrameComponent5 />
          <Text style={[styles.uses, styles.usesTypo]}>Uses</Text>
          <Text style={[styles.featured1, styles.featuredTypo]}>Featured</Text>
          <FrameComponent6 />
          <Pressable
            style={styles.pngwingcom161}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/pngwingcom-16-1.png")}
            />
          </Pressable>
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
        <Image
          style={styles.imageRemovebgPreview11}
          contentFit="cover"
          source={require("../assets/imageremovebgpreview-1-11.png")}
        />
        <Text style={styles.innovativeLearningFor2}>
          Innovative Learning for Inclusive Horizons
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
      <Image
        style={[styles.homeIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("LearningModule")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <View style={styles.homeChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameItemPosition: {
    height: 844,
    top: 0,
    position: "absolute",
  },
  innovativePosition: {
    width: 396,
    left: 25,
    position: "absolute",
  },
  innovativeTypo: {
    height: 71,
    width: 342,
    fontSize: FontSize.size_13xl,
    left: 17,
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.urbanistBlack,
    fontWeight: "900",
    position: "absolute",
  },
  searchLayout1: {
    height: 32,
    width: 359,
    left: 12,
    position: "absolute",
  },
  searchLayout: {
    height: 28,
    width: 28,
    top: 2,
    position: "absolute",
  },
  usesTypo: {
    height: 33,
    width: 358,
    left: 11,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.urbanistBlack,
    fontWeight: "900",
    position: "absolute",
  },
  featuredTypo: {
    left: 13,
    height: 33,
    width: 358,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.urbanistBlack,
    fontWeight: "900",
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
  iconLayout: {
    height: "100%",
    width: "100%",
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
    width: 390,
    backgroundColor: "transparent",
    borderRadius: Border.br_11xl,
    height: 844,
  },
  innovativeLearningFor: {
    top: 67,
  },
  rectangleViewShadowBox: {
    backgroundColor: Color.fFFFFF,
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    left: 0,
    height: 32,
    width: 359,
    top: 0,
    position: "absolute",
  },
  searchBarItem: {
    left: 294,
  },
  searchBarInner: {
    left: 327,
  },
  search: {
    top: 4,
    left: 14,
    fontWeight: "200",
    fontFamily: FontFamily.urbanistExtraLight,
    color: Color.colorSilver_100,
    width: 62,
    height: 24,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  searchBar: {
    top: 180,
  },
  popularNow: {
    top: 402,
  },
  featured: {
    top: 235,
  },
  pngwingcom161: {
    left: 325,
    width: 39,
    height: 39,
    top: 0,
    position: "absolute",
  },
  innovativeLearningForInclusParent: {
    top: 32,
    height: 700,
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
    width: 430,
  },
  innovativeLearningFor1: {
    top: 81,
  },
  searchBar1: {
    top: 194,
  },
  uses: {
    top: 416,
  },
  featured1: {
    top: 249,
  },
  innovativeLearningForInclusGroup: {
    top: 18,
    height: 714,
  },
  imageRemovebgPreview11: {
    top: 14,
    left: 31,
    width: 148,
    height: 46,
    position: "absolute",
  },
  innovativeLearningFor2: {
    top: 41,
    left: 70,
    fontSize: FontSize.size_8xs,
    width: 98,
    height: 4,
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.urbanistBlack,
    fontWeight: "900",
    position: "absolute",
  },
  vectorIcon2: {
    height: "3.32%",
    width: "5.35%",
    top: "89.69%",
    right: "10.93%",
    bottom: "6.99%",
    left: "83.72%",
    position: "absolute",
  },
  homeIcon: {
    height: "3.2%",
    width: "6.31%",
    top: "93.23%",
    right: "88.56%",
    bottom: "3.57%",
    left: "5.13%",
    position: "absolute",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "47.69%",
    top: "92.87%",
    right: "45.87%",
    bottom: "3.44%",
    width: "6.44%",
    height: "3.69%",
    position: "absolute",
  },
  homeChild: {
    top: 735,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_500,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    left: 0,
    position: "absolute",
  },
  home: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 813,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_11xl,
  },
});

export default Home;
