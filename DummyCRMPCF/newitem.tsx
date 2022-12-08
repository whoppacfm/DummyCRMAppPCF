import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ItemInputForm() {
  return (
    <>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Material" variant="outlined" />
            <TextField id="outlined-basic" label="Ref" variant="outlined" />
        </Box>
        <br/>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <Button variant="contained">Create</Button>
            <Button variant="outlined">Clear</Button>                
        </Box>        
    </>
  );
}