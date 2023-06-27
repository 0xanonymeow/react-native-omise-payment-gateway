import { Toasts } from '@backpackapp-io/react-native-toast';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useOmise } from 'hooks/useOmise';
import { Navigation } from 'navigation';
import React, { useCallback, useEffect } from 'react';
import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Layout } from './Layout';

LogBox.ignoreAllLogs();

const App = () => {
  const { setup } = useOmise();

  useEffect(() => {
    setup();
  }, []);

  const [fontsLoaded] = useFonts({
    'FC-Subject-Rounded-Bold': require('./assets/fonts/FC-Subject-Rounded-Bold.ttf'),
    'FC-Subject-Rounded-Regular': require('./assets/fonts/FC-Subject-Rounded-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Layout onLayout={onLayoutRootView}>
        <Navigation />
        <Toasts />
      </Layout>
    </GestureHandlerRootView>
  );
};

export default App;
