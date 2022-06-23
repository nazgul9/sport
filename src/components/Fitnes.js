import React from 'react';
import { Card, ListGroupItem, ListGroup, Table } from "react-bootstrap"
import fines from "./fines.png"
import fitnes1 from "./fitnes1.png"
import video1 from "./video1.mp4"

function fitnes(props) {
    return (
        <div className='container'>
            <h1 className='text-center m-5  '>Фитнес</h1>
            <>
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-fitness-man-in-studio_7502-5008.jpg?w=2000" />

                </Card>
                <br />
                <Card>
                   
                    <Card.Img variant="bottom" src="https://www.ixbt.com/img/n1/news/2021/5/2/gym-fitness-girl-workout_large.jpg" />
                </Card>
                <div className='d-flex ' style={{marginLeft:"215px"}}>
                    <Card style={{ width: '20rem' }} className='m-5'>
                        <Card.Img variant="top" style={{width:"400px"}} src={fines} />
                    </Card>
                    <Card style={{ width: '18rem' }} className='m-5'>
                        <Card.Img variant="top" style={{width:"400px"}} src={fitnes1} />
                    </Card>
                   
                </div>
                <div className='d-block m-2 p-3' style={{ backgroundColor: "rgb(235 239 246)", borderRadius: "30px" }}>
                    <video src={video1} type="/video1.mp4" width="100%"  controls >
                    </video>
                </div>
                <div className='container'>
                    <h1 className='text-center mt-5'>Иштоо убактысы</h1>
                    <h2 className='text-center'>(Эркектер учун)</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>убакыт</th>
                                <th>кун алыс</th>
                                <th>кун сайын</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>9:00-12:00</td>
                                <td>2000coм</td>
                                <td>3000cом</td>
                            </tr>
                            <tr>
                                <td>9:00-15:00</td>
                                <td>2500coм</td>
                                <td>3500cом</td>
                            </tr>
                            <tr>
                                <td>9:00-22:30</td>
                                <td>3000coм</td>
                                <td>4000cом</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='container'>
                    <h1 className='text-center mt-5'>Иштоо убактысы</h1>
                    <h2 className='text-center'>(Аялдар учун)</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>убакыт</th>
                                <th>кун алыс</th>
                                <th>кун сайын</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>9:00-22:30</td>
                                <td>2200coм</td>
                                <td>3200cом</td>

                            </tr>

                        </tbody>
                    </Table>
                </div>
            </>
        </div>
    );
}

export default fitnes;