import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import arrow from "../assets/arrow.png";
import BtnSecondary from "./addons/btnSecondary";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useSignInMutation } from "../services/authServices";
import { setUser } from "../features/UserSlice";

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signIn, { isLoading, error }] = useSignInMutation();

  const handleLogin = async () => {
    try {
      const result = await signIn({ email, password });
      if (result.data.localId && result.data.idToken) {
        dispatch(
          setUser({
            email: email,
            idToken: result.data.idToken,
          })
        );
        Alert.alert("Bienvenido", "Has iniciado sesión correctamente.");
        navigation.navigate("Main");
      } else {
        Alert.alert(
          "Error",
          "Credenciales incorrectas. Por favor, inténtelo de nuevo."
        );
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Hubo un problema al iniciar sesión. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={styles.arrowBack} source={arrow} />
        </TouchableOpacity>
        <Text style={styles.title}>Ingresar</Text>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.textLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese un email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View>
          <Text style={styles.textLabel}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese una contraseña"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.btnLink}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <BtnSecondary title={"Ingresar"} sizeBtn={250} onPress={handleLogin} />
        <View>
          <TouchableOpacity
            style={styles.boxRegister}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.registerbtn}>¿Aún no tienes cuenta? </Text>
            <Text style={styles.registerbtnSpan}>Regístrate!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 40,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  arrowContainer: {
    position: "absolute",
    left: 15,
    top: 50,
  },
  arrowBack: {
    width: 30,
    height: 30,
    transform: [{ rotate: "90deg" }],
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 35,
    position: "relative",
  },
  boxRegister: {
    width: 250,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  registerbtn: {
    color: "#14AE5C",
  },
  registerbtnSpan: {
    color: "#40513B",
    fontWeight: "bold",
  },
  btnLink: {
    color: "#14AE5C",
    fontWeight: "bold",
    position: "absolute",
    bottom: -1,
    left: -45,
  },
  textLabel: {
    color: "#14AE5C",
    fontWeight: "500",
  },
  input: {
    width: 250,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#40513B",
    marginBottom: 10,
  },
});
