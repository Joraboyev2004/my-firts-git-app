import { CardImg, Col, Container, Row } from "reactstrap";
import Img from '../media/google-plus-logo.png'
import Img1 from '../media/invision_genome_project.png'
import Img2 from '../media/Nike.jpg'
import Img3 from '../media/blob.jpg'


function Markalar(){
    return(
        <Container className='mb-5'>
            <Row>
                <Col md='3'>
                     <CardImg src={ Img } alt='rasm' />
                </Col>
                <Col md='3'>
                     <CardImg src={ Img1 } alt='rasm' />
                </Col>
                <Col md='3'>
                     <CardImg src={ Img2 } alt='rasm' />
                </Col>
                <Col md='3'>
                     <CardImg src={ Img3} alt='rasm' />
                </Col>
            </Row>
        </Container>
    )
}

export default Markalar;