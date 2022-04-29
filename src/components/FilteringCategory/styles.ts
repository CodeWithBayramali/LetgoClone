import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollMain: {
    marginHorizontal: 10,
    marginVertical: 12,
  },

  mainView: {
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    padding: 10,
    borderRadius: 20,
    height: height * 0.046,
    marginRight: 7,
    alignItems: "center",
  },
  mainViewCategory: {
    backgroundColor: "#616161",
    flexDirection: "row",
    padding: 10,
    borderRadius: 20,
    height: height * 0.046,
    marginRight: 7,
    alignItems: "center",
  },
  categoryImage: {
    width: 32,
    height: 32,
    borderRadius: 50,
    marginRight: 4,
  },
});

export default styles;
