import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import Webservie from '../Webservice';
import SizeBox from '../utile/SizeBox';
import * as Progress from 'react-native-progress';
import {stackType} from './StackNav';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AppLoader from '../utile/loader_view';

/* type userType = {
  id: number;
  username: string;
  name: string;
  email: string;
};  */

type propsType = NativeStackScreenProps<stackType, 'HomeScreen'>;
export default function ProductScreen(props: propsType) {
  const {navigation} = props;
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  //const [users, setUsers] = useState<userType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //  var result = await Webservie.callGetWevservice('users');
    setLoading(true);
    var result = await Webservie.callGetWevserviceProduct();
    if (result != null) {
      setUsers(result.products);
      setLoading(false);
    }
  };
  const updateProductApi = async () => {
    //  var result = await Webservie.callGetWevservice('users');
    setLoading(true);
    var result = await Webservie.calPutWebservice();
    if (result != null) {
      setLoading(false);
    }
  };
  const renderUser = ({item}) => {
    var oldPrice = (item.price * item.discountPercentage) / 100;
    oldPrice = parseInt(item.price + oldPrice);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen', {item: item})}>
        <View style={styles.card}>
          <Image source={{uri: item.thumbnail}} style={styles.img}></Image>
          <SizeBox height={20} />
          <Text style={styles.title}>User {item.title}</Text>
          <Text style={styles.text}>{item.brand}</Text>
          <Text style={styles.text}>Price: {item.price}</Text>
          <Text style={styles.stickText}>Old Price: {oldPrice}</Text>
          <Text style={styles.text}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.constainer}>
      {users == null ? (
        <View style={styles.emptyConstainer}>
          <Button title="Fetch Data" onPress={() => fetchData()}></Button>
        {/*   <Button
            title="Update Product"
            onPress={() => updateProductApi()}></Button> */}
        </View>
      ) : (
        [
          <Button
            key="1"
            title="Data Clear"
            onPress={() => setUsers(null)}></Button>,

          <FlatList
            key={'2'}
            data={users}
            renderItem={renderUser}
            keyExtractor={(item, index) => index.toString()}
          />,
        ]
      )}
      {isLoading == true ? <AppLoader /> : <SizeBox />}
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: 'white',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
  },
  stickText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  img: {
    height: 150,
    width: Dimensions.get('window').width - 50,
    borderRadius: 10,
  },
});
