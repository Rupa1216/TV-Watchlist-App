import React from 'react';
import axios from 'axios';

export default class AllShows extends React.Component {
    state = {
        shows: []
    }

    // getUniqueShows = (arr, comp) => {
    //     const uniqueShows = arr.map(e => e[comp])
    //     .map((e, i, final) => final.indexOf(e) === i && i)
    //     .filter((e) => arr[e]).map(e => arr[e]);
    //      return uniqueShows;
    //     }

    componentDidMount() {
        const { shows } = this.state
        axios.get('http://localhost:3010/shows/all/')
            .then((res) => {
                console.log(res.data, 'res.data all shows')

                // const uniqueShowsList = shows.reduce((unique, currentVal, currIndex) => {
                //     unique.includes(currentVal.title) ? unique : [...unique, currentVal.title]}, [])
                // console.log('uniqueShows', uniqueShowsList)

                this.setState({ shows: res.data })
            })
    }

    render() {
        console.log('all shows state', this.state);
        const { shows } = this.state;

        const showsList = shows.map((e, i) => {
            return <>
                <div className='ml-3 mb-3' key={i}>
                    <h5>- {e.title}</h5>
                    <h6 className='ml-3'>Who's Watching?</h6>
                </div>
            </>
        })

        return (
            <>
                <h2 className='mt-3 ml-3 mb-3'>Master List of TV Shows</h2>
                {showsList}
            </>
        )
    }
}