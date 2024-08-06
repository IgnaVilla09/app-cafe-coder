import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartProvider } from "./context/CartContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import Navigation from "./Navigation";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";

const Stack = createStackNavigator();

export default function App() {
  const [session, setSession] = useState(false);

  return (
    <CartProvider>
      <NavigationContainer>
        <SafeAreaView
          style={styles.container}
          contentContainerStyle={{ padding: 15 }}
        >
          {session ? (
            <Stack.Navigator>
              <Stack.Screen name="Main">
                {(props) => <Navigation {...props} setSession={setSession} />}
              </Stack.Screen>
            </Stack.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home">
                {(props) => <Home {...props} setSession={setSession} />}
              </Stack.Screen>
              <Stack.Screen name="Login">
                {(props) => <Login {...props} setSession={setSession} />}
              </Stack.Screen>
              <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
          )}

          <StatusBar style="dark" backgroundColor="white" />
        </SafeAreaView>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
});
