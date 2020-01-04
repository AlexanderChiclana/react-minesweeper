import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

class Header extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justify='center'
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            xl={12}
            alignItems='center'
            alignContent='center'
          >
       
            <h1>
              React Minesweeper
            </h1>

          </Grid>

          <Grid item xs={12} sm={12} lg={12} xl={12}>
              <h5>
              Choose a difficulty, or create your own
              </h5>

          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Header
