import React from 'react';
import axios from 'axios';
import Show from '../components/show';

export default class UserProfile extends React.Component {
    state = {
        shows: [],
        isLoading: false,
        noShows: 'This user hasn\'t added any shows yet!'
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        // this.setState({isLoading: true}, () => console.log('true now'))
        axios.get('http://localhost:3010/shows/byuser/' + id)
            .then((res) => {
                console.log('res.data', res.data);
                res.data.map((e, i) => {
                    this.setState({
                        shows: [...this.state.shows,
                        { genre_name: e.genre_name, id: e.id, img_url: e.img_url, title: e.title }]
                    })
                })
            })
            // .then(
            //     this.setState({isLoading: false}, () => console.log('false again'))
            // )
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        console.log(this.state)
        const { isLoading, shows, noShows } = this.state;                        
        const list = <div className='container row mx-auto'>
                        {
                            shows.map((e, i) => {
                                return <Show data={e} key={i} />
                            })
                        }
                    </div>
        // if (isLoading) {
        //     return <i className="fas fa-spinner fa-pulse fa-3x "></i>
        // } 
        // else if (!isLoading && !shows.length) {
        //     return noShows
        // }
        // else {
            return list
        // }
    }
}