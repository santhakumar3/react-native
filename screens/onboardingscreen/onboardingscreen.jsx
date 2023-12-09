import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

import {LottieView} from 'lottie-react-native';

import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OnBoardingScreenPage = () => {
  const navigation = useNavigation();

  // three dots style changes
  // eslint-disable-next-line react/no-unstable-nested-components
  const DotComponent = ({selected}) => {
    return (
      <View
        className={`w-4 h-4 mx-1 flex items-center justify-center 
          rounded-full ${selected ? 'border border-red-400' : ''} p-2`}>
        <View
          className={`w-2 h-2 ${
            selected ? 'bg-red-400' : 'bg-red-200'
          } rounded-full`}
        />
      </View>
    );
  };

  return (
    //old code
    // <View className="flex-1 items-center justify-center bg-white">
    //   <Text className="text-blue-600 font-60">
    //     Open up App.js to start working on your app!
    //   </Text>
    // </View>

    //old  code

    // <Onboarding
    //   pages={[
    //     {
    //       backgroundColor: '#fff',
    //       image: (
    //         <Image
    //           style={{height: 300, width: 400}}
    //           source={require('../../assets/images/delivery-boy.json')}
    //         />
    //       ),
    //       title: 'Onboarding',
    //       subtitle: 'Done with React Native Onboarding Swiper',
    //     },
    //     {
    //       backgroundColor: '#fff',
    //       image: (
    //         <Image
    //           style={{height: 300, width: 400}}
    //           source={require('../../assets/images/delivery-boy.json')}
    //         />
    //       ),
    //       title: 'Onboarding',
    //       subtitle: 'Done with React Native Onboarding Swiper',
    //     },
    //     {
    //       backgroundColor: '#fff',
    //       image: (
    //         <Image
    //           style={{height: 300, width: 400}}
    //           source={require('../../assets/images/delivery-boy.json')}
    //         />
    //       ),
    //       title: 'Onboarding',
    //       subtitle: 'Done with React Native Onboarding Swiper',
    //     },
    //   ]}
    // />

    //new code

    <Onboarding
      // onSkip method not showing sometime while you time onSkip text, then no issues dont't stop typing
      // this method.. It will work
      //below code use to allow user to move to the previous screen
      // onSkip={() => navigation.navigate('HomeOnBoardingScreen')}

      //below code use to not allow user to move to the previous screen
      onSkip={() => navigation.replace('HomeOnBoardingScreen')}
      onDone={() => navigation.replace('HomeOnBoardingScreen')}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={{height: 400, width: 400}}
              source={require('../Assets/images/couples.png')}
            />
          ),
          title: (
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Shopping Time!!
            </Text>
          ),
          subtitle: 'Ready to Go for the Super Shopping..',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={{height: 400, width: 400}}
              source={require('../Assets/images/boy.png')}
            />
          ),
          title: (
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Kids Area!!!
            </Text>
          ),
          subtitle: 'World class kids play area...',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={{height: 400, width: 400}}
              source={require('../Assets/images/two_mens.png')}
            />
          ),
          title: (
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Friends Meetup!!
            </Text>
          ),
          subtitle: 'Shopping Time Meetups...',
        },
      ]}
    />
  );
};

export default OnBoardingScreenPage;
