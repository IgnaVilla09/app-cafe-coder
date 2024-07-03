import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Menu from './screens/Menu';
import ProductList from './screens/ProductList';
import ProductDetail from './screens/Detail/ProductDetail';
import Item from './components/addons/Item';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.container} contentContainerStyle={{ padding: 15 }}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
      <StatusBar style="dark" backgroundColor="white" />
    </SafeAreaView>
  </NavigationContainer>
  );

        {/* <Navbar /> */}

        {/* HOME */}
          {/* <Home /> */}

        {/* LOGIN */}
          {/* <Login /> */}

        {/* REGISTRO */}
        {/* <Register /> */}

        {/* MENU */}
        {/* <Menu/> */}

        {/* LISTA DE PRODUCTOS */}
        // <ProductList />


      {/* PRODUCTO DETALLADO */}

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
});
