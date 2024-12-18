import {createStackNavigator} from '@react-navigation/stack';
import App from './App';
import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Page2 from './page2';

const Stack = createStackNavigator();

function MyStack() {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={App}
          options={{
            title: 'Main',
          }}
        />
        <Stack.Screen
          name="Page2"
          component={Page2}
          options={{
            title: 'Page 2',
            headerSearchBarOptions: {
              placeholder: 'Serach',
              onChangeText(e) {},
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
