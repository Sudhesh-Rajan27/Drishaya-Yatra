import React, { useMemo } from "react";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const MenuItem = ({
  courses,
  menuItemPosition,
  menuItemWidth,
  menuItemHeight,
  menuItemAlignSelf,
}) => {
  const menuItemStyle = useMemo(() => {
    return {
      ...getStyleValue("position", menuItemPosition),
      ...getStyleValue("width", menuItemWidth),
      ...getStyleValue("height", menuItemHeight),
      ...getStyleValue("alignSelf", menuItemAlignSelf),
    };
  }, [menuItemPosition, menuItemWidth, menuItemHeight, menuItemAlignSelf]);

  return (
    <View style={[styles.menuItem, styles.coursesFlexBox, menuItemStyle]}>
      <Text style={[styles.courses, styles.coursesFlexBox]}>{courses}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  coursesFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  courses: {
    alignSelf: "stretch",
    flex: 1,
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: FontFamily.buttonSmall,
    color: Color.inkDark,
    textAlign: "center",
    display: "flex",
  },
  menuItem: {
    borderRadius: Border.br_base,
    backgroundColor: Color.fFFFFF,
    borderStyle: "solid",
    borderColor: Color.colorSilver_200,
    borderWidth: 1,
    width: 327,
    height: 80,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xl,
  },
});

export default MenuItem;
