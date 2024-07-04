import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Menu from './screens/Menu';
import ProductList from './screens/ProductList';
import ProductDetail from './screens/Detail/ProductDetail';
import Cart from './screens/Cart';


const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
        <NavigationContainer>
          <SafeAreaView style={styles.container} contentContainerStyle={{ padding: 15 }}>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Menu" component={Menu} />
              <Stack.Screen name="ProductList" component={ProductList} />
              <Stack.Screen name="ProductDetail" component={ProductDetail} />
              <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
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
