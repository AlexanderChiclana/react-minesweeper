import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import NavigationIcon from '@material-ui/icons/Navigation'
import { Link } from 'react-router-dom'
import CustomGame from './CustomGame'


const styles = {
  root: {
      flexGrow: 1,
    },
  card: {
    // minWidth: 275,
    // maxWidth: 345
  },
  bullet: {
    display: 'inline-block',
    // margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    // margin: theme.spacing.unit,
  },
  extendedIcon: {
    outline: 0,
    // marginRight: theme.spacing.unit,
  },
}

function SimpleCard(props) {
  const { classes } = props

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap'}} className={classes.root}>



  
    <Card style={{padding: '10px',  margin: '10px',  backgroundColor: '#ffba5a'}}className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Difficulty
        </Typography>
        <Typography variant="h5" component="h2">
            Beginner
        </Typography>
   
        <Typography component="p">
         8 x 8
          <br />
          should be easy
        </Typography>
      </CardContent>
      <CardActions>

        <Link to='/easy'>
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Play Beginner
        </Fab>  
        </Link>

      </CardActions>
    </Card>
    

    
<Card style={{padding: '10px',  margin: '10px',  backgroundColor: '#ffba5a'}} className={classes.card}>
  <CardContent>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      Difficulty
    </Typography>
    <Typography variant="h5" component="h2">
      Intermediate
    </Typography>
    <Typography component="p">
16 x 16      <br />
      a solid challenge
    </Typography>
  </CardContent>
  <CardActions>

     <Link to='/medium'>
         <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Play Intermediate
        </Fab>  
    </Link>

   </CardActions>
</Card>

<Card style={{padding: '10px', margin: '10px', backgroundColor: '#ffba5a' }} className={classes.card}>
  <CardContent>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      Difficulty
    </Typography>
    <Typography variant="h5" component="h2">
       Expert
    </Typography>
    <Typography component="p">
16 x 30      <br />
      hope for the best
    </Typography>
  </CardContent>
  <CardActions>

    <Link to='/hard'>
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Play Expert
        </Fab>  
    </Link>

    </CardActions>
</Card>



{/* <Grid item xs={12} sm={6} lg={3} xl={3}>
<Card className={classes.card}>
  <CardContent>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      Difficulty
    </Typography>
    <Typography variant="h5" component="h2">
       Custom
    </Typography>
    <Typography className={classes.pos} color="textSecondary">
      adjective
    </Typography>
    <Typography component="p">
      well meaning and kindly.
      <br />
      {'"a benevolent smile"'}
    </Typography>
  </CardContent>
  <CardActions>

        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
            Create Custom Game
        </Fab>  

    </CardActions>
</Card>
</Grid> */}
    {/* <CustomGame /> */}
    
    </div>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)
