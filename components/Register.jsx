import React, { useState, useEffect } from "react";
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
import { useSignUpMutation } from "../services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../features/UserSlice";

export default function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const [triggerSignUp, result] = useSignUpMutation();

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
        })
      );
    }
  }, [result]);

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error en contraseñas", "No coinciden ambas contraseñas");
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Error en contraseñas",
        "La contraseña debe tener al menos 6 caracteres"
      );
      return;
    }

    try {
      await triggerSignUp({
        email,
        password,
        returnSecureToken: true,
      }).unwrap();
      Alert.alert(
        "Registro exitoso",
        "Te has registrado correctamente. Iniciando sesión"
      );
    } catch (error) {
      console.error("Este es el error: ", error);
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
          <Image style={styles.arrowBack} source={arrow}></Image>
        </TouchableOpacity>
        <Text style={styles.title}>Registrarse</Text>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.textLabel}>Nombre completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese nombre completo"
            autoCapitalize="none"
          />
        </View>
        <View>
          <Text style={styles.textLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese un email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text style={styles.textLabel}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese una contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View>
          <Text style={styles.textLabel}>Confirmar contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Repita contraseña"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <BtnSecondary
          title={"Registrarse"}
          sizeBtn={250}
          onPress={handleSignUp}
        />
        <View>
          <TouchableOpacity
            style={styles.boxRegister}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.registerbtn}>¿Ya tienes cuenta? </Text>
            <Text style={styles.registerbtnSpan}>Ingresa!</Text>
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
    gap: 25,
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
