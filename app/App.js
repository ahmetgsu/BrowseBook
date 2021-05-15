import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppStack} from './navigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider>
      <AppStack />
    </PaperProvider>
  );
};

export default App;
