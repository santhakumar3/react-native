import {StyleSheet, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        style={{
          width: 400,
          height: 400,
        }}
        source={require('../Animations/blackShoeAnimation.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
