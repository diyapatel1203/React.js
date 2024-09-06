import React from 'react'
import { DECREMENT, INCREMENT } from './actiontype';

const initialstate={
    counter:0,
  }
export const counterReducer = (state=initialstate,action) => {
    switch(action.type){
        case INCREMENT :
          return {counter:state.counter + action.payload};
        case DECREMENT :
          return {counter:state.counter - action.payload};
        default:
          return state;
      }
}


