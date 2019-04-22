import React from 'react';
import axios from 'axios';

export default class ShowPage extends React.Component {
    state = {
        show: {},
        users: [],
        comments: []
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get('http://localhost:3010/shows/' + id)
            .then((res) => {
                this.setState({show: res.data})
            })
    }

    render() {
        const {show} = this.state;
        return (
            <>
                <h1>Show Page</h1>
                <div className='mt-5'>
                <div>
                    <img src={show.img_url} alt={show.title} />
                </div>
                <div className='my-auto ml-3'>
                    <h5>{show.title}</h5>
                    <h6>Genre</h6>
                    {/* <h6>{show.genre_name}</h6> */}
                </div>
            </div>
            </>
        )
    }
}