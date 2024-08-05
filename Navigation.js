import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTapNavigation from "./navigation/BottomTapNavigation";

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTapNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
