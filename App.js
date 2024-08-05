import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartProvider } from "./context/CartContext";
import Navigation from "./Navigation";

export default function App() {
  return (
    <CartProvider>
      <SafeAreaView
        style={styles.container}
        contentContainerStyle={{ padding: 15 }}
      >
        <Navigation />
        <StatusBar style="dark" backgroundColor="white" />
      </SafeAreaView>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
});
