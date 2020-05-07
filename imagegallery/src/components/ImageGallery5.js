import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => (
  {
    root: {
      display: 'flex',
      alignItems: 'center',
      margin:10,
      flexWrap:'wrap',
      
    },
    card: {
      minWidth: 200,
      maxWidth: 160,
      marginRight: 5,
      margin:10,
      border:'1px solid #c4c4c4'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    dialogroot: {
      margin: 0,
      padding: theme.spacing(2),
    },
  }
);


const images = [
  {
    _id: "e4affdb4cabadd41979f0048",
    S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/5a8497cf-0219-4420-9e77-d7ce9fd08499.JPG",
    S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/5a8497cf-0219-4420-9e77-d7ce9fd08499.JPG",
    DisplayName: "IMG_0157.JPG",
    Address:"SARAN Bihar"
  },
  {
    _id: "5d3038cdb326d100e9000000",
    S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
    S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
    DisplayName: "180.jpg",
    Address:"Chhapra Bihar"
  },
  {
    _id: "5d3038cdceced100e9000001",
    S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
    S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
    DisplayName: "181.jpg",
    Address:"Patna Bihar"
  },
  {
    _id: "5d3038cdb300d100e9000002",
    S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
    S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
    DisplayName: "182.jpg",
    Address:"New Delhi India"
  },
  {
    _id: "5d3038ed75705100e9000006",
    S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
    S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
    DisplayName: "183.jpg",
    Address:"New Delhi India"
  },
  {
    _id: "5d3038ed75659100e9000007",
    S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
    S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
    DisplayName: "184.jpg",
    Address:"New Delhi India"
},
{
  _id:"5d3038ed75659100e9000008",
  S3ActualURL:"https://s3.amazonaws.com/qa-a360/Opportunity/DEFF481B-BCBF-4187-ABE7-233E2A9C83CA.png",
  S3ThumbURL: "https://s3.amazonaws.com/qa-a360/Opportunity/thumb/DEFF481B-BCBF-4187-ABE7-233E2A9C83CA.png",
  DisplayName: "1821.jpg",
  Address:"New Delhi India"
},
{
  _id: "e4affdb4cabadd41979f0048",
  S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/5a8497cf-0219-4420-9e77-d7ce9fd08499.JPG",
  S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/5a8497cf-0219-4420-9e77-d7ce9fd08499.JPG",
  DisplayName: "IMG_0157.JPG",
  Address:"New Delhi India"
},
{
  _id: "5d3038cdb326d100e9000000",
  S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
  S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
  DisplayName: "185.jpg",
  Address:"New Delhi India"
},
{
  _id: "5d3038cdceced100e9000001",
  S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
  S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
  DisplayName: "180.jpg",
  Address:"New Delhi India"
},
{
  _id: "5d3038cdb300d100e9000002",
  S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
  S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
  DisplayName: "180.jpg",
  Address:"Greater Noida India",
  
},
{
  _id: "5d3038ed75705100e9000006",
  S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
  S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
  DisplayName: "180.jpg",
  Address:"New Delhi India"
},
{
  _id: "5d3038ed75659100e9000007",
  S3ActualURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
  S3ThumbURL: "https://s3.amazonaws.com/qa-a360/AdhocManageDocument/thumb/4067A63A-A64C-4DCC-8DD1-4A88FD35B4AD.jpg",
  DisplayName: "180.jpg",
  Address:"Gurugram India"
},
{
_id:"5d3038ed75659100e9000008",
S3ActualURL:"https://s3.amazonaws.com/qa-a360/Opportunity/DEFF481B-BCBF-4187-ABE7-233E2A9C83CA.png",
S3ThumbURL: "https://s3.amazonaws.com/qa-a360/Opportunity/thumb/DEFF481B-BCBF-4187-ABE7-233E2A9C83CA.png",
DisplayName: "1821.jpg",
Address:"Noida India"
}
 ]

class ImageGallery5 extends Component {
  constructor(){
    super();
    this.handleOpenDialog=this.handleOpenDialog.bind(this);
    this.handleCloseDialog=this.handleCloseDialog.bind(this);
    this.state={
      openDialog:false
    }
  }
  

  handleOpenDialog(item1,item) {
		this.setState({
		  openDialog: true
    });
    let str = "";
    let strlabel="";
    str=item1.S3ActualURL;
    strlabel=item1.DisplayName;
    this.setState({imagesrc:str})
    this.setState({imagelabel:strlabel})
    }
    handleCloseDialog() {
      this.setState({
        openDialog: false
      });
    }
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {images.map(tile => ( 
          <Card className={classes.card} onClick={this.handleOpenDialog.bind(tile,tile)}> 
            <CardMedia  
              className={classes.media}
              image={tile.S3ActualURL}  
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h6">
                {tile.DisplayName}
              </Typography>
              <Typography gutterBottom variant="headline" component="h6">
            {tile.Address}
          </Typography>
            </CardContent>
          </Card>
        ))}
        <Dialog open={this.state.openDialog}>
        <MuiDialogTitle disableTypography className={classes.dialogroot}>
      <Typography variant="h5">{this.state.imagelabel}</Typography>
       
        <IconButton aria-label="close" className={classes.closeButton} onClick={this.handleCloseDialog}>
          <CloseIcon />
        </IconButton>
       
    </MuiDialogTitle>
             
              
          <img src={this.state.imagesrc}  style={{ height: 400, width: 400, margin:15}} alt=""/>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ImageGallery5);