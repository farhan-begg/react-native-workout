import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Picker, StyleSheet, TextInput, Input ,   ScrollView,  TouchableOpacity, FlatList, List,
    Keyboard, } from 'react-native';
import { useSelector } from 'react-redux'
import { color } from 'react-native-reanimated';
import {deleteWorkout} from '../actions'
import {useDispatch } from 'react-redux'









export default function WorkoutScreen({ navigation }) {

    const workouts = useSelector((state) =>  state.workouts)
    const dispatch = useDispatch()
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const addWorkouts = workout => {
        workout.id = workouts.length + 1 
        setWorkouts([...workoutes, workout])
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
                        renderItem = {({item, index}) => (
                            <View style={styles.displayWorkout}>
                                <Text style={styles.name}>Workout: {item.name}</Text>
                                <Text style={styles.sets}> Workout Description: {item.sets}</Text>     
                                <Button 
                                    onPress = {() => dispatch(deleteWorkout(index))} 
                                   title="Delete Workout" >
                                </Button>
                            </View>
                              
                        )}
                        keyExtractor = {item => item.name}
                        />
                    )}
        
            <Button 
            onPress = {() => navigation.navigate('AddWorkout',{
                addWorkouts
            })
        }
            title="Add a New Workout "
            >
                
            </Button>
      
  
 





        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',

    },
   name: {
       fontSize: 35,
    },
    sets:{
        fontSize: 20,
        color: 'grey',
        paddingTop: 5
    },
    checkbox: {
        alignSelf: "center",
        height: 50,
        width: 50
     
      },


    //Check project repo for styles
});
