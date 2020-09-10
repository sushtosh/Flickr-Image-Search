import { Action } from '@ngrx/store';

export const ADD_IMAGE = 'ADD_IMAGE';

export function addImageReducer(state = [], action:any) {
  switch (action.type) {
    case ADD_IMAGE:
        return [...state, action.payload];
    default:
        return state;
    }
}