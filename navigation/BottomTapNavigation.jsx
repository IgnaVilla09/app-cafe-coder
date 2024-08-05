import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Menu from "../screens/Menu";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import StackContainer from "./Stack";
import { ShoppingCart, SquareMenu, CircleUser } from "lucide-react-native";

const Tab = createBottomTabNavigator();

export default function BottomTapNavigation() {
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
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <CircleUser size={24} color={focused ? "#00f" : "#3335"} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
