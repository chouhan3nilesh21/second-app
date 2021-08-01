import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ApproveAuth(props) {
    
  const {open,handleClose} = props;

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="auth">
        <DialogTitle id="auth">Approve the selected Transactions</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your password to confirm approving the transactions.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="pwd"
            label="Password"
            type="password"
            fullWidth
          />
          <Button variant = "contained"  color="primary">
            Submit
          </Button>
        </DialogContent>
        <DialogActions>
          <Button variant = "contained" onClick={handleClose} >
            Cancel
          </Button>
          <Button variant = "contained" onClick={handleClose} style ={{backgroundColor: '#40d50a'}}>
            Approve
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
