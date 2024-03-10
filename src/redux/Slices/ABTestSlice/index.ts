import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IABTestFormData } from "../../../types";

interface IABTestsState {
	data: IABTestFormData[];
	currentVariation: string;
}

const initialState: IABTestsState = {
	data: [],
	currentVariation: "",
};

export const abTestsSlice = createSlice({
	name: "abTests",
	initialState,
	reducers: {
		addTestConfig: (state, action: PayloadAction<IABTestFormData>) => {
			state.data.push(action.payload);
		},
		setVariation: (state, action) => {
			state.currentVariation = action.payload;
		},
	},
});

export const { addTestConfig, setVariation } = abTestsSlice.actions;

export default abTestsSlice.reducer;
