import React from "react";


function MarsInput({onChangeInput, value}) {



    return (
        <input
            className="input-mars"
            type="text"
            placeholder='sol (mars day) от 0 до 1000'
            value={value}
            onChange={onChangeInput}
        />
    )
}

export default MarsInput;