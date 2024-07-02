import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BtnSecondary = ({ onPress, title, fontSize, sizeBtn }) => (
  <TouchableOpacity style={[styles.button, sizeBtn && { width: sizeBtn }]} onPress={onPress}>
    <Text style={[styles.text, fontSize && { fontSize }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#40513B',
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  text: {
    color: "#fff",
    textAlign: 'center',
  },
});

export default BtnSecondary;
