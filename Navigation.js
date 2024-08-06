import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./screens/Menu";
import Cart from "./screens/Cart";
import ProductList from "./screens/ProductList";
import ProductDetail from "./screens/Detail/ProductDetail";
import Profile from "./screens/Profile";
import { SquareMenu, ShoppingCart, CircleUser } from "lucide-react-native";
import Item from "./components/addons/Item";

const Stack = createStackNavigator();

function StackContainer() {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabNavigation({ setSession }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tienda"
        component={StackContainer}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <SquareMenu size={24} color={focused ? "#00f" : "#3335"} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <ShoppingCart size={24} color={focused ? "#00f" : "#3335"} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <CircleUser size={24} color={focused ? "#00f" : "#3335"} />;
          },
        }}
      >
        {(props) => <Profile {...props} setSession={setSession} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const Navigation = ({ setSession }) => {
  return (
    <NavigationContainer independent={true}>
      <BottomTabNavigation setSession={setSession} />
    </NavigationContainer>
  );
};

export default Navigation;
