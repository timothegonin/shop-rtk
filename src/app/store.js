import { configureStore } from "@reduxjs/toolkit";
import phonesReducer from "./features/phones/phoneSlice";

const store = configureStore({
	reducer: {
		phone: phonesReducer,
	},
});

export default store;
