import { Button } from '@mui/material'
import React from 'react'
import { StyledLogoutButton, StyledHomeTitle } from '../../Styles/Home.styled'

const Home = () => {
  return (
    <div>
        <StyledHomeTitle>
        <t/> <t/>
        <marquee> 
        Welcome to SMART Plastic Reinvention Into Tiles </marquee>
     <StyledLogoutButton>
      <Button 
      href='/userinfo'
      >UserInfo</Button>
      <Button
     color="secondary"
     
        href="/logout"
        > Logout</Button>   </StyledLogoutButton>   </StyledHomeTitle>  

    </div>
  )
}

export default Home