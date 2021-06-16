import { NavLink } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"




const NavigationBar = () => {
    return(
        <>
          <Container className='pt-3'>
              <Row className='py-4 '>
                  <Col md='2'>
                     <span className='logo'>monarchy</span>
                  </Col>
                  <Col className='pt-2' md={{ offset: 4, size: 6 }}>
                     <ul className='list-inline m-0 ulli'>
                         <li className='list-inline-item nav_item ul'><NavLink to='/'>Home</NavLink></li>
                         <li className='list-inline-item nav_item '><NavLink to='/portfolio'>Portfolio</NavLink></li>
                         <li className='list-inline-item nav_item'><NavLink to='/about'>About</NavLink></li>
                         <li className='list-inline-item nav_item'><NavLink to='/servicess'>Services</NavLink></li>
                         <li className='list-inline-item nav_item'><NavLink to='/blog'>Blog</NavLink></li>
                         <li className='list-inline-item nav_item'><NavLink to='/contact'>Contact</NavLink></li>
                     </ul>
                  </Col>
              </Row>
          </Container>
        </>
    )
}

export default NavigationBar