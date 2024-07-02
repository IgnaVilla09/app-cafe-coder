import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Menu from './screens/Menu';
import ProductList from './screens/ProductList';

export default function App() {
  return (
      <SafeAreaView style={styles.container}
      contentContainerStyle={{
        padding: 15,
      }}>
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
        <ProductList />

        <StatusBar style="dark" backgroundColor="white" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
});
