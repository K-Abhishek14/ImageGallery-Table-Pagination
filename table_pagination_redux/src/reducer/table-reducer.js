import { TABLE_DATA_SUCCESS, TABLE_DATA_FAILURE } from "../utils/AppConstant";

const initialState = {
	emp: [],
}

export const tableReducer = (state = initialState, action) => {
	switch (action.type) {
		case TABLE_DATA_SUCCESS:
			console.log("Table REDUCER", action.payload)
			return {
				...state,
				emp: action.payload
			};
		case TABLE_DATA_FAILURE:
			return {
				...state,
				emp: action.payload,
			};
		default:
			return { ...state };
	}
}