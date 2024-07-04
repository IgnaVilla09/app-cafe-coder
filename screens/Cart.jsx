import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { DollarSign, ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

export default function Cart() {
    const navigation = useNavigation();
    const { cart, emptyCart } = useContext(CartContext);

    const productos = cart.length > 0;

    return (
        <View style={styles.cartContainer}>
            <Navbar />

            <View style={styles.container}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <ArrowLeft color="black" size={20} />
                </TouchableOpacity>
                <Text style={styles.TextCart}>Carrito</Text>
                <View>
                    {productos ? (
                        cart.map((product, index) => (
                            <View style={styles.boxproducts} key={index}>
                                <Text style={styles.textproducts}>{product.title}</Text>
                                <Text style={styles.textproducts}>x{product.quantity}</Text>
                                <Text style={styles.textproducts}>{product.subPrice}</Text>
                            </View>
                        ))
                    ) : (
                        <View style={styles.boxproducts}>
                            <Text style={styles.textproducts}>No hay productos en el carrito</Text>
                        </View>
                    )}
                </View>
            </View>

            <View>
                {productos ? (
                    <View>
                        <TouchableOpacity style={styles.btnPay} onPress={() => {
                            alert("COMPRADO!");
                            emptyCart(); 
                        }}>
                            <Text style={styles.Text}>Confirmar pedido</Text>
                            <DollarSign color="black" width={20} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete} onPress={emptyCart}>
                            <Text style={styles.Text}>Vaciar carrito</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={styles.btnPayDisabled}>
                        <Text style={styles.Text}>Confirmar pedido</Text>
                        <DollarSign color="black" width={20} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cartContainer: {
        flex: 1,
        backgroundColor: "#EDF1D6",
        position: "relative",
    },
    container: {
        flex: 1,
        padding: 20
    },
    TextCart: {
        width: "100%",
        fontSize: 20,
        fontWeight: "500",
        borderBottomWidth: 2,
        borderBottomColor: "#0007",
    },
    boxproducts: {
        flexDirection: "row",
        gap: 20,
        marginVertical: 20,
    },
    textproducts: {
        fontSize: 20,
        fontWeight: "500",
    },
    btnDelete: {
        width: 100,
        height: 80,
        backgroundColor: "#FF0000",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        flexDirection: "row-reverse",
        left: 20,
        bottom: 20,
        borderRadius: 10,
    },
    btnPay: {
        width: 100,
        height: 80,
        backgroundColor: "#14AE5C",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        flexDirection: "row-reverse",
        right: 20,
        bottom: 20,
        borderRadius: 10,
    },
    btnPayDisabled: {
        width: 100,
        height: 80,
        backgroundColor: "#14AE5C",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        flexDirection: "row-reverse",
        right: 20,
        bottom: 20,
        borderRadius: 10,
        opacity: 0.5,
    },
    Text: {
        textAlign: "center",
        fontWeight: "500",
    },
});
