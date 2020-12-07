import React, {useState } from 'react'
import {StyleSheet, View ,Text, Button, SafeAreaView, TextInput} from 'react-native'


export default function AddWorkout({ navigation }) {
    const [workoutTitle, setWorkoutTitle ] = useState('')
    const [workoutDescription, setWorkoutDescription ] = useState('')


    function onSaveWorkout(){
        navigation.state.params.AddWorkout(workoutTitle, workoutValue)
        navigation.goBack()
    }
    
    return (
        <>
        < SafeAreaView>
            <Button 
            style = {styles.Button}
            onPress ={() =>navigation.goBack()}
             title="go back"
            >    
            </Button>
            <View style={{backgroundColor:'red'}}>
                <TextInput
                    label="Add Workout Title here"
                    value={workoutTitle}
                    mode='outlined'
                    onChangeText={setWorkoutTitle}
                    style={styles.title}
                />
                <TextInput
                    label="Add workout Description"
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
            </View>
        </ SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
     
    },
    text: {
        color: 'white'

    },
    iconButton:{
        right: 0,
        top: 40,
        margin: 10
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    text: {
        height: 300,
        fontSize: 16
    },
       titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    
})