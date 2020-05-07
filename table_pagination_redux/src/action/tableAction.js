import { TABLE_DATA_SUCCESS, TABLE_DATA_FAILURE } from "../utils/AppConstant";
import Axios from "axios";

export const getEmployee = () => {
	return dispatch => {
		return Axios.get('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json')
			.then(function (response) {
				dispatch({ type: TABLE_DATA_SUCCESS, payload: response.data });
				console.log("TABLE ACTION", response.data);
			})
			.catch(function (error) {
				dispatch({ type: TABLE_DATA_FAILURE, payload: error });
			});
	}
}