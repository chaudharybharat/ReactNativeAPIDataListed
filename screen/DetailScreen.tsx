import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import SizeBox from '../utile/SizeBox';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackType} from './StackNav';
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from 'react-native-best-viewpager';

/* import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager'; */

type propsType = NativeStackScreenProps<stackType>;

const DetailScreen = (props: propsType) => {
  const {navigation, route} = props;
  const {item} = route.params;
  var oldPrice = (item.price * item.discountPercentage) / 100;
  oldPrice = parseInt(item.price + oldPrice);

  return (
    <View style={styles.constainer}>
      {/*  <IndicatorViewPager
          style={styles.pagerStyle}
          indicator={<PagerDotIndicator pageCount={3} />}>
          <Text>sgs</Text>
          <Text>sgs</Text>
        </IndicatorViewPager> */}

      <Image source={{uri: item.thumbnail}} style={styles.img}></Image>
      <SizeBox height={20} />
      <Text style={styles.title}>{item.title}</Text>
      <SizeBox height={5} />
      <Text style={styles.text}>{item.brand}</Text>
      <SizeBox height={5} />
      <Text style={styles.text}>Price: {item.price}</Text>
      <SizeBox height={5} />
      <Text style={styles.stickText}>Old Price: {oldPrice}</Text>
      <SizeBox height={5} />
      <Text style={styles.text}>{item.description}</Text>
    </View>
  );
};

function renderDotIndicator() {
  return <PagerDotIndicator pageCount={3} />;
}

export default DetailScreen;
const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  constainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  emptyConstainer: {
    margin: 15,
  },
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: 14,
  },
  stickText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  img: {
    height: 200,
    width: Dimensions.get('window').width - 50,
    borderRadius: 10,
  },
  page: {
    width: 200,
  },
});
