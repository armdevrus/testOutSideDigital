import React from "react";

import './ModalWindow.css'

const ModalWindow = ({isModalActive, isVisibility, children}) => {

    return(
        <div className={isModalActive ? 'container__background_module active' : 'container__background_module' }
             // style={{minWidth:'768px'} ? {minWidth: `100%`, minHeight: `100%`} : }
        >
            <div className={isModalActive ? 'container__content_module active': 'container__content_module'}
                 // style={!isVisibility ? {maxHeight:`760px`} : {maxHeight:`476px`}}
            >

                {children}
            </div>
        </div>
    )
}
export default ModalWindow