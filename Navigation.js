import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./screens/Menu";
import ProductList from "./screens/ProductList";
import ProductDetail from "./screens/Detail/ProductDetail";
import Cart from "./screens/Cart";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default Navigation;
