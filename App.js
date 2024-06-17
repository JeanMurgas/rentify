import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { NativeRouter } from 'react-router-native';
import Main from './pages/Main';

// Configurar la navegación para móvil (Expo)
export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}