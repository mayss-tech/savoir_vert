import React from 'react';
import Modal from 'react-modal';
const PopUp = ({closeModal, isOpen,plant}) => {
    return (
        <div>
            
<Modal isOpen={isOpen} onRequestClose={closeModal}>
<div  key={plant.id} className="popUp">

    <div>
    <img src={plant.image} 
    className="popUpImg"
    alt="popUpImg"/>
    </div>

    <div className="popUpText">
    <h5>{plant.name} </h5>
    <p>{plant.desc} </p>
    </div>

    <div>
    <button
            className="btn_popUp"
            onClick={() => closeModal({ popUp: null })}
            >
            <i className="fas fa-times"></i>
            </button>
    </div>
   
</div>

            </Modal>
        </div>
    )
}
export default PopUp

