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

const Tab = createBottomTabNavigator();
const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? "md-home" : "md-home-outline"
              } else if (route.name === 'Workout') {
                iconName = focused ? "workout" : "workout"
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