import React from 'react';
import { withRouter } from 'react-router-dom';

const NavBar = (props) => {
    return ( 
        <div>
        
            <div className="bar_content">
                <p>logo</p>
                <p>home</p>
                <p>contact</p>
                <p onClick={()=>props.history.push('/devis')}>devis</p>
                <div className="bar_details">
                <ul>xxx</ul>
                <li>equipe</li>
                <li>mission</li>
                <li>projets</li>
                </div>
            </div>
        </div>
    )
}
export default withRouter(NavBar);