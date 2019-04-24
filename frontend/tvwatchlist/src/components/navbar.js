import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand mb-0 h1" to="/">TV Show Watchlist</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shows">TV Shows</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user/post" tabIndex="-1">Create</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}