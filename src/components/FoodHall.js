import React from 'react';
import { Carousel, Table, Accordion } from 'react-bootstrap';
import vide from "./vide.mp4"

function FoodHall(props) {
    return (
        <>
            <h1 className='text-center'>Мини-Футбол</h1>
            <Carousel className='w- text-center' >
                <Carousel.Item>
                    <img
                        className="d-block w-100 p-5"
                        src="https://sportguide.kiev.ua/_imgs/photos/photo1/10241.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 p-5"
                        src="https://фабрикафутбола.рф/img/Slider%20dir/gal-foto_6.jpg "
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 p-5"
                        src="https://files.grand-prix.ua/objects/0/890/890blog1606320846.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <div className='d-flex container m-5'>
                <div className='d-block'>
                    <h4></h4>
                    <p></p>
                </div>
                <div className='d-block'>
                    <h4></h4>
                    <h5></h5>
                </div>
            </div>
            <h1 className='text-center mt-3'>Футбол</h1>
            <Accordion defaultActiveKey="0" flush className='container'>
              
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Футбол бул</Accordion.Header>
                    <Accordion.Body>
                    1920-жылдары футзалга окшош оюнду бразилиялыктар биринчилерден болуп ойношкон. 1958-жылы Швецияда өткөн футбол боюнча дүйнөлүк чемпионатта Австриянын курама командасынын лидерлеринин бири Йозеф Аргауэр залда бразилиялыктардын машыгуусуна көз салган. Австриялыкка ал кезде көргөн жабык футбол абдан жакты жана көп өтпөй ал өз мекенинде бир нече футзал беттештерин уюштурду. Жаңы спорт көп өтпөй Голландияга, Испанияга жана Италияга жол тартты. Голландия биринчи болуп улуттук чемпионатын өткөрдү.
                        <Carousel className='w- text-center' >
                            <Carousel.Item>
                                <iframe width="956" height="538" src="https://www.youtube.com/embed/vdJrmC6If8g" title="2007-2008 год рождения: Spartak Andijon 3-6 Ak Tulpar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            </Carousel.Item>
                        </Carousel>

                    </Accordion.Body>
                </Accordion.Item>
                <div className='d-block mt-5 p-3' style={{ backgroundColor: "rgb(235 239 246)", borderRadius: "30px" }}>
                    <video src={vide} type="/vide.mp4" width="100%"  controls >
                    </video>
                </div>
            <div className='container'>
                <h1 className='text-center mt-5'>Иштоо убактысы</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>жылы</th>
                            <th>2005-2009</th>
                            <th>2009-2013</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>куну</td>
                            <td>дуй шей жума</td>
                            <td>шар бей иш</td>
                        </tr>
                        <tr>
                            <td>толом</td>
                            <td>1000cом</td>
                            <td>1000сом</td>
                        </tr>
                        <tr>
                            <td>убакыт</td>
                            <td>9:30-10:30,15:30-16:30</td>
                            <td>9:30-10:30, 15:30-16:30</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
          
            </Accordion>



        </>
    );
}

export default FoodHall;