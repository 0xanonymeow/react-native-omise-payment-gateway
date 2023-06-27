import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Navigation } from 'navigation';
import React, { useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Layout } from './Layout';

const App = () => {
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
      </Layout>
    </GestureHandlerRootView>
  );
};

export default App;
