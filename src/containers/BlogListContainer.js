import { connect } from 'react-redux';
import BlogList from '../components/BlogList';
// translate reduc state into react props
const mapStateToProps = (state) => {
    return {
        // react-prop: redux-state
        posts: state.posts
    }
};

// translate redux action-dispatch into react props


const makeBlogListSmart = connect(mapStateToProps);
const SmartBlogList = makeBlogListSmart(BlogList);

export default SmartBlogList;