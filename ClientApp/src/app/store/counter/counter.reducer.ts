import { State, Action } from "@ngrx/store";
import { ActionTypes, Counter_Action } from './counter.action'
import { initialState } from './counter.state'
export function counterReducer(state = initialState, action: Counter_Action): any {
    switch (action.type) {
        case ActionTypes.Counter_Increment:
            return {
                ...state,
                counter: state.counter + 1

                // Return the current state
            };
        case ActionTypes.Counter_Decrement:
            return {
                ...state,
                counter: state.counter - 1
                // Return the current state
            };
        case ActionTypes.Counter_Reset:
            return {
                ...state,
                counter: 0
                // Return the current state
            };
        default:
            return {
                ...state,
                // Return the current state
            };
    }
}
