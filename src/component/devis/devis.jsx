import React,{useState} from 'react';

const Devis = () => {
    const[open,setOpen]=useState(false);
    const[openTerrain,setOpenTerrain]=useState(false);
    const[openFacade,setOpenFacade]=useState(false);
    const Alert =()=>{
        alert("Votre demande de devis a été envoyé avec succès")
    }
    return (
        <div>
        <div>
        <span>Nom et prénom</span>
        <input type="text"/>
        </div>
        <div>
        <span>Société</span>
        <input type="text"/>
        </div>
        <div>
            <span>Email</span>
            <input type="email"/>
        </div>
        <div>
            <span>Téléphone</span>
            <input type="text"/>
        </div>
        <div>
            <span>Code postale</span>
            <input type="text"/>
        </div>
        
        <div style={{display:"flex"}}>
            <span>Type de prestation</span>
                <div>
                    <input type="checkbox" id="Conception"/>
                    <label for="Conception">Conception</label>
                </div>
                <div>
                    <input type="checkbox" id="Aménagement"/>
                    <label for="Aménagement">Réaménagement</label>
                </div>
                <div>
                    <input type="checkbox" id="veg"/>
                    <label for="veg">Fourniture végétale</label>
                </div>
                <div>
                    <input type="checkbox" id="irrigation"/>
                    <label for="irrigation">Système d'irrigation</label>
                </div>
        </div>
                <div style={{display:"flex"}}>
                    <p>Superficie</p>
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
            <span>Votre message</span>
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
            <form>
            <button type="submit" onClick={Alert}>Envoyer la demande de devis</button>
            </form>
          
        </div>
        </div>
    )
}

export default Devis
