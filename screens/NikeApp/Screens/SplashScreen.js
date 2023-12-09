import {StyleSheet, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const {navigate} = useNavigation();
  setTimeout(() => {
    navigate('Home');
  }, 3000);
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
    paddingTop: 50,
    // alignItems: 'center',
    backgroundColor: '#24aBaf',
  },
});
