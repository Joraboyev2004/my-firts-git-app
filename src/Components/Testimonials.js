import { Col, Container, Row, Card, CardImg, CardBody, CardText } from "reactstrap";
import Img from '../media/Odam1.jpg'
import Img1 from '../media/Odam2.jpg'
import Img2 from '../media/Odam3.jpg'
import Img3 from '../media/Odam4.jpg'




function Testimonials(){
    return(
        <Container className='mt-5 mb-5'>
            <Row>
                 <p className='text-center display-6 fw-bold mb-5'>Testimonials</p>
                <Col md='12'>
                  <Row>
                      <Col md='3'>
                        <Card className='defaultColorr'>
                          <Row>
                            <Col  md='8'> <h5 className='m-0 p-0 defaultColor'>Chad Hawkins </h5><span className='text-start'>customer</span></Col>
                            <Col md='4'> <CardImg className='rasm' src={ Img } alt='rasm' /></Col>
                          </Row>
                          <CardBody>
                          <CardText className='text-start'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quos possimus, animi sit cupiditate voluptate enim ullam soluta obcaecati ab deserunt voluptatem aliquam officiis
                          </CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md='3'>
                        <Card className='defaultColorr'>
                          <Row>
                            <Col md='8'> <h5 className='m-0 p-0 defaultColor'>Ayisha Athert</h5><span className='text-start'>customer</span></Col>
                            <Col md='4'> <CardImg className='rasm' src={ Img3 } alt='rasm' /></Col>
                          </Row>
                           <CardBody>
                           <CardText className='text-start'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quos possimus, animi sit cupiditate voluptate enim ullam soluta obcaecati ab deserunt voluptatem aliquam officiis
                          </CardText>
                           </CardBody>
                        </Card>
                      </Col>
                      <Col md='3'>
                        <Card className='defaultColorr'>
                            <Row>
                            <Col md='8'> <h5 className='m-0 p-0 defaultColor'>Riccardo Gilliam </h5><span className='text-start'>customer</span></Col>
                            <Col md='4'> <CardImg className='rasm' src={ Img2 } alt='rasm' /></Col>
                            </Row>
                            <CardBody>
                            <CardText className='text-start'>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quos possimus, animi sit cupiditate voluptate enim ullam soluta obcaecati ab deserunt voluptatem aliquam officiis
                            </CardText>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col md='3'>
                        <Card className='defaultColorr'>
                          <Row>
                            <Col md='8'> <h5 className='m-0 p-0 defaultColor fw-bold '>Jasleen Dunkley </h5><span className='text-start'>customer</span></Col>
                            <Col md='4'> <CardImg className='rasm' src={ Img1 } alt='rasm' /></Col>
                          </Row>
                         
                          <CardBody>
                            <CardText className='text-start'>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quos possimus, animi sit cupiditate voluptate enim ullam soluta obcaecati ab deserunt voluptatem aliquam officiis
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>
                  </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Testimonials;