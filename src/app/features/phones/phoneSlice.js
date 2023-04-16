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
		phones: (state, action) => {
			// Action {type: 'phone/phones', payload: number}
			state.phones -= action.payload;
		},
		addPhones: (state, action) => {
			// Action {type: 'phone/addPhones', payload: any}
			state.phones += action.payload;
		},
		tablets: (state, action) => {
			// Action {type: 'phone/tablets', payload: number}
			state.tablets -= action.payload;
		},
		addTablets: (state, action) => {
			// Action {type: 'phone/addTablets', payload: any}
			state.tablets += action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(tvActions, (state, action) => {
			if (action.payload <= state.phones) {
				state.phones -= action.payload;
			} else if (action.payload > state.phones) {
				state.phones = 0;
			}
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
export const { phones, addPhones, tablets, addTablets } = phoneSlice.actions;
