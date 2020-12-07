// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import DataScreen from './screens/DataScreen';
import AddWorkout from './screens/AddWorkout'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import {loadState, saveState} from './utils'

const Tab = createBottomTabNavigator();

const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? "md-home" : "md-home"
              } else if (route.name === 'Workout') {
                iconName = focused ? "ios-checkmark-circle-outline" : "ios-checkmark-circle-outline"
              } else if (route.name === 'AddWorkout') {
                iconName = focused ? "ios-add-circle" : "ios-add-circle"
              } else if (route.name === 'Data') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >

          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Workout" component={WorkoutScreen} />
          <Tab.Screen name="AddWorkout" component={AddWorkout} />
          <Tab.Screen name="Data" component={DataScreen} />
         
        </Tab.Navigator>

      </NavigationContainer>
    </Provider>
  );
}

export default App;