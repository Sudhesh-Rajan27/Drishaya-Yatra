import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import MenuItem from "./MenuItem";
import SmallButtons from "./SmallButtons";
import { Padding, Gap } from "../GlobalStyles";

const Profile1 = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.avatar}>
        <Image
          style={styles.avatarIcon}
          contentFit="cover"
          source={require("../assets/avatar.png")}
        />
      </View>
      <MenuItem
        courses="Your Courses"
        menuItemPosition="unset"
        menuItemWidth="unset"
        menuItemHeight="unset"
        menuItemAlignSelf="stretch"
      />
      <MenuItem
        courses="Saved"
        menuItemPosition="unset"
        menuItemWidth="unset"
        menuItemHeight={80}
        menuItemAlignSelf="stretch"
      />
      <SmallButtons button="Log out" smallButtonsPosition="unset" />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarIcon: {
    width: 140,
    height: 140,
    display: "none",
  },
  avatar: {
    width: 172,
    height: 172,
    flexDirection: "row",
    justifyContent: "center",
    padding: Padding.p_base,
    alignItems: "center",
  },
  profile: {
    position: "absolute",
    top: 198,
    left: 23,
    width: 375,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    gap: Gap.gap_sm,
    alignItems: "center",
  },
});

export default Profile1;
