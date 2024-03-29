
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useLoadedToken() {

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {

    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        // await Font.loadAsync(Ionicons.font);
        await AsyncStorage.getItem('user');
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();

  }, []);

  return isLoadingComplete;
}
