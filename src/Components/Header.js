/*eslint-disable react-hooks/exhaustive-deps*/
import * as MAP from "react-bootstrap";
import { FiHome } from "react-icons/fi";
import '../mapup.css'
import { FcElectricity } from "react-icons/fc";



const Header = () => {
 
  return (
    <MAP.Container fluid>
      <MAP.Row>
        <MAP.Navbar collapseOnSelect expand="lg" fixed="top" className="MAP-Top-Nav" style={{ posistion: "fixed", top: "0px" }} >
          <MAP.Navbar.Toggle aria-controls="responsive-navbar-nav" />
         
         <h3><FcElectricity />  Electric Vehicle Dashboard </h3>

            <MAP.Navbar.Collapse id="responsive-navbar-nav">
              <MAP.Nav className="me-auto"></MAP.Nav>
              <MAP.Nav>
              
                <MAP.Nav.Link className="icon-size-header " ><FiHome /></MAP.Nav.Link>
              </MAP.Nav>
            </MAP.Navbar.Collapse>
          
        </MAP.Navbar>
      </MAP.Row>
    </MAP.Container>
  );
}
export default Header;
