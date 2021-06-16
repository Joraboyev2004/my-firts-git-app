import { Container,Col, Row, Button } from "reactstrap";



function ContactInput(){
    return(
        <Container>
            <Row>
                <Col md='8'>
                    <Row className='mb-3'>
                        <Col md='4'>
                           <input className='p-2 fs-5' w-100 type='text' placeholder='First Name' />
                        </Col>
                        <Col md='4'>
                        <input className='p-2 fs-5' w-100 type='text' placeholder='First Name' />
                        </Col>
                    </Row>
                    <Row>
                        <Col md='8'>
                         <input className='p-2 fs-5 w-100 mb-3' type='text'  placeholder='Email address' />
                         <textarea type='text' cols='40' rows='12' className='w-100 fs-5'  placeholder='Write your messenge' />
                        </Col>
                    </Row>
                    <Row>
                        <Col md='5'>
                         <Button className=' button btn btn-lg p-3 text-center w-100 text-light'>Send Messenge</Button>
                        </Col>
                    </Row>
                </Col>

                <Col md='4' className='text-start'>
                  <h3 className='mb-3'>Contact Info</h3>
                  <p className='fw-bold'>Address:</p>
                  <p className='mb-3'>Balikchi district, Andijon region, Uzbekiston</p>
                  <p className='fw-bold'>Phone:</p>
                  <pre className='mb-3'>+998 94 436 20 60</pre>
                  <p className='fw-bold'>Email:</p>
                  <p>joraboyevkamronbek3@gmail.com</p>

                </Col>
            </Row>
        </Container>
    )
}

export default ContactInput;