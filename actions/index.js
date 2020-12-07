export const CREATE_WORKOUT = 'CREATE_WORKOUT'
export const DELETE_WORKOUT = 'DELETE_WORKOUT'
export const COMPLETE_WORKOUT = 'COMPLETE_WORKOUT'
export const UPDATE_WORKOUT = 'UPDATE_WORKOUT'


function createWorkout(name, sets, reps) {
    return {
        type: CREATE_WORKOUT,
        payload: {
            name,
            sets,
            reps
        }
    }
}

function deleteWorkout(id) {
    return {
        type: DELETE_WORKOUT,
        payload: {
           id
        }
    }
}

function completeWorkout(index) {
    return {
        type: COMPLETE_WORKOUT,
        payload: {
            index
        }
    }
}

function updateWorkout(index, name, set, reps) {
    return {
        type: UPDATE_WORKOUT,
        payload: {
            index,
            name,
            set,
            reps
        }
    }
}

export { createWorkout, deleteWorkout, completeWorkout, updateWorkout }