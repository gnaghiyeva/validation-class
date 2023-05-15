import { Button, Container, TextField, Typography } from '@mui/material';
import { Divider } from 'antd';
import { useFormik } from 'formik';
import React from 'react'
import { BasicFormValidation } from './validation';
import { v4 as uuidv4 } from 'uuid';
import "./form.css"
import { Link } from 'react-router-dom';
const BasicForm = () => {
 
    const handleSubmit=(values,actions)=>{
      values.id = uuidv4()
      console.log(values)
      console.log(actions);
      actions.resetForm()
    }
    const formik = useFormik({
        initialValues: {
          name:'',
          surname:'',
          phone:'',
          password:'',
          email: '',
        },
        onSubmit: handleSubmit,
        validationSchema:BasicFormValidation
      
      }); 
  return (
    <Container  style={{width:'30%', display:'flex', justifyContent:'center', alignItems:'center', border:'1px solid black',borderRadius:'10px', marginTop:'100px',boxShadow: '1px 2px 9px #200'}}>
    <form onSubmit={formik.handleSubmit}>
        <div>
            <h3>Sign Up</h3>
            <span>It's quick and easy.</span>
        </div>
        <Divider></Divider>

        <div style={{display:'flex',gap:'10px',width:'100%'}}>
        <TextField style={{width:'100%'}}
        className={(formik.errors.name && formik.touched.name) ? "input-error" : ""} onBlur={formik.handleBlur} 
        id="outlined-basic" 
        placeholder='First Name' 
        variant="outlined"
        type='text'
        onChange={formik.handleChange}
        value={formik.values.name}
        name='name' >
        </TextField>
        {(formik.errors.name && formik.touched.name) && <p style={{ color: 'red' }}>{formik.errors.name}</p>}
     
        <TextField 
        className={(formik.errors.surname && formik.touched.surname) ? "input-error" : ""} onBlur={formik.handleBlur} 
        style={{width:'100%'}}
        id="outlined-basic" 
        placeholder='Last Name' 
        variant="outlined"
        type='text'
        onChange={formik.handleChange}
        value={formik.values.surname}
        name='surname' >
        </TextField>
        {(formik.errors.surname && formik.touched.surname) && <p style={{ color: 'red' }}>{formik.errors.surname}</p>}

        </div>

        <div style={{width:'100%'}}>
        
        <TextField style={{width:'100%',marginTop:'10px'}} id="outlined-basic" 
        className={(formik.errors.phone && formik.touched.phone) ? "input-error" : ""} onBlur={formik.handleBlur} 
        placeholder='Mobile Number' 
        variant="outlined"
        type='string'
        onChange={formik.handleChange}
        value={formik.values.phone}
        name='phone'
        ></TextField>
          {(formik.errors.phone && formik.touched.phone) && <p style={{ color: 'red' }}>{formik.errors.phone}</p>}


        <TextField style={{width:'100%',marginTop:'10px'}} id="outlined-basic" 
        className={(formik.errors.password && formik.touched.password) ? "input-error" : ""} onBlur={formik.handleBlur} 
        placeholder='New Password' 
        variant="outlined"
        type='password'
        onChange={formik.handleChange}
        value={formik.values.password}
        name='password'
        ></TextField>
        </div>
        {(formik.errors.password && formik.touched.password) && <p style={{ color: 'red' }}>{formik.errors.password}</p>}

        <br/>
        <Typography style={{fontSize:'10px',width:'100%'}}>
            People who use our service may have uploaded your contact information to Facebook. Learn more.<br/>
             By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS 
             notifications from us and can opt out at any time.</Typography>
        
        <div style={{width:'40%', margin:'15px auto'}}>
        <Button  style={{width:'100%'}}  variant='contained' color='success' disabled={formik.isSubmitting || Object.keys(formik.errors).length>0} type='submit'>
        <Link style={{color:'white', textDecoration:'none'}} to='/navbar'>Sign UP</Link></Button>
        
        </div>
    </form>
    </Container>
  )
}

export default BasicForm