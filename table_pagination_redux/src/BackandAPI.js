import Axios from "axios";


export const API_GET_TABLE_DATA = "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data";
 
export const API_INSTANCE = Axios.create({
	actualURL: API_GET_TABLE_DATA,
})