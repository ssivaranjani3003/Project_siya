import React from 'react';
import Button from '@mui/material/Button';
function Muidemo(){
    return(
        <div>
            <Button variant="contained" color="primary">contain</Button>
            <br/><br/>
            <Button variant="outlined" color="secondary">Outline</Button>
            <br/><br/>
            <Button variant="text" color="inherit">text</Button>
            <br/><br/>
            <Button variant="contained" color="success">Click</Button>
            <br/><br/>
            <Button variant="contained" color="error">Click</Button>
            <br/><br/>
            <Button variant="contained" color="inherit" disabled>Click</Button>
            <br/><br/>
            <Button variant="contained" color="secondary" size="large">Click</Button>
            <br/><br/>
            <Button variant="contained" color="primary" size="small">Click</Button>
            <br/><br/>
            <Button variant="contained" color="secondary" size="medium">Click</Button>
            <Button
              onClick={() => {
              alert('clicked');
             }}
            >
             Click me
            </Button>
        </div>
    )
}
export default Muidemo;
