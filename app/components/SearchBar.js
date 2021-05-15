import React from 'react';
import {Searchbar} from 'react-native-paper';
import {colors} from '../style/style';

const SearchBar = ({callback}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search with book title"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onIconPress={() => callback(searchQuery)}
      onSubmitEditing={() => callback(searchQuery)}
      theme={{colors: {primary: colors.primary}}}
    />
  );
};

export default SearchBar;
