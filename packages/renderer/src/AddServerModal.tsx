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
import type {SubmitHandler} from 'react-hook-form';
import {useForm} from 'react-hook-form';

type Inputs = {
  name: string;
  ipAddress: string;
  directory: string;
};

export default function AddServerModal({addServer, updateTable}: any) {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    await addServer(data);
    updateTable();
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleSubmit = () => {
  //   addServer();
  //   handleClose();
  // };

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            {/* register your input into the hook by invoking the "register" function */}

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              defaultValue=""
              {...register('name', {required: true})}
            />
            {errors.name && <span>This field is required</span>}

            {/* include validation with required or other standard HTML validation rules */}
            <TextField
              autoFocus
              margin="dense"
              id="ipAddress"
              label="IP Address"
              type="text"
              fullWidth
              variant="standard"
              defaultValue=""
              {...register('ipAddress', {required: true})}
            />
            {/* errors will return when field validation fails  */}
            {errors.ipAddress && <span>This field is required</span>}

            <TextField
              margin="dense"
              id="directory"
              label="Directory"
              type="text"
              fullWidth
              variant="standard"
              defaultValue=""
              {...register('directory', {required: true})}
            />
            {errors.directory && <span>This field is required</span>}

            {/* <input type="submit" /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
