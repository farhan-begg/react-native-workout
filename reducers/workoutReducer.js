import { CREATE_WORKOUT, DELETE_WORKOUT, UPDATE_WORKOUT, COMPLETE_WORKOUT } from '../actions'


export default function workoutReducer(state = [], action) {

    switch (action.type) {

        case CREATE_WORKOUT:
            return state

        case DELETE_WORKOUT:
            return state

        case UPDATE_WORKOUT:
            return state

        case COMPLETE_WORKOUT:
            return state

        default:
            return state
    }

}