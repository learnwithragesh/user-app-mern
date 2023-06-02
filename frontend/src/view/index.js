import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector } from 'react-redux';

import UserRow from './UserRow';
import Network from '../utils/Network';
import Urls from '../utils/URL';
import { getUser } from '../utils/redux/reducer/user';

import '../styles/view.css';

export default function BasicTable() {

    const { user } = useSelector(getUser);
    const [users, setUsers] = React.useState([]);
    const [error, setError] = React.useState('');
    const [load, setLoad] = React.useState(false);

    React.useEffect(() => {
        setLoad(true);
        Network.GET(Urls.users.getAll, (data) => {
            setUsers(data.data);
        }, (err) => {
            setError(err);
        }, () => {
            setLoad(false);
        });
    }, []);

    React.useEffect(() => {
        if (user) {
            setUsers([...users, user]);
        }
    }, [user]);

    return (
        <div className='users-table'>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sno</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, index) => (
                            <UserRow index={index} user={user}/>
                        ))}
                    </TableBody>
                </Table>
                {load && <LinearProgress />}
            </TableContainer>
        </div>
    );
}