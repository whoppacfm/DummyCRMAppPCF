/* eslint-disable */

import { resolve } from 'node:path/win32';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { createStore, AnyAction, combineReducers } from "redux";

const initialState:Array<any> = ["item1", "item2"];

function reducerData(stateData:Array<any> = initialState, action:AnyAction) {
  switch (action.type) {
    case 'data/dataloaded': {
      return action.data // Replace the existing state entirely by returning the new value
    }
    default:
      return stateData
  }
}

export const store = createStore(reducerData as any);

export function loadStoreData(type:any) {
  return new Promise((resolve, reject) => {
    let data = ["1", "2", "3"];
    if(type==1) {
      data = ["4", "5", "6"]
    }
    setTimeout(function() { resolve(data) }, 8000);
  });
}

//dispatch({ type: 'data/dataloaded', data: ["1", "2", "3"] })
//let testdata = useSelector((state) => state);
//<Provider store={store}>



