import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Comments extends React.Component {
    state = {
        input: '',
        comments: [],
        username: 'Rupa1216'
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get('http://localhost:3010/comments/' + id)
            .then((res) => {
                this.setState({
                    comments: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { input, comments } = this.state;
        const { id } = this.props.match.params;
        const req_body = {
            comment_body: input,
            user_id: 5,
            show_id: parseInt(id)
        }

        axios.post('http://localhost:3010/comments/', req_body)
            .then((res) => {
                const { id } = res.data;
                const newComment = {...req_body, comment_id: id}

                comments.unshift(newComment)
                this.setState({
                    comments, input: ''
                    // comments: [...this.state.comments, {...req_body, comment_id: id}]
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        console.log('comments state', this.state)
        const { comments, username } = this.state;
        const commentsList = comments.map((e, i) => {
            return <h6 className='my-4' key={i}> {e.username ? e.username : username} : {e.comment_body}</h6>
        })

        return (
            <>
                <div>
                    <form onSubmit={this.handleSubmit} className='mt-4 ml-5 input-group mb-5'>
                        <input type='text' placeholder='Insert new comment...' className='mr-2' onChange={this.handleChange} value={this.state.input} />
                        <button type='submit' className='btn btn-sm btn-outline-secondary'>Submit</button>
                    </form>
                </div>
                <div className='ml-5'>
                    <h5>{commentsList.length ? commentsList.length : null} {commentsList.length === 1 ? 'Comment:' : 'Comments:'}</h5>
                    <div>
                        {commentsList}
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Comments);