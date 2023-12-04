import './Post.css';

const Post = ({ post }) => {
    return (
        <article class='post-container'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Post ID: {post.id}</p>
        </article>
    )
}
export default Post