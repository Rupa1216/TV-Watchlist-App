import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    const { id } = props.data;

    return (
        <div className='d-flex col-6 mt-5'>
            <div>
                <Link to={'/show/'+id}>
                    <img src={props.data.img_url} alt={props.data.title} />
                </Link>
            </div>
            <div className='my-auto ml-3'>
                <Link to={'/show/'+id}>
                    <h5>{props.data.title}</h5>
                </Link>
                {/* <h6>Genre</h6> */}
                <h6>{props.data.genre_name}</h6>
            </div>
        </div>
    )
}