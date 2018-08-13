import React from 'react';
import { reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
// import { fetchPosts } from './ActionFetchPosts';
// import { bindActionCreators } from 'redux';

class PostAdd extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        /*
        const handleSubmit = this.props.handleSubmit;
        const title = this.props.fields.title;
        const categories = this.props.fields.categories;
        const content = this.props.fields.content;
        */
        const { fields: { title, categories, content }, handleSubmit } = this.props;

        console.log("Execute PostAdd.render()");

        return (
            <div>
                <h2>Add new post</h2>

                <form onSubmit={handleSubmit} >
                    <div className='form-group'>
                        <label>Title</label>
                        <input type='text' className='form-control' {...title} />
                    </div>

                    <div className='form-group'>
                        <label>Categories</label>
                        <input type='text' className='form-control' {...categories} />
                    </div>

                    <div className='form-group'>
                        <label>Content</label>
                        <textarea className='form-control' {...content} />
                    </div>

                    <button type='submit' className='btn btn-primary'>SAVE</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
})(PostAdd);
