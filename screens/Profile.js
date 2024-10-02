import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigation } from "@react-navigation/native";
import Headers1 from "../components/Headers1";
import Profile1 from "../components/Profile1";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={[styles.ellipseParent, styles.ellipsePosition]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <LinearGradient
          style={[styles.frameItem, styles.ellipsePosition]}
          locations={[0, 1]}
          colors={["#fef2e6", "#f0f5e6"]}
        />
        <View style={styles.innovativeLearningForInclusParent}>
          <Text style={[styles.innovativeLearningFor, styles.innovativeTypo]}>
            Innovative Learning for Inclusive Horizons
          </Text>
          <View style={[styles.searchBar, styles.searchLayout2]}>
            <View style={[styles.searchBarChild, styles.searchLayout2]} />
            <Image
              style={[styles.searchBarItem, styles.searchLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.searchBarInner, styles.searchLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Text style={[styles.search, styles.searchLayout]}>Search</Text>
          </View>
          <FrameComponent1 />
          <Text style={[styles.popularNow, styles.featuredTypo]}>
            Popular now
          </Text>
          <Text style={[styles.featured, styles.featuredTypo]}>Featured</Text>
          <FrameComponent2 />
          <Image
            style={[styles.pngwingcom161, styles.pngwingcomLayout]}
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
            style={[styles.vectorIcon, styles.iconLayout2]}
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
      <View style={[styles.ellipseGroup, styles.ellipsePosition]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <LinearGradient
          style={[styles.frameItem, styles.ellipsePosition]}
          locations={[0, 1]}
          colors={["#fef2e6", "#f0f5e6"]}
        />
        <View style={styles.navPop}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout2]}
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
          style={styles.imageRemovebgPreview11}
          contentFit="cover"
          source={require("../assets/imageremovebgpreview-1-11.png")}
        />
        <Text style={[styles.innovativeLearningFor1, styles.innovativeTypo]}>
          Innovative Learning for Inclusive Horizons
        </Text>
        <Pressable
          style={[styles.pngwingcom1611, styles.pngwingcomLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/pngwingcom-16-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.arrowRight, styles.searchLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/arrowright.png")}
          />
        </Pressable>
        <View style={styles.pngwingcom441} />
        <Headers1
          text="Profile"
          showPreviosButton48pxIcon={false}
          headersPosition="absolute"
          headersWidth={82}
          headersTop={122}
          headersLeft={182}
        />
        <Profile1 />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Image
          style={[styles.pngwingcom431, styles.fill0IconLayout]}
          contentFit="cover"
          source={require("../assets/pngwingcom-43-1.png")}
        />
      </View>
      <Image
        style={[styles.homeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("LearningModule")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <View style={styles.profileChild} />
      <Image
        style={[styles.vectorIcon2, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipsePosition: {
    height: 844,
    top: 0,
    position: "absolute",
  },
  innovativeTypo: {
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.urbanistBlack,
    fontWeight: "900",
    position: "absolute",
  },
  searchLayout2: {
    height: 32,
    width: 359,
    position: "absolute",
  },
  searchLayout1: {
    height: 28,
    width: 28,
    top: 2,
    position: "absolute",
  },
  searchLayout: {
    height: 24,
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
  pngwingcomLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fill0IconLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  locationTypo: {
    color: Color.fFFFFF,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    fontSize: FontSize.buttonSmall_size,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    top: "92.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorPosition: {
    bottom: "3.57%",
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
    width: 390,
    backgroundColor: "transparent",
    height: 844,
    borderRadius: Border.br_11xl,
  },
  innovativeLearningFor: {
    top: 67,
    left: 17,
    fontSize: FontSize.size_13xl,
    width: 342,
    height: 71,
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
    left: 14,
    fontWeight: "200",
    fontFamily: FontFamily.urbanistExtraLight,
    color: Color.colorSilver_100,
    width: 62,
    fontSize: FontSize.size_xl,
    height: 24,
    textAlign: "left",
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
    overflow: "hidden",
  },
  sellFill0Wght400Grad0Opsz4Icon: {
    left: 428,
    top: 0,
    overflow: "hidden",
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
    overflow: "hidden",
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
    overflow: "hidden",
  },
  security: {
    top: 293,
    left: 136,
  },
  descriptionFill0Wght400GradIcon: {
    top: 358,
    left: 0,
    overflow: "hidden",
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
    height: 844,
  },
  imageRemovebgPreview11: {
    top: 14,
    left: 31,
    width: 148,
    height: 46,
    position: "absolute",
  },
  innovativeLearningFor1: {
    top: 41,
    left: 70,
    fontSize: FontSize.size_8xs,
    width: 98,
    height: 4,
  },
  pngwingcom1611: {
    left: 353,
    top: 21,
  },
  icon1: {
    overflow: "hidden",
  },
  arrowRight: {
    left: 41,
    top: 62,
    width: 24,
  },
  pngwingcom441: {
    top: 655,
    left: 307,
    width: 38,
    height: 38,
    position: "absolute",
  },
  ellipseIcon: {
    top: 181,
    left: 128,
    width: 150,
    height: 150,
    position: "absolute",
  },
  pngwingcom431: {
    top: 126,
    left: 361,
  },
  ellipseGroup: {
    left: -16,
    width: 430,
    height: 844,
  },
  homeIcon: {
    height: "3.2%",
    width: "6.31%",
    right: "88.56%",
    bottom: "3.81%",
    left: "5.13%",
    position: "absolute",
  },
  icon2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "47.69%",
    top: "92.74%",
    right: "45.87%",
    width: "6.44%",
    height: "3.69%",
  },
  profileChild: {
    top: 735,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_500,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    left: 0,
    position: "absolute",
  },
  vectorIcon2: {
    height: "3.44%",
    width: "5.9%",
    right: "3.59%",
    left: "90.51%",
    top: "92.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profile: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 813,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_11xl,
  },
});

export default Profile;
