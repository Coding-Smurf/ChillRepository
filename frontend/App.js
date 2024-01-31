import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import the pages
import MainView from './MainView';
import Login from './Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainView">
        <Stack.Screen options={{headerShown: false}} name="MainView" component={MainView} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}