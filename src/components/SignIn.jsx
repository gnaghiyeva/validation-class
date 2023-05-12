import { Button, Grid, TextField } from '@mui/material'
import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'



const SignIn = () => {
  return (
   <>
   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{margin:'200px auto'}}>
   <Grid  item xs={6} style={{ textAlign:'center'}}>
    <h1 style={{color:'blue', fontSize:'60px'}}>facebook</h1>
    <p style={{fontSize:'40px'}}>Facebook helps you connect and share <br/> 
    with the people in your life.</p>
  </Grid>


  <Grid item xs={6}>
    <div style={{width:'80%', display:'flex',justifyContent:'center'}} >
    <form>
    <TextField  style={{width:'100%',marginBottom:'15px'}} id="outlined-basic"  placeholder='Email Address or phone' variant="outlined" />
    <TextField style={{width:'100%',marginBottom:'15px'}} id="outlined-basic"  placeholder='Password' variant="outlined" />
    <div style={{textAlign:'center'}}>

    <Button style={{width:'100%'}} variant='contained'><Link style={{color:'white', textDecoration:'none'}} to='/navbar'>LOG IN</Link></Button>
    </div>
    <br/>
    <a href='#' style={{width:'80%'}}>Forgotten Password</a>
    <Divider></Divider>
    <div style={{textAlign:'center'}}>
    <Button  variant='contained' color='success'><Link style={{color:'white', textDecoration:'none'}} to='/signup'>Create New Account</Link></Button>

    </div>
    </form>
    </div>
  </Grid>
</Grid>
   </>
  )
}

export default SignIn