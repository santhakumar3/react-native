import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import HomeScreen from '../homepagescreen/HomeScreen';

export default function AppScreen() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
