import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

import Dialog from './dialog';
import Network from '../utils/Network';
import Urls from '../utils/URL';
import { add } from '../utils/redux/reducer/user';

import '../styles/add.css';

export default function Add() {

    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState('');
    const [load, setLoad] = React.useState(false);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = (user) => {
        setLoad(true);
        Network.POST(Urls.users.add, user, (data) => {
            dispatch(add(user));
            setOpen(false);
        }, (err) => {
            setError(err);
        }, () => {
            setLoad(false);
        });
    }

    return (
        <div>
            <Button 
                className='add-user-button'
                variant="contained"
                onClick={handleClickOpen}>
                Add User
            </Button>
            <Dialog
                load={load}
                open={open}
                handleAdd={handleAdd}
                handleClose={handleClose}/>
        </div>
    );

}