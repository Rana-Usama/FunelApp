import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import ViewLeadsScreen from './app/screens/ViewLeadsScreen';
import InvoiceScreen from './app/screens/InvoiceScreen';
import SupportTicket from './app/screens/SupportTicket';
import CreateTicketScreen from './app/screens/CreateTicketScreen';
import SettingsScreen from './app/screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="SettingsScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ViewLeadsScreen" component={ViewLeadsScreen} />
        <Stack.Screen name="InvoiceScreen" component={InvoiceScreen} />
        <Stack.Screen name="SupportTicket" component={SupportTicket} />
        <Stack.Screen name="CreateTicketScreen" component={CreateTicketScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


