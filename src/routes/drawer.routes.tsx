import { createDrawerNavigator } from '@react-navigation/drawer';
import { CreateScreen } from '@screens/Create';
import { HomeScreen } from '@screens/Home';

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />

      <Screen
        name="Create"
        component={CreateScreen}
        options={{ title: 'Create' }}
      />
    </Navigator>
  );
}
