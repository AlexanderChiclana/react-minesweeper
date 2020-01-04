import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import NavigationIcon from '@material-ui/icons/Navigation'


class CustomGame extends Component {
  constructor(props) {
    super(props)
    this.state = { 
  
    }
  }
  
  render() {

    return (
      
      <div>
          <Card >

            <CardContent>
              <Typography gutterBottom variant="" component="h3">
                CustomGame
              </Typography>
            </CardContent>

          </Card>
      </div>
    )
  }
}

export default CustomGame
