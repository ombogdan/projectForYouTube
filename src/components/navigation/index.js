import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../../screens/Auth/login";
import { Registration } from "../../screens/Auth/registration";

const Stack = createStackNavigator();
export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Login"}>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
