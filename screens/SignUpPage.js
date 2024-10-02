import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import GroupComponent2 from "../components/GroupComponent2";
import { useNavigation } from "@react-navigation/native";
import GroupComponent1 from "../components/GroupComponent1";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignUpPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpPage}>
      <View style={[styles.signUpPageChild, styles.signShadowBox]} />
      <View style={[styles.signUpPageItem, styles.signShadowBox]} />
      <Image
        style={styles.signUpPageInner}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <GroupComponent2 />
      <Pressable
        style={[styles.signIn, styles.signLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <LinearGradient
          style={[styles.signInChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["rgba(255, 138, 0, 0.75)", "rgba(3, 153, 0, 0.75)"]}
        />
        <Text style={styles.signUp}>Sign Up</Text>
      </Pressable>
      <Text style={[styles.bySigningInContainer, styles.emailAddress1Typo]}>
        <Text
          style={styles.bySigningIn}
        >{`By signing in with an account, you agree to VisualQuest's `}</Text>
        <Text style={styles.termsOfService}>Terms of Service</Text>
        <Text style={styles.bySigningIn}>{` and `}</Text>
        <Text style={styles.privacyPolicy}>
          <Text style={styles.privacyPolicy1}>Privacy Policy</Text>
          <Text style={styles.bySigningIn}>.</Text>
        </Text>
      </Text>
      <Pressable
        style={styles.login}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={[styles.login1, styles.login1FlexBox]}>Login</Text>
      </Pressable>
      <Text style={[styles.signUp1, styles.login1FlexBox]}>Sign Up</Text>
      <View style={[styles.emailAddress, styles.emailLayout]}>
        <View style={[styles.emailAddressChild, styles.emailLayout]} />
        <Text style={[styles.emailAddress1, styles.emailAddress1Position]}>
          Email Address
        </Text>
        <Image
          style={styles.mailFill0Wght400Grad0Opsz4Icon}
          contentFit="cover"
          source={require("../assets/mail-fill0-wght400-grad0-opsz48-1-11.png")}
        />
      </View>
      <GroupComponent1 />
      <Image
        style={[styles.pngwingcom391, styles.pngwingcomPosition]}
        contentFit="cover"
        source={require("../assets/pngwingcom-39-1.png")}
      />
      <Image
        style={[styles.pngwingcom401, styles.pngwingcomPosition]}
        contentFit="cover"
        source={require("../assets/pngwingcom-40-1.png")}
      />
      <View
        style={[styles.whatsappImage20240828At1, styles.emailAddress1Position]}
      />
      <View style={styles.imageRemovebgPreview1} />
      <Image
        style={[styles.imageRemovebgPreview11, styles.emailAddress1Position]}
        contentFit="cover"
        source={require("../assets/imageremovebgpreview-1-1.png")}
      />
      <Text style={[styles.innovativeLearningFor, styles.login1FlexBox]}>
        Innovative Learning for Inclusive Horizons
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signShadowBox: {
    height: 31,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 184,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  signLayout: {
    height: 61,
    left: "50%",
    width: 323,
    position: "absolute",
  },
  childPosition: {
    borderRadius: 9,
    top: 0,
    marginLeft: -161.35,
  },
  emailAddress1Typo: {
    fontFamily: FontFamily.urbanistRegular,
    textAlign: "center",
  },
  login1FlexBox: {
    textAlign: "left",
    color: Color.color,
  },
  emailLayout: {
    height: 52,
    width: 323,
    left: "50%",
    position: "absolute",
  },
  emailAddress1Position: {
    top: 17,
    position: "absolute",
  },
  pngwingcomPosition: {
    left: 44,
    height: 21,
    position: "absolute",
  },
  signUpPageChild: {
    left: 239,
    borderWidth: 3,
    width: 89,
  },
  signUpPageItem: {
    left: 60,
    borderWidth: 1,
    width: 69,
  },
  signUpPageInner: {
    top: -3,
    left: -17,
    width: 401,
    height: 830,
    position: "absolute",
  },
  signInChild: {
    shadowColor: "rgba(255, 255, 255, 0.15)",
    shadowRadius: 0,
    elevation: 0,
    backgroundColor: "transparent",
    height: 61,
    left: "50%",
    width: 323,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: 9,
    top: 0,
    marginLeft: -161.35,
  },
  signUp: {
    top: 18,
    left: 123,
    fontSize: FontSize.size_2xl_8,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.fFFFFF,
    textAlign: "center",
    position: "absolute",
  },
  signIn: {
    marginLeft: -161.5,
    top: 565,
  },
  bySigningIn: {
    color: Color.colorDimgray_300,
  },
  termsOfService: {
    color: Color.color,
    textDecoration: "underline",
  },
  privacyPolicy1: {
    color: Color.color,
  },
  privacyPolicy: {
    textDecoration: "underline",
  },
  bySigningInContainer: {
    top: 745,
    fontSize: FontSize.size_sm_1,
    width: 340,
    height: 51,
    left: 17,
    fontFamily: FontFamily.urbanistRegular,
    position: "absolute",
  },
  login1: {
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    fontSize: FontSize.size_lgi_2,
    textAlign: "left",
  },
  login: {
    left: 71,
    top: 188,
    position: "absolute",
  },
  signUp1: {
    top: 187,
    left: 250,
    fontWeight: "800",
    fontFamily: FontFamily.urbanistExtraBold,
    fontSize: FontSize.size_lgi_2,
    textAlign: "left",
    position: "absolute",
  },
  emailAddressChild: {
    borderRadius: 9,
    top: 0,
    marginLeft: -161.35,
    backgroundColor: Color.fFFFFF,
    height: 52,
  },
  emailAddress1: {
    left: 53,
    fontSize: FontSize.size_mid_4,
    opacity: 0.5,
    color: Color.color,
    fontFamily: FontFamily.urbanistRegular,
    textAlign: "center",
  },
  mailFill0Wght400Grad0Opsz4Icon: {
    top: 16,
    height: 21,
    width: 21,
    left: 17,
    position: "absolute",
    overflow: "hidden",
  },
  emailAddress: {
    marginLeft: -657.3,
    top: 532,
  },
  pngwingcom391: {
    top: 266,
    width: 19,
  },
  pngwingcom401: {
    top: 336,
    width: 21,
    left: 44,
  },
  whatsappImage20240828At1: {
    left: 132,
    borderRadius: 128,
    width: 107,
    height: 96,
  },
  imageRemovebgPreview1: {
    top: 50,
    left: 15,
    height: 127,
    width: 323,
    position: "absolute",
  },
  imageRemovebgPreview11: {
    left: 34,
    width: 315,
    height: 129,
  },
  innovativeLearningFor: {
    top: 93,
    left: 116,
    fontSize: FontSize.size_3xs,
    fontWeight: "900",
    fontFamily: FontFamily.urbanistBlack,
    width: 201,
    height: 12,
    position: "absolute",
  },
  signUpPage: {
    borderRadius: 26,
    flex: 1,
    width: "100%",
    height: 813,
    overflow: "hidden",
    backgroundColor: Color.fFFFFF,
  },
});

export default SignUpPage;
