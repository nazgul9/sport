import { logDOM } from '@testing-library/react';
import React from 'react';
import Table from 'react-bootstrap/esm/Table';
import Address from './Address';
import logo from './logo.png'

function Home(props) {
    return (
        <div className='container '>
            <img width={"100%"} src={logo} />

            <h1 className='text-center'>Иштоо убактысы</h1>
            <Table striped bordered hover className='container m-5'>
                <thead>
                    <tr>
                    <th>№</th>
                        <th>дуй</th>
                        <th>шей</th>
                        <th>шар</th>
                        <th>бей</th> 
                        <th>жу</th>
                        <th>иш</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> <td>башталышы </td>
                        <td>09:30</td>
                        <td>09:30</td>
                        <td>09:30</td>
                        <td>09:30</td>
                        <td>09:30</td>
                        <td>09:30</td>
                    </tr>
                    <tr>
                    <td>бутушу </td>
                        <td> 23:00</td>
                        <td> 23:00</td>
                        <td> 23:00</td>
                        <td> 23:00</td>
                        <td> 23:00</td>
                        <td> 23:00</td>
                    </tr>
                    
                </tbody>
            </Table>
            <Address/>
        </div>
    );
}

export default Home;