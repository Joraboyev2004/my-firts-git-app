import { Col, Container, Row } from "reactstrap";



function Footer(){
    return(
        <Container className='Container mt-5'>
            <Row>
                <Col md='3'>
                    <h6 className='defaultColor  text-start fw-bold'>MONARCHY</h6>
                    <p className=' text-start'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nostrum culpa commodi similique qui, eaque necessitatibus, saepe hic repellat suscipit.
                    </p>
                </Col>
                <Col nd='3'>
                    <ul className='list-inline m-0'>

                         <li className='mb-2  text-start'>Contact Us</li>
                         <li className='mb-2  text-start'>hello@mydomain.com</li>
                         <li className='mb-2  text-start'>+1 829 2293 382</li>
                         <li className='text-start'>Support</li>
                    </ul>
                </Col>
                <Col md='3'>
                <ul className='list-inline m-0'>
                         <li className='mb-2 text-start'>Home</li>
                         <li className='mb-2 text-start'>Blog</li>
                         <li className='mb-2 text-start'>Services</li>
                         <li className=' text-start'>About Us</li>
                        
                     </ul>
                </Col>
                <Col md='3'>
                <ul className='list-inline m-0'>
                         <li className='mb-2 text-start'>Home</li>
                         <li className='mb-2 text-start'>Blog</li>
                         <li className='mb-2 text-start'>Services</li>
                         <li className=' text-start'>About Us</li>
                        
                     </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;