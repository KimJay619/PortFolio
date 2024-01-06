import {Outlet, Link} from "react-router-dom"
import { useState } from "react";
import './NavBar1.css';

const NavBar1=()=>{
    const [isClosed, setIsClosed] = useState(false);

    const handleToggle = () => {
        setIsClosed(!isClosed);
    };

    return(
    <>
    <div id="wrapper" className={isClosed ? "toggled" : ""}>
    <div class="overlay"></div>
        
            
        <nav class="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
            <div class="sidebar-header">
            <div class="sidebar-brand">
                <h1 className='text-white'>PORTFOLIO</h1>
            </div></div>
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/CreateReview">Add Review</Link></li>
            <li><Link to="/ReviewList">ReviewList</Link></li>
            {/* <li><a href="#team">Team</a></li> */}
            {/* <li class="dropdown">
            <a href="#works" class="dropdown-toggle"  data-toggle="dropdown">Works <span class="caret"></span></a>
            <ul class="dropdown-menu animated fadeInLeft" role="menu">
            <div class="dropdown-header">Dropdown heading</div>
            <li><a href="#pictures">Pictures</a></li>
            <li><a href="#videos">Videeos</a></li>
            <li><a href="#books">Books</a></li>
            <li><a href="#art">Art</a></li>
            <li><a href="#awards">Awards</a></li>
            </ul>
            </li> */}
            {/* <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#followme">Follow me</a></li> */}
            </ul>
        </nav>
            
            <div id="page-content-wrapper">
            <button type="button" className={`hamburger animated fadeInLeft ${isClosed ? "is-open" : "is-closed"}`} onClick={handleToggle} data-toggle="offcanvas">
                    <span class="hamb-top"></span>
                    <span class="hamb-middle"></span>
                    <span class="hamb-bottom"></span>
                </button>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">

            
                        </div>
                    </div>
                </div>
            </div>
            
         
     </div>   
     <Outlet/>
    </>
    );
}
export default NavBar1;