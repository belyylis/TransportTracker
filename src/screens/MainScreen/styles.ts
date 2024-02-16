import { StyleSheet } from "react-native";
import { Layout, Palette } from "consts";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Palette.WHITE,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: Layout.W,
    height: Layout.H * 0.07,
    backgroundColor: Palette.WHITE,
    borderBottomColor: Palette.BLACK,
    borderBottomWidth: 1,
  },
  touchable: {
    backgroundColor: Palette.TRANSPARENT,
  },
  status: {
    color: Palette.BLACK,
    fontSize: Layout.W * 0.04,
  },
  listWrapper: {
    paddingVertical: Layout.H * 0.01,
    flexDirection: "column",
    width: Layout.W,
  },
  map: {
    height: Layout.H,
    width: Layout.W * 1.5,
  },
  filterWrapper: {
    position: "absolute",
    bottom: -1,
    left: 0,
    width: Layout.W + 1,
    height: Layout.H * 0.3,
    borderTopRightRadius: Layout.H * 0.03,
    borderTopLeftRadius: Layout.H * 0.03,
    backgroundColor: Palette.TRANSPARENT_DARK,
  },
  filterTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: Layout.W * 0.04,
    color: Palette.WHITE,
    paddingTop: Layout.H * 0.02,
  },
  selector: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  select: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: Layout.H * 0.06,
  },
  iconWrapper: {
    width: 70,
    height: 60,
  },
});
