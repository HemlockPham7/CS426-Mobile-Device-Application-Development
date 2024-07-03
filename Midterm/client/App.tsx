import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding2 from './src/screens/Onboarding2';
import Onboarding1 from './src/screens/Onboarding1';
import Onboarding from './src/screens/Onboarding';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignInMail from './src/screens/SignInMail';
import Home from './src/screens/Home';
import Booking from './src/screens/Booking';
import Account from './src/screens/Account';
import AccountPersonalInformation from './src/screens/AccountPersonalInformation';
import TransportBooking from './src/screens/TransportBooking';
import TransportFlights from './src/screens/TransportFlights';
import TransportFilters from './src/screens/TransportFilters';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding1"
          component={Onboarding1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInMail"
          component={SignInMail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransportBooking"
          component={TransportBooking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransportFlights"
          component={TransportFlights}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransportFilters"
          component={TransportFilters}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountPersonalInformation"
          component={AccountPersonalInformation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
