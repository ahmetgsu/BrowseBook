import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {width} from '../helpers/dimensions';
import {colors} from '../style/style';

const Button = ({text, callback}) => {
  return (
    <View style={styles.center}>
      <TouchableOpacity
        onPress={callback}
        activeOpacity={0.8}
        style={[styles.center, styles.touchable]}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  touchable: {
    width: width * 0.6,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    marginTop: 15,
  },
  buttonText: {color: colors.secondary, fontWeight: 'bold'},
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
