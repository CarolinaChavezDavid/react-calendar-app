import { CardMedia, Grid } from '@mui/material'
import React from 'react'

export const AuthLayout = ({children}) => {
  return (
    <Grid 
      container 
      direction= 'column'
      justifyContent="center"
      alignItems="center"
    >
      
        <CardMedia 
            component="img"
            sx={{ width: 250, mt: 10}}

            image="src/assets/myCalendarAppLogo.png"
            alt="App logo"
        />

        <Grid item>
          { children }
    
        </Grid>

    </Grid>
  )
}
