import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/UserSlice";
import UserProfile from "../assets/profile.jpg";
import { useNavigation } from "@react-navigation/native";
import { useGetProfileimageQuery } from "../services/shopServices";

export default function Profile() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro que deseas cerrar sesión?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            dispatch(clearUser());
          },
        },
      ],
      { cancelable: false }
    );
  };

  const { user } = useSelector((state) => state.auth.value);

  const [image, setimage] = useState(null);
  const { imageCamera, localId } = useSelector((state) => state.auth.value);
  const { data: imageFromBase } = useGetProfileimageQuery(localId);

  return (
    <View style={styles.container}>
      <View style={styles.containerPicture}>
        {imageFromBase || imageCamera ? (
          <Image
            source={{ uri: imageFromBase?.image || imageCamera }}
            style={styles.imageProfile}
          ></Image>
        ) : (
          <Image source={UserProfile} style={styles.imageProfile}></Image>
        )}
        <TouchableOpacity
          style={styles.buttonPicture}
          onPress={() => {
            navigation.navigate("ImageSelector");
          }}
        >
          <Text style={{ color: "#fff" }}>Editar foto de perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.TextUserSubtitle}>Usuario</Text>
        <Text style={styles.TextUser}>{user}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.textOptions}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EDF1D6",
  },
  containerPicture: {
    position: "relative",
    marginBottom: 30,
  },
  userContainer: {
    marginBottom: 30,
    alignSelf: "center",
  },
  textOptions: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f00",
  },
  options: {
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 50,
    borderColor: "#f009",
    borderWidth: 2,
  },
  imageProfile: {
    width: 200,
    height: 200,
    borderRadius: 80,
    marginBottom: 20,
    alignSelf: "center",
  },
  TextUser: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
    alignSelf: "center",
  },
  TextUserSubtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#14AE5C",
    marginBottom: 5,
    marginLeft: 10,
    alignSelf: "center",
  },

  buttonPicture: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    backgroundColor: "#14AE5C",
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
});
