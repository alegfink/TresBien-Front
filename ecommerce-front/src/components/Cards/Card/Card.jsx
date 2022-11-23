
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import logo from "../../../assets/images/Trés_bien__2_-removebg-preview.png"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({title,desc,price,img,numStock,id}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const handleClick = (id) =>{
  //   localStorage.setItem('favorite', JSON.stringify(id))
  // }

  return (
    <Card sx={{ maxWidth: 330 }}>
      <CardHeader
        avatar={
          <Avatar src={logo} />


        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={`${numStock}`<10?'Quedan pocas unidades':`${numStock}`===0?'SIN STOCK':null}
        subheaderTypographyProps={`${numStock}`<10?{backgroundColor:'yellow'}:`${numStock}`===0?{backgroundColor:'red'}:null}
      />
      <Link to={`/detail/${id}`}>
      <CardMedia
        component="img"
        height="280"
        image={img[0]}
        maxWidth="8"


      />
      </Link>
      <CardContent>
        <Typography variant="h8" color="secondary">
          {`$ ${price}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
          //  onClick={handleClick(`${_id}`)}
           />
        </IconButton>
        <IconButton>
        <AddShoppingCartOutlinedIcon sx={{marginRight:"1rem"}}/>
      </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

          <Typography paragraph>
           {desc}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}