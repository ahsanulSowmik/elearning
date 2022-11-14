import React, { Component, Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import whiteLogo from '../../assest/image/logo_white.png'
import blackLogo from '../../assest/image/logo_black.png'
// import Button from 'react-bootstrap/Button';
import '../../assest/css/custom.css';
import '../../assest/css/bootstrap.min.css';
import {NavLink,} from "react-router-dom"
 import LoginPopup from '../LoginPopup/LoginPopup';
import RegMiddlePopup from '../RegMiddlePopup/RegMiddlePopup';


export class TopNavigation extends Component {

    constructor(props){
        super();
        this.state = {
            navBarTitle: "navTitle",
            navBarlogo: [whiteLogo],
            navBarColor: "navBackground",
            navBarItem: "navItem",
            pageTitle:props.title
        }
    }
  

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScrolling', navBarlogo: [blackLogo], navBarColor: 'navBackgroundScroll',  navBarItem: 'navItemScroll'})

        }else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle', navBarlogo: [whiteLogo],navBarColor: 'navBackground', navBarItem: 'navItem'})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)
    }
    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle }</title> 
                <Navbar className={this.state.navBarColor} collapseOnSelect fixed="top" expand="lg" variant="dark">
                    <Container>
                    <Navbar.Brand className={this.state.navBarTitle} href="#home"><NavLink to="/"> <img src={this.state.navBarlogo} alt=""/></NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
    <Nav.Link> <NavLink exact activeStyle={{color:'#ffd900'}} className={this.state.navBarItem} to="/">Home</NavLink> </Nav.Link>

     <Nav.Link> <NavLink exact activeStyle={{color:'#ffd900'}} className={this.state.navBarItem} to="/course">Course</NavLink> </Nav.Link>

     <Nav.Link>  <NavLink exact activeStyle={{color:'black'}} className={this.state.navBarItem}  to="/club">Club</NavLink> </Nav.Link>

     {/* <Nav.Link>  <NavLink exact activeStyle={{color:'#ffd900'}} className={this.state.navBarItem} to="/event">Event</NavLink> </Nav.Link> */}

     <Nav.Link>  <NavLink exact activeStyle={{color:'#ffd900'}} className={this.state.navBarItem} to="/about">About</NavLink> </Nav.Link>

     {/* <Nav.Link>  <NavLink exact activeStyle={{color:'#ffd900'}} className={this.state.navBarItem} to="/login">Login</NavLink> </Nav.Link> */}
            <LoginPopup/>
            <RegMiddlePopup/>
    

{/* <Link to="/Registration">
   <Button variant= "primary" >Registration</Button>    
  
   </Link>                  */}
    {/* <Button    variant="primary" href="#Login">Login</Button>  */}
                     
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation
