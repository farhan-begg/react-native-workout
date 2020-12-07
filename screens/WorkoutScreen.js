import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Picker, StyleSheet, TextInput, Input ,   ScrollView,  TouchableOpacity, FlatList, List,
    Keyboard } from 'react-native';
import { useDispatch } from 'react-redux'
import { CREATE_WORKOUT } from '../actions/index'

export default function WorkoutScreen({ navigation }) {

    const [workouts, setWorkouts] = useState([])
    const addWorkout = workout => {
        workout.id = workout.length + 1
        setWorkouts([...workouts, workout])
    }
        return (
        <View style={styles.container }>
              {workouts.length === 0 ? (
                      <View style ={styles.titleContainer}>
              
                      <Text style={styles.title}>Add workout here</Text>
                  </View>
                    
                    ): (
                        <FlatList 

                        data = {workouts}
                        renderItem = {({item}) => (
                            <List.item

                            title = {item.workoutTitle}
                            
                            description = {item.workoutDescription}
                            descriptionNumber0fLines = {1}
                       
                            
                            />
                        )}
                        />
                    )}
        
            <Button style={styles.button}
            onPress = {() => navigation.navigate('AddWorkout')}
            title="Add a new Workout "
            >
                
            </Button>


        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    button:{



    }
        
    //Check project repo for styles
});
