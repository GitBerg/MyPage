import { configureStore, createSlice } from '@reduxjs/toolkit';

 export interface TriggerState {
    trigger: boolean;
  }

const initialState:TriggerState = {
    trigger: false,
  };

  const AnimationSlice = createSlice({
    name: 'trigger',
    initialState,
    reducers: {
      switchOn(state) {
        return {...state, trigger: true}
      },
      switchOff(state) {
        return {...state, trigger: false}
      },
    },
  });

  const store = configureStore({
    reducer: {
      trigger: AnimationSlice.reducer,
    },
  });

  export const { switchOn, switchOff } = AnimationSlice.actions;

    export default store;