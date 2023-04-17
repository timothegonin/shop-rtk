import { configureStore } from "@reduxjs/toolkit";
import phonesReducer from "./features/phones/phoneSlice";
import tvsReducer from "./features/tvs/tvSlice";
import commentReducer from "./features/comments/commentsSlice";

const store = configureStore({
	reducer: {
		phone: phonesReducer,
		television: tvsReducer,
		comment: commentReducer,
	},
});

export default store;
