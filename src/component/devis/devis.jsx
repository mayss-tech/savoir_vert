import React,{useState} from 'react';
import ImgHome from '../carrousel/ImgHome';
const Devis = () => {
    const[open,setOpen]=useState(false);
    const[openTerrain,setOpenTerrain]=useState(false);
    const[openFacade,setOpenFacade]=useState(false);
    const[openCondition,setOpenCondition]=useState(false);
    const Alert =()=>{
        alert("Votre demande de devis a été envoyé avec succès")
    }
    return (
        <div>
        <ImgHome/>
            <form className="contact_details">
        <div>
        <span> <b>Nom et prénom</b></span>
        <input type="text"/>
        </div>
        <div>
            <span><b>Email</b></span>
            <input type="email"/>
        </div>
        <div>
            <span><b>Téléphone</b></span>
            <input type="text"/>
        </div>
        <div>
            <span><b>Ville</b></span>
            <input type="text"/>
        </div>
        <div style={{display:"flex"}}>
            <span><b>Vocation</b></span>
                <div>
                    <input type="checkbox" id="Résidentiel"/>
                    <label for="Résidentiel">Résidentiel</label>
                </div>
               
                
                <div>
                    <input type="checkbox" id="Entreprise"/>
                    <label for="Entreprise">Entreprise</label>
                </div>
                <div>
                    <input type="checkbox" id="Hotel"/>
                    <label for="Hotel">Hôtel</label>
                </div>
        </div>
        
        <div style={{display:"flex"}}>
            <span><b>Type de prestation</b></span>
                <div>
                    <input type="checkbox" id="Conception" color="green"/>
                    <label for="Conception">Conception</label>
                </div>
               
                
                <div>
                    <input type="checkbox" id="irrigation"/>
                    <label for="irrigation">Système d'irrigation</label>
                </div>
        </div>
                <div style={{display:"flex"}}>
                    <p><b>Superficie</b></p>
                    <div>
                        <div >
                    <form>
                            <input type="checkbox" name="sup" id="terrain"
                            onClick={()=>setOpenTerrain(!openTerrain)}/>
                            <label for="terrain">
                            Terrain 
                            </label>
                            <div className={openTerrain ?"s":"none"}>
                            <input type="text"/>
                            <p>Ajouter la superficie de votre terrain en m2 </p>
                            </div>
                            <input type="checkbox" name="sup" id="facade"
                            onClick={()=>setOpenFacade(!openFacade)}/>
                            <label for="facade">
                            Facade
                            </label>
                            <div className={openFacade ?"s":"none"}>
                            <input type="text"/>
                            <p>Ajouter la superficie de votre facade en métre Linéaire </p>
                        </div>
                    </form>
                        </div>
                    </div>
                
        </div>
        <div style={{display:"flex"}}>
            <span><b>Votre message</b></span>
            <textarea onClick={()=>setOpen(!open)}/>
        <div className={open?"s":"none"}>
            <p className="msg">zedcf...</p>
        </div>
        </div>
        <div>
            <span>Quand préférez-vous être contacté ?</span>
            <select>
                <option value="">Lundi</option>
                <option value="">Mardi</option>
                <option value="">Mercredi</option>
                <option value="">Jeudi</option>
                <option value="">Vendredi</option>
            </select>
            <select>
                <option value="">De 9H A 12H</option>
                <option value="">De 14 A 17H</option>
            </select>
        </div>
        <div>
                <h5>Voir conditions de paiement</h5>
                <p onClick={()=>setOpenCondition(!openCondition)}><i className="fas fa-angle-down"></i></p>
                <div className={openCondition?"s":"none"}>
            <p >
            20% à la commande, solde à la récéption des documents (chaque phase à part)

            </p>
        </div>
            </div>
        <div>
            
            <button type="submit" onClick={Alert}><b>Envoyer la demande de devis</b></button>
        </div>
        </form>
            
        </div>
    )
}

export default Devis
