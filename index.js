/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SplashScreenPage from './screens/splashscreen/splashscreen';
import OnBoardingScreenNavigation from './screens/onboardingscreen/onboarding_navigation';
import HomeOnBoardingScreen from './screens/onboardingscreen/onboarding_homepage';
import OnBoardingScreenPage from './screens/onboardingscreen/onboardingscreen';

// App
// AppRegistry.registerComponent(appName, () => App);

//splashscreen
// AppRegistry.registerComponent(appName, () => SplashScreenPage);

//onboarding screen
AppRegistry.registerComponent(appName, () => OnBoardingScreenNavigation);
