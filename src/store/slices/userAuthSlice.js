import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  nickName: null,
  firstName: null,
  lastName: null,
  photo: null,
};

const userAuthSlice = createSlice({
  name: 'userAuth', // префікс для типів екшенів 
  initialState,
  reducers: {},
});

const {reducer, actions} = userAuthSlice;
export const {} = actions; // експорт редюсерыв
export default reducer;
