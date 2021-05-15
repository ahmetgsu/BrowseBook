import React, {useState, useMemo} from 'react';
import {View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import SearchBar from '../components/SearchBar';
import {httpService} from '../providers/api';
import Loading from '../components/Loading';
import BgImage from '../components/BgImage';
import TextScrollList from '../components/TextScrollList';
import {width} from '../helpers/dimensions';

const TextList = ({navigation}) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [loading, setLoading] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const fetchData = async (text) => {
    setLoading(true);
    setResult(null);
    const response = await httpService.get(text, 1, null);
    if (response.status === 200) {
      // No result case has also 200 status code
      response.data.title ? setResult(response.data.title) : setError(true);
    } else {
      // handle error here
    }
    setLoading(false);
  };

  const imageWidth = useMemo(() => width * 0.95, [width]);

  return (
    <>
      <CustomHeader callback={toggleSearch} />
      {showSearch && <SearchBar callback={fetchData} />}
      <View style={{flex: 1}}>
        {result && <TextScrollList result={result} navigation={navigation} />}
        {!result && !loading && (
          <BgImage img="studying" size={imageWidth} error={error} />
        )}
      </View>
      <Loading visible={loading} />
    </>
  );
};

export default TextList;
