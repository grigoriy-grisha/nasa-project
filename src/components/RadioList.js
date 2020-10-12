import React from 'react';

function RadioList({radioList, handlerRadio, radio}) {

    console.log(radio)




    radioList = radioList.map( (name,index) => <li key={`${name}_${index}`}>
            <input type="radio"
                   id={`${name}-option`}
                   name="selector"
                   value={name}
                   checked={radio === name}
                   onChange={handlerRadio}
            />
            <label htmlFor={`${name}-option`}>{name}</label>
            <div className="check"/>
        </li>
    )

    return (
        <ul>
            {radioList}
        </ul>

    )
}

export default RadioList;