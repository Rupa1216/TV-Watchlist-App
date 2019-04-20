import React from 'react';

export default (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand mb-0 h1" href="/">TV Show Watchlist</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/users">Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/shows">TV Shows</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/create" tabIndex="-1" aria-disabled="true">Create Post</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}