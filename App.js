import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import ProductDetailPage from './screens/ProductDetailPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomePage} />
        <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

