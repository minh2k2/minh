import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [data, setdata] = useState([]);
  useEffect(() => {
    getListPhotos();
    return () => {};
  }, []);
  const getListPhotos = () => {
    const apiURL =
      'https://jsonplaceholder.typicode.com/photos?_limit=6&_page=1';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setdata(resJson);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };
  const renderItem = ({item, index}) => {
    const backgroundColor =
      item.getListPhotos === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.getListPhotos === selectedId ? 'white' : 'black';

    return (
      <View style={styles.item}>
        <TouchableOpacity>
          <Image
            key={index}
            style={styles.image}
            source={{uri: item.url}}
            resizeMode="contain"
          />
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{backgroundColor}}
            textColor={{color}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    fiexDirection: 'row',
    marginTop: 8,
    shadowColor: 4,
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  title: {
    fontSize: 25,
    marginTop: 16,
    marginLeft: 8,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  wrapText: {
    flex: 1,
    marginTop: 16,
    marginLeft: 8,
  },
});

export default App;
