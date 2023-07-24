import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './DetailScreen';
import ProductScreen from './ProductScreen';

export type stackType = {
  ProductScreen: undefined;
  DetailScreen: undefined;
  ViewPagerPage: undefined;
};

const Stack = createStackNavigator<stackType>();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
