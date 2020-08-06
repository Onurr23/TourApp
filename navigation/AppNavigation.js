import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlaceList from "../screens/PlaceList";
import Detail from "../screens/Detail";
import {Ionicons} from "@expo/vector-icons";

const Stack = createStackNavigator();

const dontShowHeader=({

    headerShown : false

})
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const AppNavigation=props=>{

    return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={{gestureEnabled:true,gestureDirection :'horizontal', transitionSpec: {
      open: config,
      close: config,
    }}}>
          <Stack.Screen name="Places" component={PlaceList} options={dontShowHeader} />
          <Stack.Screen name="Details" component={Detail} options={dontShowHeader} />
        </Stack.Navigator>
      </NavigationContainer>
    )

}

export default AppNavigation;