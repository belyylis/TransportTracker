import React from "react";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import { Screens } from "consts";
import { MainScreen, SettingsScreen, DetailsScreen } from "screens";

const STACK = createStackNavigator();
const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const MainStackNavigator = () => {
  return (
    <STACK.Navigator
      screenOptions={screenOptions}
      initialRouteName={Screens.MainScreen}
    >
      <STACK.Screen name={Screens.MainScreen} component={MainScreen} />
      <STACK.Screen name={Screens.SettingsScreen} component={SettingsScreen} />
      <STACK.Screen name={Screens.DetailsScreen} component={DetailsScreen} />
    </STACK.Navigator>
  );
};

export default MainStackNavigator;
