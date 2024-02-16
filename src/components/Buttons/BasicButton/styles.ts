import { Layout, Palette } from "consts";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: Layout.W * 0.46,
    height: Layout.W * 0.1,
    borderRadius: Layout.W * 0.015,
    backgroundColor: Palette.WHITE,
    shadowColor: Palette.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Palette.DARK,
    fontSize: Layout.W * 0.04,
  },
});
