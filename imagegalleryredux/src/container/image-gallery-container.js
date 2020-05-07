import {imageGalleryAction } from "../action/image-gallery-action";
import {connect} from 'react-redux';
import ImageGalleryPage from "../component/image-gallery";

const mapDispatchToProps = {
	imageGalleryAction,
};

const mapStateToProps = currentState => {
	return {
		imagegalleryarray: currentState.imageRed.imagegalleryarray,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGalleryPage);
