import {Linking} from 'react-native';

let config = {
  screens: {
    BookDetail: {
      path: 'books/:isbn',
      params: {
        isbn: null,
      },
    },
  },
};

let linking = {
  prefixes: ['mwlbooksapp://'],
  // Custom function to get the URL which was used to open the app
  async getInitialURL() {
    // First, you may want to do the default deep link handling
    // Check if app was opened from a deep link
    const url = await Linking.getInitialURL();

    if (url != null) {
      return url;
    }
  },
  // Custom function to subscribe to incoming links
  subscribe(listener) {
    // First, you may want to do the default deep link handling
    const onReceiveURL = ({url}) => listener(url);

    // Listen to incoming links from deep linking
    Linking.addEventListener('url', onReceiveURL);

    return () => {
      // Clean up the event listeners
      Linking.removeEventListener('url', onReceiveURL);
    };
  },
  config,
};

export {linking};
