import React from 'react';
import axios from 'axios';


export default class AllShows extends React.Component {
    state = {
        shows: []
    }
    
    componentDidMount() {
        axios.get('http://localhost:3010/shows/all/')
            .then((res) => {
                console.log(res.data, 'res.data all shows')
                this.setState({ shows: res.data })
            })
    }
    
    render() {
        console.log('all shows state', this.state);

        return (
            <h2 className='mt-3 ml-3'>Master List of TV Shows</h2>
        )
    }
}