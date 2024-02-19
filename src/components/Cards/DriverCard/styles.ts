import { Layout, Palette } from "consts";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: Layout.W * 0.48,
    height: Layout.H * 0.25,
    marginBottom: Layout.H * 0.01,
    borderRadius: Layout.W * 0.048,
    marginHorizontal: Layout.W * 0.01,
    shadowColor: Palette.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  gradient: {
    flex: 1,
    flexDirection: "column",
    borderRadius: Layout.W * 0.04,
  },
  imageWrapper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    height: 60,
    width: 70,
  },
  infoWrapper: {
    flex: 1,
    padding: Layout.W * 0.02,
  },
  category: {
    flex: 1,
    color: Palette.BLACK,
    fontSize: Layout.W * 0.03,
    alignSelf: "center",
  },
  name: {
    flex: 1,
    color: Palette.BLACK,
    fontSize: Layout.W * 0.04,
  },
  id: {
    flex: 1,
    color: Palette.BLACK,
  },
});
