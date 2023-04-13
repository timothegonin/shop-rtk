import { createSlice } from "@reduxjs/toolkit";
import { tvs as tvActions } from "../tvs/tvSlice";

const initialState = {
	phones: 5,
};

const phoneSlice = createSlice({
	name: "phone",
	initialState,
	reducers: {
		phones: (state) => {
			// Action {type: 'phone/phones', payload: undefined}
			state.phones--;
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
export const { phones } = phoneSlice.actions;
