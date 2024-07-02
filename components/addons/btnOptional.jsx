import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BtnOptional = ({ onPress, title, fontSize, sizeBtn }) => (
  <TouchableOpacity style={[styles.button, sizeBtn && { width: sizeBtn }]} onPress={onPress}>
    <Text style={[styles.text, fontSize && { fontSize }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#14AE5C',
    padding: 10,
    borderRadius: 15,
    width: 150
  },
  text: {
    color: "#fff",
    textAlign: 'center',
  },
});

export default BtnOptional;