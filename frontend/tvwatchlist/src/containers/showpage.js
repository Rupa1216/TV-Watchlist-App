import React from 'react';
import axios from 'axios';

export default class ShowPage extends React.Component {
    state = {
        show: {},
        title: '',
        users: [],
        comments: []
    }

    // getShowInfo = () => {
    //     const { id } = this.props.match.params;
    //     return axios.get('http://localhost:3010/shows/' + id)
    // }

    // getWhosWatching = () => {
    //     const { title } = this.state;
    //     const titleInURL = title.split(' ').join('')
    //     return axios.get('http://localhost:3010/shows/' + titleInURL)
    // }

    componentDidMount() {
        const { id } = this.props.match.params;
        
        axios.get('http://localhost:3010/shows/' + id)
            .then((res) => {
                console.log('data', res.data)
                this.setState({ show: res.data })
            })
    }

    render() {
        const { show } = this.state;
        return (
            <>
                <div className='d-flex mt-5 ml-5'>
                    <div>
                        <img src={show.img_url} alt={show.title} style={{ width: '200px', height: '300px' }} />
                    </div>
                    <div className='my-auto ml-3'>
                        <h3>{show.title}</h3>
                        <h5>{show.genre_name}</h5>
                    </div>
                </div>
            </>
        )
    }
}