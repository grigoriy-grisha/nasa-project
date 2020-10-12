import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Navigation({items}) {

    const [active, setActive] = useState({active: 0})

    const onSelect = (index) => {
        setActive({active: index});
    }
    let nav = items.map( (item,index) => (
        <li onClick={() => { onSelect(index)}}

            className={index === active.active ? 'nav-item-active' : 'nav-item'}

            key={`${item}_${index} `}
        >

            <NavLink className="nav-item-link" to={`/${item === 'home' ? '' : item}`}>
                {item}
            </NavLink>
        </li>
    ))
    return (
        <ul className="nav">
            {nav}
        </ul>


    )
}

export default Navigation;