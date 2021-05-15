import React from 'react';
import {StatusBar} from 'react-native';
import {Appbar} from 'react-native-paper';
import {colors} from '../style/style';

const CustomHeader = ({callback, canGoBack, navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Appbar.Header style={{backgroundColor: colors.primary}}>
        {canGoBack ? (
          <Appbar.BackAction
            onPress={() => navigation.goBack()}
            size={26}
            color={colors.secondary}
          />
        ) : (
          <Appbar.Action size={26} />
        )}
        <Appbar.Content
          title="Browse Book"
          color={colors.secondary}
          titleStyle={{fontSize: 24}}
        />
        {callback ? (
          <Appbar.Action
            icon="magnify"
            onPress={callback}
            color={colors.secondary}
            size={26}
          />
        ) : (
          <Appbar.Action size={26} />
        )}
      </Appbar.Header>
    </>
  );
};

export default CustomHeader;
