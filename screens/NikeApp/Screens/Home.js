import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import OptionIcon from '../../Assets/SVG/OptionIcon';
import MenuIcon from '../../Assets/SVG//MenuIcon';
import ProductCard from '../components/ProductCard';
import {productData} from '../Data/ProductData';

const Home = () => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity>
        <ProductCard />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      {/* Header */}
      <View style={styles.Header}>
        <MenuIcon />
        <OptionIcon />
      </View>
      {/* body */}
      <View style={styles.BodyContainer}>
        <Text style={styles.title}>Nike Shoes</Text>
        <Text style={styles.subTitle}>Product of your Choice</Text>
      </View>
      {/* <ProductCard /> */}
      {/* Products */}
      <FlatList
        data={productData}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 10,
    color: '#000',
  },
  BodyContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
});
