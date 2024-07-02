import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import BtnOptional from '../components/addons/btnOptional'

export default function Menu() {
  return <>
    <Navbar />
    
    <View style={styles.container}> 

        <View style={styles.listMenu}>
            <View>
                <BtnOptional title={"Menu"} fontSize={40} sizeBtn={300} onPress={()=> {
                    alert("Menu")
                }}/>
            </View>
            <View>
                <BtnOptional title={"Tienda"} fontSize={40} sizeBtn={300} onPress={()=> {
                    alert("Tienda")
                }}/>
                
            </View>
            <View>
                <BtnOptional title={"Locales"} fontSize={40} sizeBtn={300} onPress={()=> {
                    alert("Locales")
                }}/>
            </View>
        </View>
    </View>
    </>
}

const styles = StyleSheet.create({
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