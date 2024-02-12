import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    regular: require('../assets/fonts/Poppins-Regular.ttf'),
    semibold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    bold: require('../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name='(tabs)'
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
