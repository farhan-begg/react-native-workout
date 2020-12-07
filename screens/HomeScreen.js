import * as React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeImage from '../components/HomeImage'
export default function HomeScreen({ navigation }) {
    return (
        <ImageBackground source={require('../images/home.jpg')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>

                <Text style={styles.text}>Welcome</Text>
                <Button
                    title="Go to Workout Screen"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        navigation.navigate('Workout', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'

    }
})