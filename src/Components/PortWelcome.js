
import{Container, Row, Col, } from 'reactstrap'

function Portwelcome(){
    return(
        <>
        <div className='header'>

          <Container >
              <Row>
                  <Col className='p-5 text-center'>
                <div className=' header_lorem_div '>

                   <p className='display-2 defaultColor fw-bolder'>Our Portfolio</p>
                   <p className='mb-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex, dolore incidunt exercitationem necessitatibus architecto dolorem, accusantium quam harum tempore praesentium </p>
                 
                </div>
                  </Col>
              </Row>
         </Container>
        </div>
        </>
    )
}

export default Portwelcome;