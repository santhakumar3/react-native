import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenPage = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View>
      <Text>Welcome to the Home Page</Text>
    </View>
  );
};

export default SplashScreenPage;
