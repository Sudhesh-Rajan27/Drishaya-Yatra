import React, { useMemo } from "react";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Headers1 = ({
  text,
  showPreviosButton48pxIcon,
  headersPosition,
  headersWidth,
  headersTop,
  headersLeft,
  textContentFlex,
}) => {
  const headersStyle = useMemo(() => {
    return {
      ...getStyleValue("position", headersPosition),
      ...getStyleValue("width", headersWidth),
      ...getStyleValue("top", headersTop),
      ...getStyleValue("left", headersLeft),
    };
  }, [headersPosition, headersWidth, headersTop, headersLeft]);

  const textContentStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", textContentFlex),
    };
  }, [textContentFlex]);

  return (
    <View style={[styles.typeheaderWithBack, headersStyle]}>
      {showPreviosButton48pxIcon && (
        <Image
          style={styles.previosButton48pxIcon}
          contentFit="cover"
          source={require("../assets/previos-button48px.png")}
        />
      )}
      <View
        style={[
          styles.textContent,
          styles.textContentFlexBox,
          textContentStyle,
        ]}
      >
        <View style={[styles.textContent1, styles.textContentFlexBox]}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  previosButton48pxIcon: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: FontFamily.buttonSmall,
    color: Color.inkDark,
    textAlign: "center",
    width: 341,
  },
  textContent1: {
    width: 119,
  },
  textContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  typeheaderWithBack: {
    width: 375,
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_37xl,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Headers1;
