

import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
// import '../App.css';
import axios from 'axios'


const Admin = () => {
    var[inputs,setInputs] = useState({
        fname:"",
        fprice:"",
        // Add a new state for the image URL
        imageUrl: ""
      
    })
     const inputHandler = (e)=>{
        const {name,value}=e.target
        setInputs((prevData)=>({...prevData,[name]:value}))
        console.log(inputs)
     }
     const addHandler = ()=>{
      console.log("button clicked");
      axios.post("http://localhost:3007/add",inputs)
      .then((response)=>{
        console.log(response.data)
        alert(response.data)
      })
      .catch((err)=>console.log(err))
     }

  return (
   
          <div style={{margin:'6%'}} className='App' >
    <Typography variant='h4' style={{color:'black'}}>
      Add Food
      </Typography>
      <br /><br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <TextField 
          label='Food Name' 
          variant='outlined' 
          fullWidth
          name='fname'
          value={inputs.fname}
          onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}> 
          <TextField label='Price' 
          variant='outlined' 
          fullWidth
          name='fprice'
          value={inputs.eage}
          onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
                    <TextField
                        label='Image URL'
                        variant='outlined'
                        fullWidth
                        name='imageUrl'
                        value={inputs.imageUrl}
                        onChange={inputHandler}
                    />
                </Grid>
        
        </Grid>
        <br /><br /><br /><br /><br /><br /><br />
        <Grid item xs={12} sm={12} md={12}> 
        <Button variant='contained' color='success' onClick={addHandler}>Submit</Button>
        </Grid>
    
    </div>
  )
}

export default Admin