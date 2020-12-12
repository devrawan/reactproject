import {React} from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import a1 from "./eat2.jpg";
import a2 from "./four.jpg";
import a4 from "./five.jpg";



const c1={
    title:"Rules for a Perfect Fridge",
    desc:"Your fruit and vegetable drawers should contain every color of the rainbow: red, orange,apple , olive, yellow, green, purple and brown.Red peppers, tomatoes,  Spinach and kale  Grapes Mushrooms If you can't fit all of this produce in your crisper.. ",
};
const c2={
    title:"The Healing Properties of Juicing",
    desc:"There are many health benefits of drinking fresh juice, and it's a great way to get nutrients from fruits or vegetables that your diet may be lacking. Juices retain most of of the vitamins..",
   
}
const c3={
    title:"Guide to Staying Healthy This Winter",
    desc:"must Guide to Staying Healthy This Winter Here's everything you need to fight both a cold and the flu—plus, immunity-boosting tips to help keep you sniffle-free all winter long..."
}

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginLeft:"15px",
      background:"#101522",
      color:"white"
    },
    media: {
      height: 200,
    },
  });
  
    function MediaCard() {
    const classes = useStyles();

  const dss={
      outline: "none",
      color:"#3f51b5"
  }
     
  const ss= {
    height: "524px",
    background: "rgb(255, 255, 255)",
    display: "flex",
    padding: "37px",
    margin: "10px",
    justifyContent: "space-evenly"
};



    return (
        <div style={ss} to="/MediaCard">
      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            to="/sign-up"
            className={classes.media}
            image={a2}
           
          />
          <CardContent>
            <Typography children={c1.title} gutterBottom variant="h5" component="h2">
           
            </Typography>
            <Typography  children={c1.desc} variant="body2" color="white" component="p">
           
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
           By sona ahmed
          </Button>
          <Button size="small" color="primary" >
           <a href= "http://www.oprah.com/health/dr-ozs-cold-and-flu-tips" target="_blank" style={dss}>Learn More</a> 
          </Button>
        </CardActions>
      </Card>


      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            to="/sign-up"
            className={classes.media}
            image={a1}
           
          />
          <CardContent>
            <Typography children={c2.title} gutterBottom variant="h5" component="h2">
           
            </Typography>
            <Typography  children={c2.desc} variant="body2" color="white" component="p">
           
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
           By sona ahmed
          </Button>
          <Button size="small" color="primary" >
           <a href= "http://www.oprah.com/health/dr-ozs-cold-and-flu-tips" target="_blank" style={dss}>Learn More</a> 
          </Button>
        </CardActions>
      </Card>



      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            to="/sign-up"
            className={classes.media}
            image={a4}
          
          />
          <CardContent>
            <Typography children={c3.title} gutterBottom variant="h5" component="h2">
           
            </Typography>
            <Typography  children={c3.desc} variant="body2" color="white" component="p">
           
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
           By sona ahmed
          </Button>
          <Button size="small" color="primary" >
           <a href= "http://www.oprah.com/health/dr-ozs-cold-and-flu-tips" target="_blank" style={dss}>Learn More</a> 
          </Button>
        </CardActions>
      </Card>
  </div>
    
    );
  }
  export default MediaCard;