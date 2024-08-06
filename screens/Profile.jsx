import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import React from "react";

export default function Profile({ setSession }) {
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Hasta luego!", "Sesión finalizada!");
            setSession(false);
          }}
        >
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
  textOptions: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
    color: "#f00",
  },
  options: {
    paddingVertical: 6,
    marginVertical: 2,
    borderBottomColor: "#f009",
    borderBottomWidth: 2,
  },
});
