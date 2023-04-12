import { configureStore } from "@reduxjs/toolkit";
import phonesReducer from "./features/phones/phoneSlice";
import tvsReducer from "./features/tvs/tvSlice";

const store = configureStore({
	reducer: {
		phone: phonesReducer,
		tv: tvsReducer,
	},
});

export default store;
