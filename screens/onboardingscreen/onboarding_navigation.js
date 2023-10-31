import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeOnBoardingScreen, OnBoardingScreenPage} from './export_index';
import React from 'react';

const Stack = createNativeStackNavigator();

function OnBoardingScreenNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="OnBoardingScreen"
          component={OnBoardingScreenPage}
        />
        <Stack.Screen
          name="HomeOnBoardingScreen"
          component={HomeOnBoardingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default OnBoardingScreenNavigation;
