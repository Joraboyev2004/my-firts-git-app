import { CardImg, Col, Container, Row } from "reactstrap";
import Img from '../media/rasm.jpg'
import Img1 from '../media/kamron.jpg'
import Img2 from '../media/dastur2.jpg'
import Img3 from '../media/dastur2.jpg'
import Img4 from '../media/Rasmm.jpg'
import Img5 from '../media/kamron.jpg'




function Picture(){
    return(
        <Container>
            <Row>
                
                    <p className=' fw-bold display-5 text-start'>Portfolio</p>
                
                  <Col md='4' className='my-5'>
                   <CardImg className='Card_Img' src={ Img } alt='img' />
                    
                </Col>
                <Col md='4' className='my-5'>
                   <CardImg className='Card_Img' src={ Img1 } alt='img' />
                    
                </Col>
                <Col md='4' className='my-5'>
                   <CardImg className='Card_Img' src={ Img2 } alt='img' />
                    
                </Col>
                <Col md='4'>
                   <CardImg className='Card_Img' src={ Img3 }  alt='img'/>
                    
                </Col>
                <Col md='4'>
                   <CardImg className='Card_Img' src={ Img4 }  alt='img'/>
                    
                </Col>
                <Col md='4'>
                   <CardImg className='Card_Img' src={ Img5 }  alt='img'/>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Picture;