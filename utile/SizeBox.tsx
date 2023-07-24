import React from 'react';
import {View} from 'react-native';
type propsType = {
  height?: number;
  width?: number;
};

const SizeBox = (props: propsType) => {
  return <View style={{height: props.height ?? 0, width: props.width ?? 0}} />;
};

export default SizeBox;
