import { StyleSheet, Text, View, Image } from "react-native";
import BtnPrimary from "./addons/btnPrimary";
import BtnSecondary from "./addons/btnSecondary";
import coffeBeans from "../assets/coffebeans.png";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigationHome = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenidos a Coffee Store</Text>
      <Image source={coffeBeans} style={styles.image}></Image>
      <View style={styles.subcontainer}>
        <BtnPrimary
          title="Ingresar"
          sizeBtn={150}
          onPress={() => navigationHome.navigate("Login")}
        />
        <BtnSecondary
          title="Registrarse"
          sizeBtn={150}
          onPress={() => navigationHome.navigate("Register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDF1D6",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  subcontainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
    marginTop: 20,
  },
});
