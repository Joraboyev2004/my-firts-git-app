import {
    Container,
    Row,
    Col,
} from 'reactstrap'



const Services_Ser = () =>{
    return(
        <Container>
            <Row className='py-5 my-5'>
                <Col className='px-5' md='4'>
                    <p className='services_icon ' ><i className='fas fa-briefcase'></i></p>
                    <p className='services_p_title'>  Interface Design</p>
                    <p className='services_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores.  </p>
                </Col>
                <Col className='px-5' md='4'>
                    <p className='services_icon ' ><i className='fas fa-couch'></i></p>
                    <p className='services_p_title'> Product Design</p>
                    <p className='services_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores.   </p>
                </Col>
                <Col className='px-5' md='4'>
                    <p className='services_icon ' ><i class="fas fa-lightbulb"></i></p>
                    <p className='services_p_title'> Quality Results</p>
                    <p className='services_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores.   </p>
                </Col>
            </Row>
            <Row className='py-5 my-5'>
                <Col className='px-5' md='4'>
                    <p className='services_icon ' ><i className='fas fa-briefcase'></i></p>
                    <p className='services_p_title'>  Interface Design</p>
                    <p className='services_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores.  </p>
                </Col>
                <Col className='px-5' md='4'>
                    <p className='services_icon ' ><i className='fas fa-couch'></i></p>
                    <p className='services_p_title'> Product Design</p>
                    <p className='services_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores.   </p>
                </Col>
                <Col className='px-5' md='4'>
                    <p className='services_icon ' ><i class="fas fa-lightbulb"></i></p>
                    <p className='services_p_title'> Quality Results</p>
                    <p className='services_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores.   </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Services_Ser;