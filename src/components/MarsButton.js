import React from "react";

function MarsButton({onCheckForm}) {

    return (
        <button onClick={onCheckForm} className='mars-button'>Загрузить</button>
    )
}

export default MarsButton;