// import { Carousel } from "bootstrap";
import { Container, Row, Col, CardTitle, CardImg, CardText, Card, Carousel } from "reactstrap";



function Carousell(){

    return(
        <Container>
             <Row>
                <h3 className='text-start fw-bold '>Blog Updates</h3>
                <Col ><h4 className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda <br />temporibus, sit neque vitae reprehenderit expedita amet tempora</h4> </Col>
            </Row>
            <Row>
                <Col>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                    <Row>
                         <Col md='4'>
                         <Card className='carousel'>
                            <CardImg src={ Img1 } alt='nomi' />
                            <CardTitle className='text-start'>Octabr 18, 2019</CardTitle>
                            <CardText><h3 className='text-start'>Google saying pseudotelephoto is more important</h3></CardText>
                            <Row>
                                <Col md='3'><CardImg className='rasm' src={Img4} alt='rasm' /></Col>
                                <Col md='9'><CardText className='text-start'>by John freeman <br /> Thinker Designer</CardText></Col>
                            </Row>
                        </Card>
                         </Col>
                         <Col md='4'>
                         <Card className='carousel'>
                            <CardImg src={ Img } alt='nomi' />
                            <CardTitle className='text-start'>Octabr 18, 2019</CardTitle>
                            <CardText><h3 className='text-start'>Google saying pseudotelephoto is more important</h3></CardText>
                            <Row>
                                <Col md='3'><CardImg className='rasm' src={Img4} alt='rasm' /></Col>
                                <Col md='9'><CardText className='text-start'>by John freeman <br /> Thinker Designer</CardText></Col>
                            </Row>
                        </Card>
                         </Col>
                         <Col md='4'>
                         <Card className='carousel'>
                            <CardImg src={ Img2 } alt='nomi' />
                            <CardTitle className='text-start'>Octabr 18, 2019</CardTitle>
                            <CardText><h3 className='text-start'>Google saying pseudotelephoto is more important</h3></CardText>
                            <Row>
                                <Col md='3'><CardImg className='rasm' src={Img4} alt='rasm' /></Col>
                                <Col md='9'><CardText className='text-start'>by John freeman <br /> Thinker Designer</CardText></Col>
                            </Row>
                        </Card>
                         </Col>
                     </Row>
                    </div>
                    <div className="carousel-item">
                        
                    <Row>
                         <Col md='4'>
                         <Card className='carousel'>
                            <CardImg src={ Img3 } alt='nomi' />
                            <CardTitle className='text-start'>Octabr 18, 2019</CardTitle>
                            <CardText><h3 className='text-start'>Google saying pseudotelephoto is more important</h3></CardText>
                            <Row>
                                <Col md='3'><CardImg className='rasm' src={Img4} alt='rasm' /></Col>
                                <Col md='9'><CardText className='text-start'>by John freeman <br /> Thinker Designer</CardText></Col>
                            </Row>
                        </Card>
                         </Col>
                         <Col md='4'>
                         <Card className='carousel'>
                            <CardImg src={ Img3 } alt='nomi' />
                            <CardTitle className='text-start'>Octabr 18, 2019</CardTitle>
                            <CardText><h3 className='text-start'>Google saying pseudotelephoto is more important</h3></CardText>
                            <Row>
                                <Col md='3'><CardImg className='rasm' src={Img4} alt='rasm' /></Col>
                                <Col md='9'><CardText className='text-start'>by John freeman <br /> Thinker Designer</CardText></Col>
                            </Row>
                        </Card>
                         </Col>
                         <Col md='4'>
                         <Card className='carousel'>
                            <CardImg src={ Img2 } alt='nomi' />
                            <CardTitle className='text-start'>Octabr 18, 2019</CardTitle>
                            <CardText><h3 className='text-start'>Google saying pseudotelephoto is more important</h3></CardText>
                            <Row>
                                <Col md='3'><CardImg className='rasm' src={Img4} alt='rasm' /></Col>
                                <Col md='9'><CardText className='text-start'>by John freeman <br /> Thinker Designer</CardText></Col>
                            </Row>
                        </Card>
                         </Col>
                     </Row>
     
                    </div>
                   
                  </div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Carousell;