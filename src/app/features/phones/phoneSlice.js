import { createSlice } from "@reduxjs/toolkit";
import { tvs as tvActions } from "../tvs/tvSlice";

const initialState = {
	phones: 5,
	tablets: 10,
};

const phoneSlice = createSlice({
	name: "phone",
	initialState,
	reducers: {
		phones: (state) => {
			// Action {type: 'phone/phones', payload: undefined}
			state.phones--;
		},
		tablets: (state, action) => {
			// Action {type: 'phone/tablets', payload: number}
			state.tablets -= action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(tvActions, (state) => {
			state.phones--;
		});
	},
	// ALT
	// extraReducers: {
	// 	["tv/tvs"]: (state) => {
	// 		state.phones--;
	// 	},
	// },
});

export default phoneSlice.reducer;
export const { phones, tablets } = phoneSlice.actions;
