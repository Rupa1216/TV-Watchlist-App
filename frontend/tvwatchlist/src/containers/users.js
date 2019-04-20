import React from 'react';

export default class Users extends React.Component {

    state = {
        username: "Heri00",
        userID: 20,
        users: []
    }

    render() {
        const { username, userID, users } = this.state;

        return (
            <>
            <div className='ml-3 mt-4 mb-5'>
                <h2>Welcome to TV Show Watchlist, {username}!</h2>
                <h4>Your user ID is: {userID}.</h4>
            </div>
            <div className='ml-3'>
                <h4>Master List of All Users:</h4>
                <ul>

                </ul>
            </div>
            </>
        )
    }
}
