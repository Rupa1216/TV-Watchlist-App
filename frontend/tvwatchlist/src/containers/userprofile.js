import React from 'react';
import axios from 'axios';
import Show from '../components/show';

export default class UserProfile extends React.Component {
    state = {
        shows: []
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get('http://localhost:3010/shows/byuser/'+id)
        .then((res) => {
            console.log('res.data', res.data);
            res.data.map((e, i) => {
                this.setState({
                    shows: [...this.state.shows,
                    { genre_name: e.genre_name, id: e.id, img_url: e.img_url, title: e.title}]
                })
            })
        })
    }

    render() {
        console.log(this.state)
        const { shows } = this.state;

        return (
            <div className='container row mx-auto'>
                {
                    shows.map((e, i) => {
                        return <Show data={e} key={i} />
                    })
                }
            </div>
        )
    }
}