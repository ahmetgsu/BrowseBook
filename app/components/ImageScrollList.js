import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const ImageScrollList = ({result, setLoading, navigation}) => {
  const renderItem = ({item, index}) => {
    let isbn = Array.isArray(item.relatedisbns.isbn)
      ? item.relatedisbns.isbn[0]['$']
      : item.relatedisbns.isbn['$'];
    return (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate('BookDetail', {isbn: isbn})}>
        <FastImage
          source={{uri: item['@uri']}}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </TouchableOpacity>
    );
  };

  return (
    // <View style={{flex: 1}}>
    <FlatList
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.columnStyle}
      showsVerticalScrollIndicator={false}
      data={result}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
    />
    // </View>
  );
};

export default ImageScrollList;

const styles = StyleSheet.create({
  container: {paddingVertical: 10},
  image: {
    height: 180,
    width: 120,
    borderRadius: 10,
  },
  columnStyle: {
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});
