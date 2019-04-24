import React from 'react';
import axios from 'axios';

export default class CreateShow extends React.Component {
    state = {
        title: '',
        img_url: '',
        genre: '',
        user_id: 5
    }

    render() {
        return (
            <h1 className='ml-3 mt-3 mb-4'>Add new show to watch...</h1>
        )
    }
}