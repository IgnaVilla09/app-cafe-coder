import { StyleSheet, Text, View, Image } from 'react-native'

export default function Navbar() {
  return (
    <View style={styles.container}>
        <Text style={styles.TextNav}>Coffee Store</Text>
    </View>
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