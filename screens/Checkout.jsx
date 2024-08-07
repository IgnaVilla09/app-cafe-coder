import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { usePostOrdersMutation } from "../services/shopServices";
import { emptyCart } from "../features/CartSlice";

export default function Checkout() {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.cart.user);
  const dispatch = useDispatch();
  const [postOrder, { isLoading }] = usePostOrdersMutation();

  const calculateTotal = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  const handleOrder = async () => {
    const order = {
      user,
      items: cart,
      total: calculateTotal(),
      createdAt: new Date().toISOString(),
    };

    try {
      await postOrder(order).unwrap();
      dispatch(emptyCart());
      Alert.alert("Éxito", "Tu pedido ha sido confirmado.");
      navigation.navigate("Menu");
    } catch (error) {
      Alert.alert("Error", "No se pudo confirmar el pedido.");
      console.error("Failed to save order: ", error);
    }
  };

  return (
    <View style={styles.orderContainer}>
      <Navbar />
      <View style={styles.subtitleContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeft color="black" size={30} />
        </TouchableOpacity>
        <Text style={styles.textSubtitle}>Resumen de Compra</Text>
      </View>
      <View>
        {cart.map((product, index) => (
          <View key={index} style={styles.productContainer}>
            <Text style={styles.productText}>
              {product.title} x {product.quantity}
            </Text>
            <Text style={styles.productPrice}>${product.subPrice}</Text>
          </View>
        ))}
        <Text style={styles.totalPrice}>Total: ${calculateTotal()}</Text>
        <TouchableOpacity
          style={styles.btnCheckout}
          onPress={handleOrder}
          disabled={isLoading}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Realizar Pago
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orderContainer: {
    flex: 1,
    backgroundColor: "#EDF1D6",
    position: "relative",
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  textSubtitle: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 20,
  },
  totalPrice: {
    padding: 20,
    fontWeight: "bold",
  },
  btnCheckout: {
    backgroundColor: "#3498DB",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    alignSelf: "center",
    width: "50%",
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  productText: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 18,
  },
});
