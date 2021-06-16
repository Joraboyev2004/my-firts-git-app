import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardBody
   
} from 'reactstrap'


import Img from '../media/rasm.jpg'
import Img1 from '../media/kamron.jpg'
import Img2 from '../media/dastur2.jpg'
import Img3 from '../media/dastur2.jpg'
import Img4 from '../media/Rasmm.jpg'
import Img5 from '../media/kamron.jpg'

function BlogCard(){
    return(
        <Container>
            <Row>
                <Col md='4'>
                  <Card className='Card'>
                      <CardImg src={ Img } alt='rasm' />
                      <CardBody>
                          <CardTitle>
                              <p className='CardBody'>Lorem ipsum dolor sit amet</p> <br />
                              <p className='Cardtext'>July 17, 2019 by <span className='defaultColor'>Admin</span></p>
                          </CardTitle>
                          <CardText>
                              <p className='Cardtext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                          </CardText>
                      </CardBody>
                  </Card>
                </Col>

                <Col md='4'>
                  <Card className='Card'>
                      <CardImg src={ Img1 } alt='rasm' />
                      <CardBody>
                          <CardTitle>
                              <p className='CardBody'>Lorem ipsum dolor sit amet</p> <br />
                              <p className='Cardtext'>July 17, 2019 by <span className='defaultColor'>Admin</span></p>
                          </CardTitle>
                          <CardText>
                              <p className='Cardtext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                          </CardText>
                      </CardBody>
                  </Card>
                </Col>

                <Col md='4'>
                  <Card className='Card'>
                      <CardImg src={ Img2 } alt='rasm' />
                      <CardBody>
                          <CardTitle>
                              <p className='CardBody'>Lorem ipsum dolor sit amet</p> <br />
                              <p className='Cardtext'>July 17, 2019 by <span className='defaultColor'>Admin</span></p>
                          </CardTitle>
                          <CardText>
                              <p className='Cardtext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                          </CardText>
                      </CardBody>
                  </Card>
                </Col>

                <Col md='4'>
                  <Card className='Card'>
                      <CardImg src={ Img3 } alt='rasm' />
                      <CardBody>
                          <CardTitle>
                              <p className='CardBody'>Lorem ipsum dolor sit amet</p> <br />
                              <p className='Cardtext'>July 17, 2019 by <span className='defaultColor'>Admin</span></p>
                          </CardTitle>
                          <CardText>
                              <p className='Cardtext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                          </CardText>
                      </CardBody>
                  </Card>
                </Col>

                <Col md='4'>
                  <Card className='Card'>
                      <CardImg src={ Img4 } alt='rasm' />
                      <CardBody>
                          <CardTitle>
                              <p className='CardBody'>Lorem ipsum dolor sit amet</p> <br />
                              <p className='Cardtext'>July 17, 2019 by <span className='defaultColor'>Admin</span></p>
                          </CardTitle>
                          <CardText>
                              <p className='Cardtext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                          </CardText>
                      </CardBody>
                  </Card>
                </Col>

                <Col md='4'>
                  <Card className='Card'>
                      <CardImg src={ Img5 } alt='rasm' />
                      <CardBody>
                          <CardTitle>
                              <p className='CardBody'>Lorem ipsum dolor sit amet</p> <br />
                              <p className='Cardtext'>July 17, 2019 by <span className='defaultColor'>Admin</span></p>
                          </CardTitle>
                          <CardText>
                              <p className='Cardtext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                          </CardText>
                      </CardBody>
                  </Card>
                </Col>
        </Row>
        </Container>
    )
}
export default BlogCard;