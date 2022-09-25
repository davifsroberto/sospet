import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateScreen } from '@screens/Create';

const { Screen, Navigator } = createNativeStackNavigator();

export function AdRoutes() {
  return (
    <Navigator>
      {/* TODO: Implement others Screens */}
      <Screen name="create" component={CreateScreen} />
    </Navigator>
  );
}
