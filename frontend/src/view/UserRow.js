import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function UserRow({ index, user }) {
    return (
        <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell>{index + 1}</TableCell>
            <TableCell component="th" scope="row">
                {user.firstName}
            </TableCell>
            <TableCell align="right">{user.lastName}</TableCell>
            <TableCell align="right">{user.email}</TableCell>
        </TableRow>
    );
}