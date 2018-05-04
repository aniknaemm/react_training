import React from 'react';

const List = ({ link, label }) => {
    return (
        <li>
            <a href={link} target="_blank"><img src={`./${label}.png`} /></a>
        </li>
    )
}
export default List;