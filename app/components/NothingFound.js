import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from '../style/style';

const NothingFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nothing Found</Text>
      <FastImage
        source={require('../assets/icons/404.png')}
        style={styles.icon}
        resizeMode={FastImage.resizeMode.contain}
        tintColor={colors.primary}
      />
    </View>
  );
};

export default NothingFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  text: {
    fontSize: 26,
    color: colors.primary,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  icon: {height: 200, width: 200},
});
