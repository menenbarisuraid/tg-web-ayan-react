import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Profile = () => {
    const [employees, setEmployees] = useState([]);
  
    useEffect(() => {
      axios.get('https://e3e19886e234f33f.mokky.dev/profile') 
        .then(response => setEmployees(response.data))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map(employee => (
              <TableRow key={employee.id}>
                <TableCell>{employee.product}</TableCell>
                <TableCell>{employee.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

export default Profile;