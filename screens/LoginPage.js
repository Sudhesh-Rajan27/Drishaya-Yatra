import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import GroupComponent from "../components/GroupComponent";
import { useNavigation } from "@react-navigation/native";
import ContinueWithGoogle from "../components/ContinueWithGoogle";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage}>
      <View style={[styles.loginPageChild, styles.loginShadowBox]} />
      <View style={[styles.loginPageItem, styles.loginShadowBox]} />
      <LinearGradient
        style={styles.loginPageInner}
        locations={[0, 1]}
        colors={["#ff7a00", "#569900"]}
      />
      <GroupComponent />
      <Pressable
        style={[styles.signIn, styles.signLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <LinearGradient
          style={[styles.signInChild, styles.signInChildPosition]}
          locations={[0, 1]}
          colors={["rgba(255, 138, 0, 0.75)", "rgba(3, 153, 0, 0.75)"]}
        />
        <Text style={styles.login}>Login</Text>
      </Pressable>
      <View
        style={[
          styles.continueWithGoogleParent,
          styles.bySigningInContainerPosition,
        ]}
      >
        <ContinueWithGoogle
          loginWithGoogle="Login with Google"
          socialIcons={require("../assets/social-icons.png")}
        />
        <ContinueWithGoogle
          loginWithGoogle="Login with Apple"
          socialIcons={require("../assets/social-icons1.png")}
          propWidth={187}
        />
      </View>
      <View style={styles.line}>
        <View style={[styles.lineChild, styles.signInPosition]} />
        <LinearGradient
          style={[
            styles.orContinueWithEmailWrapper,
            styles.signInChildPosition,
          ]}
          locations={[0, 1]}
          colors={["#fad07d", "#b1ff8c"]}
        >
          <Text style={[styles.orContinueWith, styles.orContinueWithTypo]}>
            or continue with email
          </Text>
        </LinearGradient>
      </View>
      <Text style={[styles.bySigningInContainer, styles.orContinueWithTypo]}>
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
      <Text style={[styles.login1, styles.login1FlexBox]}>Login</Text>
      <Pressable
        style={styles.signUp}
        onPress={() => navigation.navigate("SignUpPage")}
      >
        <Text style={[styles.signUp1, styles.login1FlexBox]}>Sign Up</Text>
      </Pressable>
      <Image
        style={styles.imageRemovebgPreview11}
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
  loginShadowBox: {
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
    width: 323,
  },
  signInChildPosition: {
    top: 0,
    left: "50%",
    backgroundColor: "transparent",
    position: "absolute",
  },
  bySigningInContainerPosition: {
    left: 17,
    position: "absolute",
  },
  signInPosition: {
    left: "50%",
    position: "absolute",
  },
  orContinueWithTypo: {
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_sm_1,
    textAlign: "center",
  },
  login1FlexBox: {
    textAlign: "left",
    color: Color.color,
  },
  loginPageChild: {
    left: 239,
    borderWidth: 1,
    width: 89,
  },
  loginPageItem: {
    left: 60,
    borderWidth: 3,
    width: 69,
  },
  loginPageInner: {
    top: -4,
    left: -9,
    width: 401,
    height: 830,
    backgroundColor: "transparent",
    opacity: 0.1,
    position: "absolute",
  },
  signInChild: {
    marginLeft: -161.35,
    shadowColor: "rgba(255, 255, 255, 0.15)",
    shadowRadius: 0,
    elevation: 0,
    borderRadius: 9,
    height: 61,
    width: 323,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
  },
  login: {
    top: 18,
    left: 136,
    fontSize: FontSize.size_2xl_8,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.fFFFFF,
    textAlign: "center",
    position: "absolute",
  },
  signIn: {
    top: 645,
    left: "50%",
    position: "absolute",
    marginLeft: -161.3,
    height: 61,
  },
  continueWithGoogleParent: {
    top: 251,
    gap: 13,
  },
  lineChild: {
    marginLeft: -161.75,
    top: 10,
    borderTopWidth: 0.9,
    width: 324,
    height: 1,
    left: "50%",
    opacity: 0.1,
    borderColor: Color.color,
    borderStyle: "solid",
  },
  orContinueWith: {
    color: Color.color,
  },
  orContinueWithEmailWrapper: {
    marginLeft: -72.25,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 9,
    paddingVertical: 0,
  },
  line: {
    top: 417,
    height: 16,
    width: 323,
    left: "50%",
    marginLeft: -161.3,
    position: "absolute",
  },
  bySigningIn: {
    color: Color.colorDimgray_300,
  },
  termsOfService: {
    textDecoration: "underline",
    color: Color.color,
  },
  privacyPolicy1: {
    color: Color.color,
  },
  privacyPolicy: {
    textDecoration: "underline",
  },
  bySigningInContainer: {
    top: 745,
    width: 340,
    height: 51,
    left: 17,
    position: "absolute",
  },
  login1: {
    top: 188,
    left: 71,
    fontWeight: "800",
    fontFamily: FontFamily.urbanistExtraBold,
    fontSize: FontSize.size_lgi_2,
    textAlign: "left",
    position: "absolute",
  },
  signUp1: {
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    fontSize: FontSize.size_lgi_2,
    textAlign: "left",
  },
  signUp: {
    left: 250,
    top: 187,
    position: "absolute",
  },
  imageRemovebgPreview11: {
    top: 14,
    left: 34,
    width: 315,
    height: 129,
    position: "absolute",
  },
  innovativeLearningFor: {
    top: 90,
    left: 116,
    fontSize: FontSize.size_3xs,
    fontWeight: "900",
    fontFamily: FontFamily.urbanistBlack,
    width: 201,
    height: 12,
    position: "absolute",
  },
  loginPage: {
    borderRadius: 26,
    backgroundColor: Color.fFFFFF,
    flex: 1,
    width: "100%",
    height: 813,
    overflow: "hidden",
  },
});

export default LoginPage;
