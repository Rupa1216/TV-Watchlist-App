import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CreateShow extends React.Component {
    state = {
        title: '',
        img_url: '',
        genres: [],
        selectedGenre: '',
        selectedGenreID: '',
        user_id: 5,
        show_id: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSelectedGenre = (e) => {
        this.setState({ selectedGenre: e.target.name, selectedGenreID: e.target.value })
        // genres.forEach((e) => {
        //     if (selectedGenre === e.genre_name) {
        //         this.setState({ selectedGenreID: e.id })
        //     }
        // })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { title, img_url, user_id, selectedGenre, selectedGenreID } = this.state;
        
        axios.post('http://localhost:3010/shows/', {
            title: title,
            img_url: img_url,
            user_id: user_id,
            genre_id: selectedGenreID
        })
            .then((res) => {
                const { id } = res.data;
                this.setState({ show_id: id })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentDidMount() {

        axios.get('http://localhost:3010/genres/')
            .then((res) => {
                // res.data.forEach((e) => {
                //     genres.push(e.genre_name)
                // })
                // this.setState({ genres })
                this.setState({ genres: res.data })
            })
    }

    render() {
        const { user_id, genres,  show_id } = this.state;
        console.log('create show state', this.state);
        const genreList = genres.map((e, i) => {
            return <option key={i} value={e.id} name={e.genre_name}>{e.id} - {e.genre_name}</option>
        })
        const alert = <div className="alert alert-success" role="alert">
        Success! You've added a new show. Click <Link to={'/show/'+show_id} className="alert-link">here</Link> to view.
    </div>

        return (
            <>
                <h1 className='ml-5 pl-3 mt-4 mb-5'>Add new show to watch...</h1>
                { show_id ? alert : null }
                <form className='ml-5' onSubmit={this.handleSubmit}>
                    <div className="form-group col-4 mb-3">
                        <input className='form-control mb-2' onChange={this.handleChange} name='title' type='text' placeholder='Insert Title...' />
                    </div>
                    <div className="form-group col-4">
                        <input className='form-control mb-2' onChange={this.handleChange} name='img_url' type='text' placeholder='Insert Image URL...' />
                    </div>
                    <div className="input-group col-4 mb-5">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Genre</label>
                        </div>
                        <select onChange={this.handleSelectedGenre} value={this.state.selectedGenre} className="custom-select">
                            <option defaultValue>Choose...</option>
                            {genreList}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary col-4 ml-3">Post new show for User ID: {user_id}</button>
                </form>
            </>
        )
    }
}