import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'
import trophy from "../../img/tropphy.png"

const TringleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const TrophyImg = styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})

const Achivement = () => {
  return (
    <Card className='space-y-5' sx={{position:"relative"}}>
        <CardContent>
            <Typography variant="h6" sx={{letterSpacing:".25px"}}>
                Shop With zosh
            </Typography>
            <Typography variant='body2'>Congratulation 🥳</Typography>
            <Typography variant='h5' sx={{my:3.1}}>490.8k</Typography>

            <Button size='small' variant='contained'>View Sales</Button>
            <TringleImg src=''></TringleImg>
            <TrophyImg src={trophy}/>
        </CardContent>
      
    </Card>
  )
}

export default Achivement
