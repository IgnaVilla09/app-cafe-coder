import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import BtnOptional from '../components/addons/btnOptional'
import { useNavigation } from '@react-navigation/native'


export default function Menu() {

    const  navigation = useNavigation();

  return (
    <View style={styles.body}>
        <Navbar />
    
        <View style={styles.container}> 
            <View style={styles.listMenu}>
                <View>
                    <BtnOptional title={"Menú cafetería"} fontSize={35} sizeBtn={300} onPress={()=> {
                        navigation.navigate("ProductList")
                    }}/>
                </View>
                <View>
                    <BtnOptional title={"Tienda barista"} fontSize={35} sizeBtn={300} onPress={()=> {
                        navigation.navigate("ProductList")
                    }}/>
                    
                </View>
                <View>
                    <BtnOptional title={"Locales"} fontSize={35} sizeBtn={300} onPress={()=> {
                        alert("Locales")
                    }}/>
                </View>
            </View>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#EDF1D6",
    },
    container: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },  
    listMenu: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    }
})