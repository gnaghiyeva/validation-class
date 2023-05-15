import { Button, Grid, TextField } from '@mui/material'
import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'
import { useFormik } from 'formik';
import { SignInFormValidation } from '../validation/indexx'
import { v4 as uuidv4 } from 'uuid';

const SignIn = () => {
 const {user,setUser} = useUserContext()
  
  const handleSubmit=(values,actions)=>{
    values.id = uuidv4()
    console.log(values)
    console.log(actions);
    actions.resetForm()
    if (user) {
    
      // setUser({username:formik.values.username, password:formik.values.password})
      
     
    }
    else{
      setUser(null);
    }
  }
  const formik = useFormik({
    initialValues: {
      username:'',
      password:''
    },
    onSubmit: handleSubmit,
    validationSchema:SignInFormValidation
  
  }); 
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
    <TextField style={{width:'100%'}}
        className={(formik.errors.username && formik.touched.username) ? "input-error" : ""} onBlur={formik.handleBlur} 
        id="outlined-basic" 
        placeholder='First Name' 
        variant="outlined"
        type='text'
        onChange={formik.handleChange}
        value={formik.values.username}
        name='username' >
        </TextField>
        {(formik.errors.username && formik.touched.username) && <p style={{ color: 'red' }}>{formik.errors.username}</p>}


   
        <TextField style={{width:'100%',marginTop:'10px'}} id="outlined-basic" 
        className={(formik.errors.password && formik.touched.password) ? "input-error" : ""} onBlur={formik.handleBlur} 
        placeholder='New Password' 
        variant="outlined"
        type='password'
        onChange={formik.handleChange}
        value={formik.values.password}
        name='password'
        ></TextField>
         {(formik.errors.password && formik.touched.password) && <p style={{ color: 'red' }}>{formik.errors.password}</p>}
    <div style={{textAlign:'center'}}>

    <Button disabled={formik.isSubmitting || Object.keys(formik.errors).length>0} type='submit' style={{width:'100%'}} variant='contained'><Link style={{color:'white', textDecoration:'none'}} to='/navbar'>LOG IN</Link></Button>
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