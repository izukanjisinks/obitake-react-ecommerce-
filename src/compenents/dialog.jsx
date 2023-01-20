import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
  } from '@material-ui/core'
  import { useState } from 'react'
import styled from 'styled-components'


  const Button = styled.div`
  
  `;

  const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 2;
  min-width: 60%;
  margin: 10px 0;
  padding: 10px;
`;

  
  
  export const MuiDialog = () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby='dialog-title'
          aria-describedby='dialog-description'>
          <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
          <DialogContent>
          <Form>
             <Input placeholder="username" />
             <Input placeholder="password" />
             <Button>LOGIN</Button>
             
           </Form>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }