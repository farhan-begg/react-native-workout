import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    LineChart,

  } from 'react-native-chart-kit'
  import { useSelector } from 'react-redux'


export default function DataScreen({ navigation }) {
    const workouts = useSelector((state) =>  state.workouts)
    const data = workouts.map((item, index) => {
        return{
          name: item.name,
     
    
        }
      })

      const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = .1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 0
        }
      }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'grey' , fontSize: 20}}>Data Screen</Text>
            <LineChart
                data={{
                labels: [ 'Leg Press', 'Pull Ups', 'Push Ups', 'Sit Ups', 'Bench Press'],
                datasets: [{
                    data: [
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                 
                    ]
                }]
                }}
                width={380} // from react-native
                height={220}
                chartConfig={
                chartConfig}
                bezier
                style={{
                marginVertical: 10,
                borderRadius: 5,
                padding: 20
                }}
              />

              <Button 
              title="Go to Home" 
              onPress={() => navigation.navigate('Home')} />

        </View>
    );
}