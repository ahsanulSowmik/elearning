import React, { Component, Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import whiteLogo from '../../assest/image/logo_white.png'
import blackLogo from '../../assest/image/logo_black.png'

export class TopNavigation extends Component {

    constructor(){
        super();
        this.state = {
            navBarTitle: "navTitle",
            navBarlogo: [whiteLogo],
            navBarColor: "navBackground",
            navBarItem: "navItem"
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
                <Navbar className={this.state.navBarColor} collapseOnSelect fixed="top" expand="lg" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home" className={this.state.navBarTitle}> <img src={this.state.navBarlogo} alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                        <Nav.Link className={this.state.navBarItem} href="#deets" >Home</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#deets" >About</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#deets" >Service</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#deets" >Courses</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#deets" >Portfolio</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#deets" >Contuct Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation
