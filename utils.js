// import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorage} from 'react-native'

const WORKOUT_STATE = "WORKOUT_STATE"

// Load State
export const loadState = () => {
  try {
    const serializedState = AsyncStorage.getItem(WORKOUT_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    AsyncStorage.setItem(WORKOUT_STATE, serializedState)
  } catch(err) {
    console.log("Error saving data:"+err)
  }
}