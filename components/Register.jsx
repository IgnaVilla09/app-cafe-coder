import { StyleSheet, Text, TextInput, Image, TouchableOpacity, View } from 'react-native'
import arrow from "../assets/arrow.png"
import BtnSecondary from './addons/btnSecondary'

export default function Register() {
  return (
    <View style={styles.body}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=> {alert("FUNCIONA")}}>
                <Image style={styles.arrowBack} source={arrow}></Image>
            </TouchableOpacity>
            <Text style={styles.title}>Registrarse</Text>
        </View>
        <View style={styles.inputContainer}>
            <View>
                <Text style={styles.textLabel}>Nombre completo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese un email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View>
                <Text style={styles.textLabel}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese un email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View>
                <Text style={styles.textLabel}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese una contraseña"
                    secureTextEntry
                />    
            </View>
            <View>
                <Text style={styles.textLabel}>Confirmar contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Repita contraseña"
                    secureTextEntry
                />    
            </View>
            <BtnSecondary title={"Registrarse"} sizeBtn={250} onPress={()=> {alert("Ingresar")}}/> 
            <View >
                <TouchableOpacity style={styles.boxRegister}><Text style={styles.registerbtn}>¿Ya tienes cuenta? </Text>
                <Text style={styles.registerbtnSpan}>Ingresa!</Text></TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    container: {
        width: "100%",
        flexDirection: 'row',
        paddingTop: 40,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent:'center',
        position: 'relative',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
    },
    arrowContainer: {
        position: 'absolute',
        left: 15,
        top: 50,
    },
    arrowBack: {
        width: 30,
        height: 30,
        transform: [{ rotate: '90deg' }],
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
        position: 'relative',
    },
    boxRegister: {
        width: 250,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerbtn: {
        color: "#14AE5C",
    },
    registerbtnSpan: {
        color: "#40513B",
        fontWeight: 'bold',
    },
    textLabel:{
        color: "#14AE5C",
        fontWeight: "300"
    },
    input: {
        width: 250,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#40513B",
        marginBottom: 10,
    },
})