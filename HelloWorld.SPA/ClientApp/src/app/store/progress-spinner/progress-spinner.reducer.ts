import * as loadingSpinner from './progress-spinner.action';
import { initialState, State } from './progress-spinner.state';

export function progressSpinerReducer(  state = initialState,  action: any): State {
  switch (action.type) {
    case loadingSpinner.SHOW_SPINNER: {
      const isActionAlreadyInProgress = state.actionsInProgress.filter(
        (currentAction: any) => currentAction === action.payload.type
      ).length;

      // If the action in already in progress and is registered
      // we don't modify the state
      if (isActionAlreadyInProgress) {
        return state;
      }
      // Adding the action type in our actionsInProgress array
      const newActionsInProgress = [
        ...state.actionsInProgress,
        action.payload.type
      ];

      return Object.assign(state, {
        active: newActionsInProgress.length,
        actionsInProgress: newActionsInProgress
      });
    }
    case loadingSpinner.HIDE_SPINNER: {
      // We remove trigger action from actionsInProgress array
      const newActionsInProgress = action.payload.triggerAction
        ? state.actionsInProgress.filter(
          (currentAction: any) =>
            currentAction !== action.payload.triggerAction
        )
        : state.actionsInProgress;

      return Object.assign(state, {
        actionsInProgress: newActionsInProgress,
        active: state.active > 0 ? newActionsInProgress.length : 0
      });
    }
    default:
      return state;
  }
}
