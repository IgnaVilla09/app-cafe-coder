import { StyleSheet, Text, View, Image } from 'react-native'
import BtnPrimary from './addons/btnPrimary'
import BtnSecondary from './addons/btnSecondary'
import BtnOptional from './addons/btnOptional'
import BtnWhite from './addons/btnWhite'
import coffeBeans from "../assets/coffebeans.png"
import logoGoogle from "../assets/google.webp"

export default function Home() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bienvenidos a Coffee Store</Text>
        <Image source={coffeBeans} style={styles.image}></Image>
        <View style={styles.subcontainer}>
        <BtnPrimary title="Ingresar" sizeBtn={150} onPress={() => alert('Button Pressed')} />
        <BtnSecondary title="Registrarse" sizeBtn={150} onPress={() => alert('Button Pressed')} />
        <BtnWhite title="Continuar con Google" imageSrc={logoGoogle} onPress={()=> alert("GOOGLE!")}/>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain"
    },
    subcontainer: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 15,
        marginTop: 20
    }
})