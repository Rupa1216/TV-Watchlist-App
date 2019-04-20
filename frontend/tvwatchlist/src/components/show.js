import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div className='col-6 mt-5 text-center'>
            <Link to='/show'>
                <img src={props.data.img_url} alt={props.data.title} />
                <h5>{props.data.title}</h5>
                {/* <h6>{props.genre_name}</h6> */}
            </Link>
        </div>
    )
}