import React from 'react';
import axios from 'axios';
import Comments from './comments';

export default class ShowPage extends React.Component {
    state = {
        show: {},
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get('http://localhost:3010/shows/' + id)
            .then((res) => {
                this.setState({ show: res.data, title: res.data.title })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const { show, comments } = this.state;
        console.log('this is the state', this.state);

        return (
            <>
                <div className='d-flex mt-5 ml-5'>
                    <div>
                        <img src={show.img_url} alt={show.title} style={{ width: '200px', height: '300px' }} />
                    </div>
                    <div className='mt-3 ml-3'>
                        <h3>{show.title}</h3>
                        <h5>{show.genre_name}</h5>
                    </div>
                </div>
                <div className='mt-3 ml-5'>
                    <h5>Being watched by {show.username}</h5>
                </div>
                <hr />
                <Comments />
            </>
        )
    }
}