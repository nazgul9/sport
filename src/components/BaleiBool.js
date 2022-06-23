import React from 'react';
import { Carousel, CardGroup, Card, Table } from 'react-bootstrap';
import vid from "./vid.mp4"

function BaleiBool(props) {
    return (
        <div className='container'>
            <h1 className='text-center mt-5'>Волейбол</h1>
            <Carousel variant="dark" className='w-75 container mt-4'>
                <Carousel.Item className='w-100 text-center'>
                    <img
                        className="d-block w-100 text-center"
                        src="https://img.olympicchannel.com/images/image/private/t_16-9_3200/v1536936974/primary/exvzqcvorticinejmmel"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='w-100 text-center'>
                    <img
                        className="d-block w-100 text-center"
                        src="https://www.fivb.org/Vis2009/Images/GetImage.asmx?No=202202282&width=1410&height=923&stretch=uniformtofill"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='w-100 text-center'>
                    <img
                        className="d-block w-100 text-center"
                        src="https://cdn.dmcl.biz/media/image/233432/o/FIVB+volleyball.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='w-100 text-center'>
                    <img
                        className="d-block w-100 text-center"
                        src="https://img.olympicchannel.com/images/image/private/t_16-9_3200/v1536936974/primary/exvzqcvorticinejmmel"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='w-100 text-center'>
                    <img
                        className="d-block w-100 text-center"
                        src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/AYGN62PUMJJCXP53ZLYXI6VLDQ.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='w-100 text-center'>
                    <img
                        className="d-block w-100 text-center"
                        src="https://i.cbc.ca/1.6477752.1654316355!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/canada-vs-usa-volleyball.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>


            <div className='text-center mt-4'>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.britannica.com/81/198481-050-10CED2D9/Gilberto-Godoy-Filho-ball-Brazil-Argentina-volleyball-2007.jpg" />
                        <Card.Body>
                            <Card.Title>волейбол</Card.Title>
                            {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text> */}
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>История</Card.Title>
                            <Card.Text>
                            Волейболду 1895-жылы Массачусетс штатынын Холиок шаарындагы Жаш Эркектердин Христиан Ассоциациясынын (YMCA) физикалык директору Уильям Дж. Морган ойлоп тапкан. Бул баскетболдун жаңы оюнун өтө энергиялуу деп тапкан ишкерлер үчүн жабык спорт түрү катары иштелип чыккан. Массачусетс штатындагы Спрингфилд колледжинин профессору волейбол оюнунун мүнөзүн байкап, "волейбол" атын сунуштаганга чейин Морган спортту "минтонет" деп атаган. Баштапкы эрежелер Морган тарабынан жазылган жана расмий спорт китебинин биринчи басылышында басылганТүндүк Американын Жаш эркектердин христиан бирикмелеринин лигасы (1897). Көп өтпөй бул оюн Америка Кошмо Штаттарында мектептерде, аянтчаларда, куралдуу күчтөрдө жана башка уюмдарда эки жыныстагы адамдар арасында абдан популярдуу болуп, андан кийин башка өлкөлөргө да киргизилгени белгилүү болду.
                                оюн негизинен төмөнкүчө өтөт: командалардын биринин оюнчусу топко кызмат кылуу менен (аны ыргытуу же бошотуп, анан колу же колу менен уруп), аянттын арткы чек ара сызыгынын артынан "митингди" баштайт; тордун үстүндө жана кабыл алуучу топтун короосуна.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>волейбол</Card.Title>
                            <Card.Text>
                            волейбол, эки команда ойнойт, эреже катары, эки тарапта алты оюнчудан турат, мында оюнчулар атаандашынын ойноп жаткан жеринде топту аянтчага тийгизүү үчүн колдорун колдонуп, топту бийик тордун үстүнөн алдыга жана артка сүзүшөт. Мен кайтып келе алгыча аймак. Буга жол бербөө үчүн, каршылаш оюнчу топту корттун бетине тийгенге чейин өйдө жана командалашына карай тээп, -
                            анда ал командалаш аны кайра тордун үстүнө ыргыта алат же топту тордун үстүнө ыргыта турган үчүнчү командалашына өткөрүп берет. Топ тордун үстүнөн кайтарылышы керек болгонго чейин топко үч жолу гана тийүүгө уруксат берилет.
                                оюн негизинен төмөнкүчө өтөт: командалардын биринин оюнчусу топко кызмат кылуу менен (аны ыргытуу же бошотуп, андан кийин колу же колу менен уруп), аянттын арткы чек ара сызыгынын артынан "митингди" баштайт; тордун үстүндө жана кабыл алуучу топтун короосуна.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
            <div className='d-block m-2 p-3' style={{ backgroundColor: "rgb(235 239 246)", borderRadius: "30px" }}>
                    <video src={vid} type="/vid.mp4" width="100%"  controls >
                    </video>
            </div>
            <div className='container'>
                <h1 className='text-center mt-5'>Иштоо убактысы</h1>
                <Table striped bordered hover>
                    <thead>
                        {/* <tr>
                            <th>жылы</th>
                            <th>2005-2009</th>
                            <th>2009-2013</th>
                        </tr> */}
                    </thead>
                    <tbody>
                        <tr>
                            <td>куну</td>
                            <td>дуй,шар, шей,бей, жума,иш</td>
                        </tr>
                        <tr>
                            <td>сааты</td>
                            <td>800сом</td>
                        </tr>
                        <tr>
                            <td>убакыт</td>
                            <td>9:00-23:00</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default BaleiBool;