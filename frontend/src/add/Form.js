import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress } from '@mui/material';
import Alert from '@mui/material/Alert';

import { validateMail, validateName } from '../utils/Validations';

export default function FormDialog({ open, load, handleAdd, handleClose, error }) {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleChange = (set) => (e) => {
        set(e.target.value.trim());
    }

    const add = () => {
        if (!validateMail(email) || !validateName(firstName) || !validateName(lastName)) {
            return;
        }
        handleAdd({
            firstName,
            lastName,
            email
        });
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add User</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        error={!validateMail(email)}
                        onChange={handleChange(setEmail)} />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstName"
                        label="First Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        error={!validateName(firstName)}
                        onChange={handleChange(setFirstName)} />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="lastName"
                        label="Last Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        error={!validateName(lastName)}
                        onChange={handleChange(setLastName)} />
                    {!load && error.message &&
                        <Alert severity="error">{error.message}</Alert>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {load && <CircularProgress/>}
                    {!load && <Button onClick={add}>Add</Button>}
                </DialogActions>
            </Dialog>
        </div>
    );
}