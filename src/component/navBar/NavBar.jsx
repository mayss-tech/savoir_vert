import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../pictures/logo.png';
const NavBar = (props) => {
    return ( 
        <div className="bar_content" >
                <div>
                <img src={logo} alt="logo"/>
                </div>
                
                <div className="bar_information">
                <i className="fas fa-home"></i>
                <p onClick={()=>props.history.push('/') }><b>Accueil</b></p>
                </div>
                < div className="bar_information">
                <i className="fas fa-comments"></i>
                <p onClick={()=>props.history.push('/contact')}> <b>Contact</b></p>
                </div>
                <div className="bar_information">
                <i className="fas fa-question"></i>
                <p onClick={()=>props.history.push('/propos')}> <b>A propos</b></p>
                </div>
                {/* <div className="bar_information">
                <i className="fab fa-elementor"></i>
                <p onClick={()=>props.history.push('/devis')}>Devis</p>
                </div> */}
        </div>
    )
}
export default withRouter(NavBar);