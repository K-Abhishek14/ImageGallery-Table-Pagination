import React, { Component } from 'react';
import CardGallery from 'react-card-image-gallery';

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
    _id:"5d3038ed75659100e9000008",
    S3ActualURL:"https://s3.amazonaws.com/qa-a360/Opportunity/DEFF481B-BCBF-4187-ABE7-233E2A9C83CA.png",
    S3ThumbURL: "https://s3.amazonaws.com/qa-a360/Opportunity/thumb/DEFF481B-BCBF-4187-ABE7-233E2A9C83CA.png",
    DisplayName: "1821.jpg"
  },
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
  _id:"5d3038ed75659100e9000008",
  S3ActualURL:"https://s3.amazonaws.com/qa-a360/Opportunity/DEFF481B-BCBF-4187-ABE7-233E2A9C83CA.png",
  S3ThumbURL: "https://s3.amazonaws.com/qa-a360/Opportunity/thumb/DEFF481B-BCBF-4187-ABE7-233E2A9C83CA.png",
  DisplayName: "1821.jpg"
  }
   ]

export class ImageGallery1 extends Component {
    render() {
        return (
            <div>
                <CardGallery imagesPerPage={12}>
                    {images.map(tile => (
                        <div>
                            <img src={tile.S3ActualURL} alt=""/>
                        </div>
                    ))}
                </CardGallery>
            </div>
        )
    }
}

export default ImageGallery1
