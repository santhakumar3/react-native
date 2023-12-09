import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ProductCard = () => {
  return (
    <View style={styles.mainBox}>
      {/* <Image
        styles={styles.image}
        source={require('../../Assets/NikeApp/Nike-Air-Max-97-Air-Force.png')}
        resizeMode="center"
      /> */}
      <Image
        style={styles.image}
        source={require('../../Assets/NikeApp/Nike-Air-Max-97-Air-Force.png')}
      />
      <Text style={styles.price}>
        <Text style={styles.currency}>$</Text>
        19.99
      </Text>
      <Text style={styles.title}>Nike Air Max</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  mainBox: {
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'center',
  },
  price: {
    fontSize: 18,
    color: '#323232',
    fontWeight: '600',
  },
  currency: {
    color: '#24aBaf',
  },
  title: {
    fontSize: 18,
    color: '#323232',
    fontWeight: 'bold',
  },
});
