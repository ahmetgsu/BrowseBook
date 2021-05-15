import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import AnotherSearch from './AnotherSearch';

const BgImage = ({img, size, error}) => {
  let path = getRelatedImage(img);
  return (
    <View style={styles.container}>
      <FastImage
        source={path}
        style={{height: size, width: size}}
        resizeMode={FastImage.resizeMode.contain}
      />
      {error && <AnotherSearch />}
    </View>
  );
};

export default BgImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});

const getRelatedImage = (img) => {
  let path;
  if (img === 'studying') path = require('../assets/images/studying.png');
  if (img === 'reading') path = require('../assets/images/reading.png');
  return path;
};
