import React from 'react';
import axios from 'axios';
import User from '../components/user';

export default class Users extends React.Component {

    state = {
        username: "PamAbr",
        userID: 20,
        users: []
    }

    componentDidMount() {
        axios.get('http://localhost:3010/users/')
            .then((res) => {
                console.log(res.data);
                res.data.map((e, i) => {
                    this.setState({
                        users: [...this.state.users,
                        { id: e.id, username: e.username }]
                    })
                })
            })
            .catch((err) => {
                console.log(err);
            })
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
                        {users.map((e, i) => {
                            return <li key={i}>
                                <User data={e} />
                            </li>
                        })}
                    </ul>
                </div>
            </>
        )
    }
}
