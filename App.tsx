import React from 'react';
import SplashScreen from './src/screens/splash';
import SignInScreen from './src/screens/signIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import PhoneAuthScreen from './src/screens/PhoneAuth';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="PhoneAuthScreen" component={PhoneAuthScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
export default App;
