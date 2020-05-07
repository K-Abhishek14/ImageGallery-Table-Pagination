import { IMAGE_GALLERY_DATA } from '../action/image-gallery-action';

const initialState = {
	imagegalleryarray: [],
}

export const imagegalleryreducer = (state = initialState, action) => {
	switch(action.type){
		case IMAGE_GALLERY_DATA:
            console.log("IMAGE GALLERY REDUCER",action.payload)
			return {
				...state,
				imagegalleryarray : action.payload
			}
		default:
			return {...state};
	}
}
