import { Row, Col, Container } from "reactstrap";


function Footerr(){
    return(
        <Container className='container'>
            <Row>
                <Row className='mb-5'>

                 <Col className='text-center'>
                     <ul className='list-inline m-0'>
                         <li className='list-inline-item nav_item'><i className='fab fa-facebook-f Footer_icon'></i></li>
                         <li className='list-inline-item nav_item'><i className='fab fa-twitter Footer_icon'></i></li>
                         <li className='list-inline-item nav_item'><i className='fab fa-linkedin-in Footer_icon'></i></li>
                         <li className='list-inline-item nav_item'><i className='fab fa-instagram Footer_icon'></i></li>
                         <li className='list-inline-item nav_item'><i className='fab fa-skype Footer_icon'></i></li>
                     </ul>
                 </Col>
                </Row>

                  <Row>

                      <Col className='text-center'>
                          <p>Copyright ©2021 All rights reserved | This template is made with <i className="fas fa-heart text-danger"></i>  by <span className='Footer_icon'>Colorlib</span></p>
                      </Col>
                  </Row>
            </Row>
        </Container>
    )
}

export default Footerr;