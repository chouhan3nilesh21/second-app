import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextareaAutosize } from '@material-ui/core';

export default function RejectDialog(props) {

  const { open, handleClose } = props;

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="rej">
        <DialogTitle id="rej">Reject the selected Transactions</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a reason for rejection of the transaction
          </DialogContentText>
          
          <TextField
            autoFocus
            multiline
            margin="dense"
            id="rejectionReason"
            label="Rejection Reason"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} >
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose} color="secondary">
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
