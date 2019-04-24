import React from 'react';
import axios from 'axios';

export default class CreateShow extends React.Component {
    state = {
        title: '',
        img_url: '',
        genres: [],
        selectedGenre: '',
        user_id: 5
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSelectedGenre = (e) => {
        this.setState({ selectedGenre: e.target.value })
    }

    componentDidMount() {
        const { genres } = this.state;

        axios.get('http://localhost:3010/genres/')
            .then((res) => {
                res.data.forEach((e) => {
                    genres.push(e.genre_name)
                })
                this.setState({ genres })
            })
    }

    render() {
        const { user_id, genres } = this.state;
        console.log('create show state', this.state);
        const genreList = genres.map((e, i) => {
            return <option key={i} value={e.value}>{e}</option>
        })

        return (
            <>
                <h1 className='ml-5 pl-3 mt-4 mb-5'>Add new show to watch...</h1>
                <form className='ml-5'>
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
                        <select onChange={this.handleSelectedGenre} value={this.state.selectedGenre} className="custom-select" id="inputGroupSelect01">
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