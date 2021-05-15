import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Button from '../components/Button';
import CustomHeader from '../components/CustomHeader';
import Loading from '../components/Loading';
import NothingFound from '../components/NothingFound';
import {httpService} from '../providers/api';

const BookDetail = ({navigation, route}) => {
  const canGoBack = navigation.canGoBack();
  const [book, setBook] = useState();
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      await fetchBookDetail();
      setReady(true);
    };
    init();
  }, []);

  const fetchBookDetail = async () => {
    setLoading(true);
    const details = await httpService.get(null, 1, route.params.isbn);
    if (details.status === 200) {
      setBook(details.data);
    } else {
      //handle error
    }
    setLoading(false);
  };

  const goToHome = () => {
    navigation.replace('TabStack');
  };

  return (
    <View style={{flex: 1}}>
      <CustomHeader canGoBack={canGoBack} navigation={navigation} />
      {book && (
        <View style={{flex: 1}}>
          <View style={[styles.imageContainer, styles.center]}>
            <FastImage
              source={{uri: book['@uri']}}
              style={styles.image}
              resizeMode={FastImage.resizeMode.contain}
              onLoadStart={() => setLoading(true)}
              onLoadEnd={() => setLoading(false)}
            />
          </View>
          <View style={[styles.titleContainer, styles.center]}>
            <Text style={{fontSize: 28, textAlign: 'center'}}>
              {book.titleweb}
            </Text>
          </View>
          <View style={[styles.titleContainer, styles.center]}>
            <Text style={{fontSize: 16, textAlign: 'center'}}>
              {book.author}
            </Text>
          </View>
          {!canGoBack && (
            <Button text="Go to Home Screen" callback={goToHome} />
          )}
        </View>
      )}
      {!book && ready && <NothingFound />}
      <Loading visible={loading} />
    </View>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  imageContainer: {
    height: 500,
    width: '100%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 400,
    width: undefined,
    aspectRatio: 0.65,
  },
  titleContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
