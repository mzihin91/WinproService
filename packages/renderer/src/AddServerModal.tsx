import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

export default function AddServerModal({addServer}: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    addServer();
    handleClose();
  };

  return (
    <>
      <Tooltip title="Add new server">
        <Button
          style={{minWidth: '160px'}}
          color="success"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add Server
        </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add Server</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="ipAddress"
            label="IP Address"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="directory"
            label="Directory"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
