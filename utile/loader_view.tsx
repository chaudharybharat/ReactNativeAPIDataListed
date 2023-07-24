import React from 'react';
import {View, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

const AppLoader = () => {
  return <Lottie source={require('../assets/animation/loader.json')} autoPlay loop />;
};

export default AppLoader;

