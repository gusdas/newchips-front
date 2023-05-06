/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {SafeAreaView, StyleSheet, useColorScheme, LogBox} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TestScreen from '@components/screens/TestScreen';
import LoginScreen from '@components/screens/LoginScreen';
import HomeScreen from '@components/screens/HomeScreen';
import rootReducer from './RTK/slices';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  LogBox.ignoreLogs(['Remote debugger']);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#FFFFFF',
  };
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <SafeAreaView style={[backgroundStyle, styles.container]}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={LoginScreen} />
            <Stack.Screen name="MyNews" component={TestScreen} />
            <Stack.Screen name="Profile" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
