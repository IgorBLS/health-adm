import React from "react";
import {Box, Center, extendTheme, NativeBaseProvider} from "native-base";
import Login from "./screens/Login";
import Home from "./screens/Home"
import {useFonts} from 'expo-font';

const theme = extendTheme({
  fontConfig: {
    SFPro: {
      100: {
        normal: 'SF-Pro-Text-Ultralight',
        italic: 'SF-Pro-Text-UltralightItalic',
      },
      200: {
        normal: 'SF-Pro-Text-Thin',
        italic: 'SF-Pro-Text-ThinItalic',
      },
      300: {
        normal: 'SF-Pro-Text-Light',
        italic: 'SF-Pro-Text-LightItalic',
      },
      400: {
        normal: 'SF-Pro-Text-Regular',
        italic: 'SF-Pro-Text-RegularItalic',
      },
      500: {
        normal: 'SF-Pro-Text-Medium',
        italic: 'SF-Pro-Text-MediumItalic',
      },
      600: {
        normal: 'SF-Pro-Text-Semibold',
        italic: 'SF-Pro-Text-SemiboldItalic',
      },
      700: {
        normal: 'SF-Pro-Text-Bold',
        italic: 'SF-Pro-Text-BoldItalic'
      },
      800: {
        normal: 'SF-Pro-Text-Heavy',
        italic: 'SF-Pro-Text-HeavyItalic'
      },
      900: {
        normal: 'SF-Pro-Text-Black',
        italic: 'SF-Pro-Text-BlackItalic'
      }
    }
  },

  fonts: {
    heading: 'SFPro',
    body: 'SFPro',
    mono: 'SFPro',
  },
});

export default function App() {
  const fontsLoaded = useFonts({
    'SF-Pro-Text-Ultralight': require('./assets/fonts/SF-Pro-Text-Ultralight.otf'),
    'SF-Pro-Text-UltralightItalic': require('./assets/fonts/SF-Pro-Text-UltralightItalic.otf'),
    'SF-Pro-Text-Thin': require('./assets/fonts/SF-Pro-Text-Thin.otf'),
    'SF-Pro-Text-ThinItalic': require('./assets/fonts/SF-Pro-Text-ThinItalic.otf'),
    'SF-Pro-Text-Light': require('./assets/fonts/SF-Pro-Text-Light.otf'),
    'SF-Pro-Text-LightItalic': require('./assets/fonts/SF-Pro-Text-LightItalic.otf'),
    'SF-Pro-Text-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'SF-Pro-Text-RegularItalic': require('./assets/fonts/SF-Pro-Text-RegularItalic.otf'),
    'SF-Pro-Text-Medium': require('./assets/fonts/SF-Pro-Text-Medium.otf'),
    'SF-Pro-Text-MediumItalic': require('./assets/fonts/SF-Pro-Text-MediumItalic.otf'),
    'SF-Pro-Text-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
    'SF-Pro-Text-SemiboldItalic': require('./assets/fonts/SF-Pro-Text-SemiboldItalic.otf'),
    'SF-Pro-Text-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    'SF-Pro-Text-BoldItalic': require('./assets/fonts/SF-Pro-Text-BoldItalic.otf'),
    'SF-Pro-Text-Heavy': require('./assets/fonts/SF-Pro-Text-Heavy.otf'),
    'SF-Pro-Text-HeavyItalic': require('./assets/fonts/SF-Pro-Text-HeavyItalic.otf'),
    'SF-Pro-Text-Black': require('./assets/fonts/SF-Pro-Text-Black.otf'),
    'SF-Pro-Text-BlackItalic': require('./assets/fonts/SF-Pro-Text-BlackItalic.otf'),
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Center>
        <Box width="320px" height="568px">
          <Home user="Luciana" bank={8000}/>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

