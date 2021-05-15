import React, {useState, useMemo} from 'react';
import {View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import SearchBar from '../components/SearchBar';
import {httpService} from '../providers/api';
import Loading from '../components/Loading';
import AnotherSearch from '../components/AnotherSearch';
import BgImage from '../components/BgImage';
import ImageScrollList from '../components/ImageScrollList';
import {width} from '../helpers/dimensions';

const CoverList = ({navigation}) => {
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
    const response = await httpService.get(text, 0, null);
    if (response.status === 200) {
      response.data.title ? setResult(response.data.title) : setError(true);
    } else {
      // handle error here
    }
    setLoading(false);
  };

  const imageWidth = useMemo(() => width * 0.85, [width]);

  return (
    <>
      <CustomHeader callback={toggleSearch} />
      {showSearch && <SearchBar callback={fetchData} />}
      <View style={{flex: 1}}>
        {result && (
          <ImageScrollList
            result={result}
            setLoading={setLoading}
            navigation={navigation}
          />
        )}
        {!result && !loading && (
          <BgImage img="reading" size={imageWidth} error={error} />
        )}
      </View>
      <Loading visible={loading} />
    </>
  );
};

export default CoverList;
