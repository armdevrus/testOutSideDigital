import React from "react";

import './ModalWindow.css'

const ModalWindow = ({isModalActive, children}) => {

    return(
        <div className={isModalActive ? 'container__background_module active' : 'container__background_module' }
        >
            <div className={isModalActive ? 'container__content_module active': 'container__content_module'}
            >

                {children}
            </div>
        </div>
    )
}
export default ModalWindow