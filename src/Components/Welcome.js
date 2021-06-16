import { Row, Container, Col } from "reactstrap"



const WelcomeContent = () => {
    return(
        <>
        <div className='header'>

         <Container >
              <Row>
                  <Col className='p-5 text-center'>
                <div className=' header_lorem_div '>

                   <p className='display-2 defaultColor fw-bolder'>Do What You Love</p>
                   <p className='mb-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex, dolore incidunt exercitationem necessitatibus architecto dolorem, accusantium quam harum tempore praesentium </p>
                   <span  className=' my-5   play_icon_span'><i className='fas fa-play'></i></span>
                </div>
                  </Col>
              </Row>
         </Container>
        </div>
        </>
    )
}

export default WelcomeContent;