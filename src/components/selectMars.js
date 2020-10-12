import React from "react";

function SelectMars({arraySelect,onChangeSelect,select}) {

    let Select = arraySelect.map( (name, index) => (
        <option key={`${name}_${index}`}> {name} </option>
    ))
    return (
        <label>
            <select
            value={select}
            onChange={onChangeSelect}
            >
                {Select}

            </select>
        </label>
    )
}

export default SelectMars;