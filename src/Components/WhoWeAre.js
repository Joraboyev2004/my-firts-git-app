import { CardImg, Col, Container, Row } from "reactstrap";
import Img from '../media/Home.jpg'



function WhoWeAre(){

    return(
       
          <Container>
              <Row>
                  <Col md='6' className='mr-5'>
                     <CardImg src={ Img } className='w-100%'  alt='rasm' />
                  </Col>
                  <Col md='5'>

                      <h3 className='defaultColor fw-bold text-start'> Who We Are</h3>
                     <p className='text-start Who'>
                         
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum debitis eveniet distinctio quia corruptinon ducimus laboriosam aut a, sed ipsam incidunt culpa eum facere, dicta cumque maiores. Esse, labore.
                     </p>
                     <p className='text-start'>
                         
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum debitis eveniet distinctio quia corruptinon ducimus laboriosam aut a, sed ipsam incidunt culpa eum facere, dicta cumque maiores. Esse, labore.
                     </p>

                     <span className='About_icon  text-start'><i class="fab fa-facebook-f "></i></span>
                     <span className='About_iconn text-start'><i className='fab fa-instagram Footer_icon'></i></span>
                     <span className='About_iconn text-start'><i className='fab fa-twitter Footer_icon'></i></span>
                  </Col>
              </Row>
          </Container>
        
    )
}

export default WhoWeAre;