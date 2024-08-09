import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import { Provider, useDispatch } from "react-redux";
import store from "./context/store";
import { useSelector } from "react-redux";
import { getSession, initSQliteDB } from "./persistence";
import { setUser } from "./features/UserSlice";

(async () => {
  try {
    const response = await initSQliteDB();
    console.log("DB local inicializada:", response);
  } catch (error) {
    Alert.alert("Error inicializando la DB local:", error);
  }
})();

const Stack = createStackNavigator();

function App() {
  const { user } = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await getSession();
        if (response.rows._array.length) {
          const user = response.rows._array[0];
          console.log({ user });
          dispatch(
            setUser({
              email: user.email,
              localId: user.localId,
              idToken: user.token,
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView
        style={styles.container}
        contentContainerStyle={{ padding: 15 }}
      >
        {user ? (
          <Stack.Navigator>
            <Stack.Screen name="Main" options={{ headerShown: false }}>
              {(props) => <Navigation {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home">
              {(props) => <Home {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Login">
              {(props) => <Login {...props} />}
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
