import { Container, Row , Col, Card, CardImg, CardBody,CardText, CardTitle} from 'reactstrap';
import Img from '../media/dastur2.jpg'
import Img1 from '../media/rasm.jpg'
import Img2 from '../media/Rasmm.jpg'
import Img3 from '../media/dastur2.jpg'
import Img4 from '../media/Odam2.jpg'




function Carousel(){
    return(
        <Container className='mb-5'>
            <Row>
            <h3 className='text-start fw-bold '>Blog Updates</h3>
                <Col ><h4 className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda <br />temporibus, sit neque vitae reprehenderit expedita amet tempora</h4> </Col>
            </Row>
            <Row>
             
                <Col>
                       <div id="carouselExampleIndicators" className="carouselslide"data-bs-ride="carousel">
                            <div className="carousel-indicators">
                             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                             <button type="button" data-bs-target="#carouselExampleIndicators"    data-bs-slide-to="2" aria-label="Slide 3"></button>
                       </div>
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
                   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                  </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Next</span>
                          </button>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Carousel;



