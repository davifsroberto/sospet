import { NativeBaseProvider } from 'native-base';
import React from 'react';

import 'react-native-gesture-handler';

import { Routes } from './src/routes';

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
