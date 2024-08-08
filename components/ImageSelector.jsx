import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import UserProfile from "../assets/profile.jpg";
import { RefreshCcw } from "lucide-react-native";
import arrow from "../assets/arrow.png";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { setCameraImage } from "../features/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  usePostProfileImageMutation,
  useGetProfileimageQuery,
} from "../services/shopServices";
import Navbar from "./Navbar";

export default function ImageSelector() {
  const [image, setImage] = useState(null);
  const [triggerPostImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();
  const { localId } = useSelector((state) => state.auth.value);
  const { data: imageFromBase } = useGetProfileimageQuery(localId);

  const navigation = useNavigation();

  const verifyCameraPermisson = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (!status) {
      return false;
    }
    return true;
  };

  const takePicture = async () => {
    const isCameraOk = await verifyCameraPermisson();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });

      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    }
  };

  const confirmPicture = () => {
    try {
      dispatch(setCameraImage(image));
      triggerPostImage({ image, localId });
      navigation.navigate("Profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Image style={styles.arrowBack} source={arrow} />
        </TouchableOpacity>
      </View>
      {image ? (
        <View style={{ position: "relative" }}>
          <Image
            style={styles.imageProfile}
            resizeMode="contain"
            source={{ uri: image }}
          />
          <TouchableOpacity
            onPress={confirmPicture}
            style={styles.buttonPictureConfirm}
          >
            <Text>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture} style={styles.buttonPicture}>
            <RefreshCcw color="#000" size={24} />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={{ marginVertical: 20 }}>
            <Image
              resizeMode="contain"
              source={{ uri: imageFromBase?.image || UserProfile }}
              style={styles.imageProfile}
            />
            <TouchableOpacity
              style={styles.buttonPicture}
              onPress={takePicture}
            >
              <RefreshCcw color="#000" size={24} />
            </TouchableOpacity>
          </View>
          <Text style={styles.TextFoto}>Tomar nueva foto de perfil</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EDF1D6",
  },
  imageProfile: {
    width: 200,
    height: 200,
    borderRadius: 80,
    marginBottom: 20,
    alignSelf: "center",
  },
  TextFoto: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
    alignSelf: "center",
    position: "relative",
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
  buttonPictureConfirm: {
    position: "absolute",
    bottom: -50,
    alignSelf: "center",
    backgroundColor: "#14AE5C",
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
  arrowBack: {
    width: 30,
    height: 30,
    transform: [{ rotate: "90deg" }],
  },
});
