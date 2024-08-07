import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import Navigation from "./Navigation";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import { Provider } from "react-redux";
import store from "./context/store";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

function App() {
  const [session, setSession] = useState(false);
  const { user } = useSelector((state) => state.auth.value);

  return (
    <NavigationContainer>
      <SafeAreaView
        style={styles.container}
        contentContainerStyle={{ padding: 15 }}
      >
        {user ? (
          <Stack.Navigator>
            <Stack.Screen name="Main" options={{ headerShown: false }}>
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
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
});
