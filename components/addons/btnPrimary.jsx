import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BtnPrimary = ({ onPress, title, fontSize, sizeBtn }) => (
  <TouchableOpacity style={[styles.button, sizeBtn && { width: sizeBtn }]} onPress={onPress}>
    <Text style={[styles.text, fontSize && { fontSize }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9DC08B',
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
  },
});

export default BtnPrimary;
