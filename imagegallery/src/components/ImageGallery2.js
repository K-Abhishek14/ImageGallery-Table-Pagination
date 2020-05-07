import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const images = [
    {
        _id: "e4affdb4cabadd41979f0048",
        S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/5a8497cf-0219-4420-9e77-d7ce9fd08499.JPG",
        S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/5a8497cf-0219-4420-9e77-d7ce9fd08499.JPG",
        DisplayName: "IMG_0157.JPG"
    },
    {
        _id: "5d3038cdb326d100e9000000",
        S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
        S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
        DisplayName: "180.jpg"
    },
    {
        _id: "5d3038cdceced100e9000001",
        S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
        S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
        DisplayName: "180.jpg"
    },
    {
        _id: "5d3038cdb300d100e9000002",
        S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
        S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
        DisplayName: "180.jpg"
    },
    {
        _id: "5d3038ed75705100e9000006",
        S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
        S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
        DisplayName: "180.jpg"
    },
    {
        _id: "5d3038ed75659100e9000007",
        S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
        S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
        DisplayName: "180.jpg"
    },
    {
        _id: "5d3038ed75659100e9000008",
        S3ActualURL: "https://s3.amazonaws.com/qa-a360/Opportunity/DEFF481B-BCBF-4187-ABE7-233E2A9C83CA.png",
        S3ThumbURL: "https://s3.amazonaws.com/qa-a360/Opportunity/thumb/DEFF481B-BCBF-4187-ABE7-233E2A9C83CA.png",
        DisplayName: "1821.jpg"
    }
]


export class ImageGallery2 extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            imagesrc: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
            imagelabel: "Image 1",
        };
    }
    handleChange(item1, item) {
        let str = "";
        let strlabel = "";
        str = item1.S3ActualURL;
        strlabel = item1.DisplayName;
        console.log('image  item1 clicked!', str);
        this.setState({ imagesrc: str })
        this.setState({ imagelabel: strlabel })
        console.log("imagesrc ", this.state.imagesrc);
        console.log("ImageLabel", this.state.imagelabel);

    }
    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div>
                    <List  >
                        {images.map(tile => (
                            <ListItem key={tile._id} onClick={this.handleChange.bind(tile, tile)}>
                                <img style={{ height: 80, width: 80, border: '1px solid black' }} src={tile.S3ThumbURL} alt="" />
                            </ListItem>
                        ))}
                    </List>
                </div>

                <img src={this.state.imagesrc} style={{ height: 400, width: 400, border: '1px solid black' }} alt=""/>
                <label>{this.state.imagelabel}</label>

            </div>
        )
    }
}

export default ImageGallery2
