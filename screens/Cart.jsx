import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import { DollarSign, ArrowLeft, Trash2Icon } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../features/CartSlice";

export default function Cart() {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const productos = cart.length > 0;

  const emptyCartHandler = () => {
    dispatch(emptyCart());
  };

  const confirmOrder = () => {
    navigation.navigate("Checkout", {
      cartItems: cart,
      total: calculateTotal(),
    });
  };

  const calculateTotal = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  return (
    <View style={styles.cartContainer}>
      <Navbar />

      <View style={styles.container}>
        <View style={styles.containerSubtitle}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ArrowLeft color="black" size={30} />
          </TouchableOpacity>
          <Text style={styles.TextCart}>Carrito</Text>
        </View>
        <View>
          {productos ? (
            cart.map((product, index) => (
              <View style={styles.boxproducts} key={index}>
                <Text style={styles.textproducts}>- {product.title}</Text>
                <Text style={styles.textproducts}>x{product.quantity}</Text>
                <Text style={styles.textproductsPrice}>
                  ${product.subPrice}
                </Text>
              </View>
            ))
          ) : (
            <View style={styles.boxproducts}>
              <Text style={styles.textproducts}>
                No hay productos en el carrito
              </Text>
            </View>
          )}
        </View>
      </View>

      <View>
        {productos ? (
          <View>
            <TouchableOpacity
              style={styles.btnPay}
              onPress={() => {
                Alert.alert(
                  "Confirmar pedido",
                  "¿Estás seguro de que deseas confirmar tu pedido?",
                  [
                    {
                      text: "Cancelar",
                      style: "cancel",
                    },
                    { text: "Confirmar", onPress: confirmOrder },
                  ],
                  { cancelable: false }
                );
              }}
            >
              <Text style={styles.Text}>Confirmar pedido</Text>
              <DollarSign color="#fff" width={20} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnDelete}
              onPress={emptyCartHandler}
            >
              <Trash2Icon color="#fff" width={20} />
              <Text style={styles.Text}>Vaciar carrito</Text>
            </TouchableOpacity>
            <View style={styles.subtotalPrice}>
              <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
            </View>
          </View>
        ) : (
          <TouchableOpacity style={styles.btnPayDisabled}>
            <Text style={styles.Text}>Confirmar pedido</Text>
            <DollarSign color="#fff" width={20} />
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
    padding: 20,
  },
  containerSubtitle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  TextCart: {
    width: "90%",
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
  textproductsPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#14AE5C",
  },
  btnDelete: {
    width: 100,
    height: 80,
    backgroundColor: "#FF0000",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
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
    fontWeight: "bold",
    color: "#fff",
  },
  totalContainer: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  totalText: {
    fontSize: 20,
    border: "1px solid",
    fontWeight: "bold",
  },
  subtotalPrice: {
    position: "absolute",
    bottom: 20,
    left: "40%",
    padding: 10,
    borderRadius: 10,
  },
});
