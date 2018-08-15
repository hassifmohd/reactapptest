import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from './ActionFetchPosts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// import { fetchPosts } from './ActionFetchPosts'; //
import { bindActionCreators } from 'redux';

//Do redux form as per tutorial here https://redux-form.com/7.4.2/docs/gettingstarted.md/
let PostForm = props => {

    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <form onSubmit={handleSubmit}>

            <Field name="title"         label="Title"       component="input"       type="text"     component={renderField} />
            <Field name="categories"    label="Categories"  component="input"       type="text"     component={renderField} />
            <Field name="content"       label="Content"     component="textarea"    type="text"     component={renderField} />

            <button type="submit">Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </form>
    );
}

//declare error validation here
const validate = values => {
    const errors = {}

    if (!values.title) {
        errors.title = 'Please enter the title'
    }

    if (!values.categories) {
        errors.categories = 'Please enter the categories'
    }

    if (!values.content) {
        errors.content = 'Please enter the content'
    }

    return errors
}

//declare warn validation here
const warn = values => {
    const warnings = {}

    if (values.content && values.content.length < 10) {
        warnings.content = 'Content seems to be too short'
    }

    return warnings
}


//overwrite default display so that, if got error or warn, it can be display
const renderField = ({name, input, label, type, meta: { touched, error, warning } }) => 
    (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input {...input} placeholder={label} type={type} className="form-control" />
            <div>{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</div>
        </div>
    )

PostForm = reduxForm({
    form: 'PostForm',
    fields: ['title', 'content', 'categories'],
    validate,
    warn,
    initialValues: { content: 'You can assign default values here. Wee...' },
}, null, { createPost })(PostForm);

class PostAdd extends React.Component {

    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);

        this.state = {
            doneUpdate: false
        };
    }

    submit = values => {
        // print the form values to the console
        console.log(values);
        this.props.createPost(values)
            .then(() => {
                alert("SAVE SUCCESS");
                this.setState({
                    doneUpdate: true
                });
            });
    }

    render() {

        /*
        const handleSubmit = this.props.handleSubmit;
        const title = this.props.fields.title;
        const categories = this.props.fields.categories;
        const content = this.props.fields.content;
        */
        const { handleSubmit } = this.props;

        console.log("Execute PostAdd.render()");

        // ortodox wa to do redirect. better approach is using withRouter(history.push())
        if( this.state.doneUpdate) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <h2>Add new post</h2>

                <PostForm onSubmit={this.submit} />
            </div>
        );
    }
}

// export default reduxForm({ form: 'PostsNewForm' }, null, { createPost })(PostAdd);
// export default PostAdd;
// export default connect(null, {createPost})(reduxForm(formData)(PostForm));

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createPost }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostAdd);