import React from 'react';
import axios from 'axios';

export default class CreateShow extends React.Component {
    state = {
        title: '',
        img_url: '',
        genre: '',
        user_id: 5
    }

    handleTitleChange = (e) => {
        this.setState({title: e.target.value})
    }

    render() {
        const {user_id} = this.state;
        console.log('create show state', this.state);

        return (
            <>
                <h1 className='ml-5 pl-3 mt-4 mb-5'>Add new show to watch...</h1>
                <form className='ml-5'>
                    <div className="form-group col-4 mb-3">
                        <input className='form-control mb-2' onChange={this.handleTitleChange} type='text' placeholder='Insert Title...' />
                    </div>
                    <div className="form-group col-4">
                        <input className='form-control mb-2'  type='text' placeholder='Insert Image URL...' />
                    </div>
                    <div className="input-group col-4 mb-5">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Genre</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option defaultValue>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary col-4 ml-3">Post new show for User ID: {user_id}</button>
                </form>
            </>
        )
    }
}