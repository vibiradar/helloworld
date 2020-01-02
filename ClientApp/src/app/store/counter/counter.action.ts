import { Action } from "@ngrx/store";

export const ActionTypes = {
    Counter_Increment: '[Counter Component] Increment counter',
    Counter_Decrement: '[Counter Component] Decrement counter',
    Counter_Reset: '[Counter Component] Reset counter'
}
export class Increment implements Action {
    readonly type: string = ActionTypes.Counter_Increment
    constructor(public payload: number) {
        console.log(payload);
    }
}
export class Decrement implements Action {
    readonly type: string = ActionTypes.Counter_Decrement
    constructor(public payload: number) {
        console.log(payload);
    }
}
export class Reset implements Action {
    readonly type: string = ActionTypes.Counter_Reset
    constructor(public payload: number) {
        console.log(payload);
    }
}

export type Counter_Action = Increment | Decrement | Reset;