import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../style/style';

const AnotherSearch = () => {
  return (
    <Text style={styles.text}>
      {'Nothing found. \nPlease make another search'}
    </Text>
  );
};

export default AnotherSearch;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    lineHeight: 26,
    color: colors.primary,
  },
});
