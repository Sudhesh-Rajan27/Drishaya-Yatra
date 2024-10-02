import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Gap } from "../GlobalStyles";

const GroupComponent1 = () => {
  return (
    <View style={styles.signUpPageInner}>
      <View style={[styles.emailAddressParent, styles.emailPosition]}>
        <View style={styles.emailLayout}>
          <View style={[styles.emailAddressChild, styles.emailLayout]} />
          <Text style={[styles.name, styles.nameTypo]}>Name</Text>
        </View>
        <View style={styles.emailLayout}>
          <View style={[styles.emailAddressChild, styles.emailLayout]} />
          <Text style={[styles.phNo, styles.nameTypo]}>Ph No</Text>
        </View>
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
  nameTypo: {
    opacity: 0.5,
    color: Color.color,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_mid_4,
    left: 47,
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
  name: {
    top: 16,
    textAlign: "center",
  },
  phNo: {
    top: 17,
    textAlign: "left",
  },
  emailAddressParent: {
    left: 0,
    gap: Gap.gap_md,
  },
  signUpPageInner: {
    top: 250,
    left: 26,
    height: 122,
    width: 323,
    position: "absolute",
  },
});

export default GroupComponent1;
