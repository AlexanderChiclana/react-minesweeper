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
    <div className={classes.root}>

<Grid container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center">

    <Grid item xs={12} sm={12} lg={12} xl={12}   alignItems="center" alignContent="center">

    <Typography component="h2" variant="h1" gutterBottom>
    React Minesweeper
    </Typography>
    </Grid>
    <Grid item xs={12} sm={12} lg={12} xl={12}>
    <Typography variant="h5" gutterBottom>

    Choose a difficulty, or create your own
    </Typography>
    </Grid>
</Grid>


    <Grid container spacing={8}>

    <Grid item xs={12} sm={6} lg={4} xl={4}>

    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Difficulty
        </Typography>
        <Typography variant="h5" component="h2">
            Beginner
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

        <Link to='/easy'>
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Play Beginner
        </Fab>  
        </Link>

      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={12} sm={6} lg={4} xl={4}>
<Card className={classes.card}>
  <CardContent>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      Difficulty
    </Typography>
    <Typography variant="h5" component="h2">
      Intermediate
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

     <Link to='/medium'>
         <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Play Intermediate
        </Fab>  
    </Link>

   </CardActions>
</Card>
</Grid>

<Grid item xs={12} sm={6} lg={4} xl={4}>
<Card className={classes.card}>
  <CardContent>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      Difficulty
    </Typography>
    <Typography variant="h5" component="h2">
       Expert
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

    <Link to='/hard'>
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Play Expert
        </Fab>  
    </Link>

    </CardActions>
</Card>
</Grid>


<Grid item xs={12} sm={6} lg={4} xl={4}>
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
</Grid>
    </Grid>
    </div>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)
