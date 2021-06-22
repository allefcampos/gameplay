import React from 'react';

// Carregar as fontes
import { useFonts} from 'expo-font';
import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';

export default function App() {

  // Só exibirá a tela inicial quando carregar todas as fontes.
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  // O componente AppLoading irá segurar a tela de splash até todas as fontes serem carregadas.
  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return(
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}
