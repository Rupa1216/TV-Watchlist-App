import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <Link to={'/user/'+props.data.id}>
            <h5>{props.data.username}</h5>
        </Link>
    )
}