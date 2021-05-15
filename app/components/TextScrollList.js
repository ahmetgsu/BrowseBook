import React from 'react';
import {FlatList} from 'react-native';
import {List} from 'react-native-paper';
import {Divider} from 'react-native-paper';

const TextScrollList = ({result, navigation}) => {
  const renderItem = ({item}) => {
    return (
      <List.Item
        title={item.titleweb}
        description={item.author}
        onPress={() => navigation.navigate('BookDetail', {isbn: item.isbn})}
      />
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={result}
      renderItem={renderItem}
      keyExtractor={(item) => item.isbn10}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
};

export default TextScrollList;
