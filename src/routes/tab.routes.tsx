import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CreateScreen } from '@screens/Create';
import { HomeScreen } from '@screens/Home';
import { Icon } from 'native-base';
import React from 'react';

const { Screen, Navigator } = createBottomTabNavigator();

export function DrawerRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'lightBlue.900',
        tabBarInactiveTintColor: 'lightBlue.900',
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;

            case 'Create':
              iconName = focused ? 'create' : 'create-outline';
              break;
          }

          return (
            <Icon as={Ionicons} name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: '' }}
      />

      <Screen
        name="Create"
        component={CreateScreen}
        options={{ headerTitle: '' }}
      />
    </Navigator>
  );
}
