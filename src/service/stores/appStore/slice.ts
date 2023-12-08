/* Core */
import { PayloadAction } from "@reduxjs/toolkit";
import { createSliceCustom } from "redux-eazy";
import names from "../names";

/* Types */
export interface SliceState {
	appInfo: string;
	isMobile: boolean;
}

const initialState = (): SliceState => {
	return {
		appInfo: "test",
		isMobile: false,
	};
};

const appSlice = createSliceCustom({
	name: names.appStore,
	stateInit: initialState,
	reducers: {
		setIsMobile(state, action: PayloadAction<boolean>) {
			state.isMobile == action.payload;
		},
		setAppInfo(state, action: PayloadAction<string>) {
			state.appInfo = action.payload;
		},
	},

	extraReducers: (builder) => {},
});

export default appSlice;
