import React from 'react';
import { TouchableOpacity, Text , Image, StyleSheet } from 'react-native';


const BtnWhite = ({ onPress, title, imageSrc }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Image source={imageSrc} style={styles.image}></Image>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
    width: 200,
  },
  text: {
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  }
});

export default BtnWhite;