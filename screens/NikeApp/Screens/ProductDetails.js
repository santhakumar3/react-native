import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from '../../Assets/SVG/BackIcon';
import HeartIcon from '../../Assets/SVG/HeartIcon';

const ProductDetails = () => {
  const {params} = useRoute();
  console.log('params:', params.data);
  const {goBack} = useNavigation();
  const {isFav, setIsFav} = useState(false);
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.greyBackgorund}>
        <SafeAreaView />
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconBox} onPress={() => goBack()}>
            <BackIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsFav(!isFav)}
            style={styles.iconBox}>
            <HeartIcon isFav={isFav} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greyBackgorund: {
    height: 350,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: 'lightgrey',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  iconBox: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
