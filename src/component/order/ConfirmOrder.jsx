import React,{useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import logo from '../pictures/logo.png';
const ConfirmOrder = () => {
    const user =useSelector((state)=>state.userReducer.user)
    const cartItems = useSelector((state) => state.cartItemsReducer.cartItems);
    const [affTot,setAffTot]=useState()
    useEffect(() => {
        let total=JSON.parse(localStorage.getItem('total'))
        if(total !==null) {setAffTot(total)}
    }, []);
    return (
        <div className="confirmOrder" >
        <div className="order_img">
        <img src={logo} alt="logo"/>
        </div>
        <div className="order_confirm">
            <h4>
            Confirmation de Commande
            </h4>
            <p>
            Merci d'avoir passé commande dans notre site internet. <br/>
            Veuillez récupérer votre commande dans les 72h qui suivent sinon votre commande sera automatiquement annulée.
            </p>
        </div>
        <div className="order_bottom_bar">
        <h4 > Commande: {Date.now()}</h4>
        </div>
        
        <div >
        <table className="order_user">
            <div>
            <th> <h3>ADRESSE DE LIVRAISON</h3> 
                <td><p>{user.adress}</p>
                <p>Code postale : {user.codePostal}</p></td>
            </th>
            </div>
           <div>
           <th> <h3>REFERENCE</h3>
                <td><p> {user.name}</p>
        <p>Téléphone : {user.telephone}</p></td>
            </th>
           </div>
           <div>
           <th> <h3>STATUT DU PAIEMENT</h3>
            <td> <p>Payement à la livraison - Ouvert</p></td>
            </th>
           </div>
            
        </table>
        </div>
        <div className="order_bottom_bar">
            <h4>Vos produits</h4>
        </div>
    <div className="order_bottom_bar" >
        <table className="order_product" >
           
           <div>
           <th> <h3>Produit</h3> 
                 {cartItems.map(el=> 
                 <td  style={{display:"block"}}><div key={el.id}> <p> {el.name} </p> 
                 </div></td>)}
                
                  </th> 
                 
           </div>
            <div>
            <th> <h3>Prix</h3> 
                 {cartItems.map(el=> <td style={{display:"block"}}>
                      <div key={el.id}> 
                      <p> {el.price} dt </p> </div></td> )} </th> 
            </div>
            <div>
            <th> <h3>Quantité </h3>  
               {cartItems.map(el=> <td style={{display:"block"}}>
                    <div key={el.id}> 
                    <p> {el.qtn} </p> </div></td>)} </th> 
            </div>
           <div>
           <th> <h3> Prix total</h3>
               {cartItems.map(el=> <td style={{display:"block"}}>
                    <div key={el.id}>
                    {<p>{(el.price)*(el.qtn)} dt </p> }
                    </div>
               </td>) }
           </th>
           </div>
        </table>
    </div>
    <div className="order_tot">
    <div>
    <h3> Prix à payer :  {affTot} dt</h3>
    </div>
    </div>
    </div>
    )
}

export default ConfirmOrder
