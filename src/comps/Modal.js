import React, { Fragment } from 'react'

function Modal({ selectedImage, setSelectedImage }) {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImage(null);
        }
        
    }


    return (
        <Fragment>
            <div className="backdrop" onClick={handleClick}>
                <img src={selectedImage} alt="backdrop" />
            </div>
            
        </Fragment>
    )
}

export default Modal
