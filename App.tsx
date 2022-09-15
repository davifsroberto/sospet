import { NativeBaseProvider } from 'native-base';
import React from 'react';

import { SigIn } from './src/screens/Home';

export default function App() {
  return (
    <NativeBaseProvider>
      <SigIn />
    </NativeBaseProvider>
  );
}
