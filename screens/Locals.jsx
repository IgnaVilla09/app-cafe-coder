import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Location from "expo-location";
import arrow from "../assets/arrow.png";
import { useGetLocalsQuery } from "../services/localsApi";
import MapView, { Marker } from "react-native-maps";
import Navbar from "../components/Navbar";
import haversine from "haversine-distance";
import { useNavigation } from "@react-navigation/native";

export default function Locals() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { data: locals, error, isLoading } = useGetLocalsQuery();

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const findNearestLocal = () => {
    if (locals && location) {
      const userLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      let nearestLocal = locals[0];
      let shortestDistance = haversine(userLocation, {
        latitude: locals[0].latitude,
        longitude: locals[0].longitude,
      });

      locals.forEach((local) => {
        const localDistance = haversine(userLocation, {
          latitude: local.latitude,
          longitude: local.longitude,
        });
        if (localDistance < shortestDistance) {
          nearestLocal = local;
          shortestDistance = localDistance;
        }
      });

      return nearestLocal;
    }

    return null;
  };

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error}</Text>;

  const nearestLocal = findNearestLocal();

  return (
    <View style={styles.container}>
      <Navbar />

      <View style={styles.containerLocal}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Menu");
            }}
          >
            <Image style={styles.arrowBack} source={arrow} />
          </TouchableOpacity>
        </View>
        <Text style={styles.textTitle}>
          Ubicación actual de tu cafetería más cercana:
        </Text>
        {errorMsg ? (
          <Text>{errorMsg}</Text>
        ) : location ? (
          nearestLocal ? (
            <View>
              <Text style={styles.textDescrip}>
                Nombre: {nearestLocal.name}
              </Text>
              <Text style={styles.textDescrip}>
                Dirección: {nearestLocal.address}
              </Text>
              <Text style={styles.textDescrip}>
                Teléfono: {nearestLocal.phone}
              </Text>
              <Text style={styles.textDescrip}>
                Horario: {nearestLocal.hours}
              </Text>
            </View>
          ) : (
            <Text>No se encontraron sucursales.</Text>
          )
        ) : (
          <ActivityIndicator />
        )}
      </View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          padding: 20,
        }}
      >
        Mapa de sucursales (Mendoza, Cordoba, CABA)
      </Text>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Tu ubicación"
            pinColor="blue"
          />
          {locals.map((local) => (
            <Marker
              key={local.id}
              coordinate={{
                latitude: local.latitude,
                longitude: local.longitude,
              }}
              title={local.name}
              description={local.address}
            />
          ))}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textDescrip: {
    fontSize: 20,
  },
  containerLocal: {
    padding: 20,
    paddingTop: 10,
  },
  map: {
    flex: 1,
    marginTop: 20,
  },
  arrowBack: {
    paddingHorizontal: 20,
    marginBottom: 10,
    width: 30,
    height: 30,
    transform: [{ rotate: "90deg" }],
  },
});
