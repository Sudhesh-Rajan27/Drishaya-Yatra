import React, { useMemo } from "react";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SmallButtons = ({ button, smallButtonsPosition }) => {
  const smallButtonsStyle = useMemo(() => {
    return {
      ...getStyleValue("position", smallButtonsPosition),
    };
  }, [smallButtonsPosition]);

  return (
    <View style={[styles.property1buttonsProperty2, smallButtonsStyle]}>
      <Text style={styles.button}>{button}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.buttonSmall_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.buttonSmall,
    color: Color.inkDarkGray,
    textAlign: "center",
  },
  property1buttonsProperty2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
});

export default SmallButtons;
