import React, { Component } from 'react'
import CardGallery from 'react-card-image-gallery';


export class ImageGalleryPage extends Component {
 
    componentDidMount() {
        this.props.imageGalleryAction();
    }
    componentDidUpdate(prevProps) {
        if (this.props.imagegalleryarray !== prevProps.imagegalleryarray) {
            console.log("galleryyyy", this.props.imagegalleryarray);
        }
    }

    render() {
        return (
            <div>
                {this.props.imagegalleryarray.length > 0 && <CardGallery imagesPerPage={12}>
                    {this.props.imagegalleryarray.map(tile => (
                        <div>
                            <img src={tile.S3ActualURL} alt="" />
                        </div>
                    ))}
                </CardGallery>}
            </div>
        )
    }
}

export default ImageGalleryPage
