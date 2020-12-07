import React, {useState } from 'react'
import {StyleSheet, View ,Text, Button, SafeAreaView, TextInput} from 'react-native'
import {createWorkout, deleteWorkout} from '../actions'
import {useDispatch } from 'react-redux'

export default function AddWorkout({ navigation }) {
    const [workoutTitle, setWorkoutTitle ] = useState('')
    const [workoutDescription, setWorkoutDescription ] = useState('')

    const dispatch = useDispatch()


    function onSaveWorkout(){
        dispatch(createWorkout(workoutTitle, workoutDescription , 10) )
        // navigation.state.params.Workout(workoutTitle, workoutDescription)
        navigation.goBack()
    }
    
    return (
        <>
        < SafeAreaView>
      
            <View  style={styles.workout}>
                <TextInput 
                    placeholder="Add Workout Title here"
                    value={workoutTitle}
                    mode='outlined'
                    onChangeText={setWorkoutTitle}
                    style={styles.title}
                />
                <TextInput style={styles.description}
                    placeholder="Add workout Description"
                    value={workoutDescription}
                    onChangeText={setWorkoutDescription}
                    mode="flat"
                    multiline={true}
                    style={styles.text}
                    scrollEnabled={true}
                    returnKeyLabel='done'
                    blurOnSubmit={true}
                />
                   <Button 
                     style = {styles.Button}
              
                    disabled={workoutTitle == '' ? true : false}
                    onPress={() => onSaveWorkout()}
                     title="Save"
                    >    

                     </Button>
                     <Button 
                        style = {styles.Button}
                        onPress ={() =>navigation.goBack()}
                        title="Back"
                        >    
                    </Button>
            </View>
        </ SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    workout: {
        marginTop: 250,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    text: {
        color: 'black'

    },

    title: {
        fontSize: 32,
        marginBottom: 16
    },
    text: {
        height: 100,
        fontSize: 24
    },

    
})