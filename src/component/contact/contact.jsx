import React from 'react';
import ImgHome from '../carrousel/ImgHome';
import background from '../pictures/backContact.jpg';

const Contact = () => {
    return (
        <div>
                {/* <ImgHome/> */}
            <div className="contact_details">
            <h1>Contactez-nous</h1>
            <div>
                <h5>Par mail</h5>
                <div className="contact_content1">
                <i className="fas fa-envelope-open-text"></i>
                <p >Savoir.vert.SS@gmail.com</p>
                </div>
            </div>
            <div>
                <h5>Par téléphone</h5>
                <div className="contact_content2">
                <i className="fas fa-phone"></i>
                <p>(+216) 53 089 926</p>
                </div>
                <div className="contact_content2">
                <i className="fas fa-fax"></i>
                <p>(+216) 74 879 433</p>
                </div>
            </div>
            <div>
                <h5>Sur facebook</h5>
                <div>
                <p> Commentez, partagez et posez <br/>vos questions sur notre page.</p>
                <div  >
                    <a href="https://www.facebook.com/SavoirVert.SS">
                    <i className="fab fa-facebook">Suivez-nous</i>
                    </a>
                </div>
                
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default Contact
