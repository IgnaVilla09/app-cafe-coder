import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Navbar() {

  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.container} onPress={ ()=> {
      navigation.navigate("Menu")
    }}>
        <Text style={styles.TextNav}>Coffee Store</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        justifyContent: 'center',
    },
    TextNav: {
        textAlign: 'center',
        width: 160,
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
    }
})