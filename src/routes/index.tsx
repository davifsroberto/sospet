import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { DrawerRoutes } from './tab.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
