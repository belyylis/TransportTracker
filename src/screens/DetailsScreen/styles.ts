import { Layout, Palette } from "consts";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Palette.WHITE,
  },
  map: {
    height: Layout.H / 2,
    width: Layout.W * 1.5,
    borderBottomColor: Palette.DARK,
    borderWidth: 1,
  },
  marker: {
    height: 60,
    width: 70,
  },
  infoWrapper: {
    flexDirection: "column",
    height: Layout.H / 2,
    width: Layout.W,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Layout.H * 0.0355,
    fontSize: Layout.W * 0.04,
    paddingLeft: Layout.W * 0.1,
  },
  bold: {
    fontWeight: "bold",
  },
  buttonsWrapper: {
    flexDirection: "row",
    paddingTop: Layout.H * 0.1,
    justifyContent: "space-evenly",
  },
});
