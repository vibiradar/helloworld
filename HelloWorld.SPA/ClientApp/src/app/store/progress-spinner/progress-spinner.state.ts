export interface State {
  active: number;
  actionsInProgress: any[];
}
export const initialState: State = {
  active: 0,
  actionsInProgress: []
}
