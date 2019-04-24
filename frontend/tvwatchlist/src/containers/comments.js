import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Comments extends React.Component {
    state = {
        input: '',
        comments: []
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

    render() {
        const { comments } = this.state;
        const commentsList = comments.map((e, i) => {
            return <h6 className='my-4' key={i}> {e.username} : {e.comment_body}</h6>
        })

        return (
            <>
                <div>
                    <form className='mt-4 ml-5 input-group mb-5'>
                        <input type='text' placeholder='Insert new comment...' className='mr-2' />
                        <button type='submit' className='btn btn-sm btn-outline-secondary'>Submit</button>
                    </form>
                </div>
                <div className='ml-5'>
                    <h5>{commentsList.length ? commentsList.length : null} {commentsList.length === 1? 'Comment:' : 'Comments:'}</h5>
                    <div>
                        {commentsList}
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Comments);