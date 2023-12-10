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
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {navigate} = useNavigation();
  const renderItem = ({item, index}) => {
    return (
      <Animated.View
        entering={FadeInDown.delay(index * 300)
          .duration(600)
          .springify()
          .damping(12)}>
        <TouchableOpacity
          onPress={() => {
            navigate('ProductDetail', {data: item});
          }}>
          <ProductCard item={item} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      {/* Header */}
      <View style={styles.Header}>
        <Animated.View entering={FadeInLeft.delay(100).duration(400)}>
          <MenuIcon />
        </Animated.View>
        <Animated.View entering={FadeInRight.delay(100).duration(400)}>
          <OptionIcon />
        </Animated.View>
      </View>
      {/* body */}
      <View style={styles.BodyContainer}>
        <Animated.Text
          entering={FadeInLeft.delay(200).duration(500)}
          style={styles.title}>
          Nike Shoes
        </Animated.Text>
        <Animated.Text
          entering={FadeInLeft.delay(200).duration(500)}
          style={styles.subTitle}>
          Product of your Choice
        </Animated.Text>
      </View>
      {/* <ProductCard /> */}
      {/* Products */}
      <FlatList
        data={productData}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
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
  contentContainerStyle: {
    alignItems: 'center',
  },
});
