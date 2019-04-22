import React from 'react';
import axios from 'axios';

export default class ShowPage extends React.Component {
    state = {
        show: {},
        users: [],
        comments: []
    }

    render() {
        return (
            <>
            <h1>Show Page</h1>
            </>
        )
    }
}