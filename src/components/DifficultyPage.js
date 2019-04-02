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
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
}

function SimpleCard(props) {
  const { classes } = props
  const bull = <span className={classes.bullet}>•</span>

  return (
    <div className={classes.root}>

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
        <Button size="small">Play</Button>
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
    <Button size="small">Play</Button>
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

  <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>  </CardActions>
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
