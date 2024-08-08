import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Menu from "./screens/Menu";
import Cart from "./screens/Cart";
import ProductList from "./screens/ProductList";
import ProductDetail from "./screens/Detail/ProductDetail";
import Profile from "./screens/Profile";
import { SquareMenu, ShoppingCart, CircleUser } from "lucide-react-native";
import Item from "./components/addons/Item";
import AccesoriesList from "./screens/AccesoriesList";
import Checkout from "./screens/Checkout";
import ImageSelector from "./components/ImageSelector";
import Locals from "./screens/Locals";

const Stack = createStackNavigator();

function StackContainer() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Locales" component={Locals} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="AccesoriesList" component={AccesoriesList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ImageSelector" component={ImageSelector} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#14AE5C" },
        tabBarLabelStyle: { color: "#fff" },
      }}
    >
      <Tab.Screen
        name="Tienda"
        component={StackContainer}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <SquareMenu size={24} color={focused ? "#000" : "#fff"} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <ShoppingCart size={24} color={focused ? "#000" : "#fff"} />;
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <CircleUser size={24} color={focused ? "#000" : "#fff"} />;
          },
        }}
      >
        {(props) => <Profile {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer independent={true}>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
