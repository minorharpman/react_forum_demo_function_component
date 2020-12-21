
function Post(props) {
    return (
        <div className="row" >
            <div className="col" >post: </div>
            <div className="col">post: {props.post.id}</div>
            <div className="col" >post: {props.post.title}</div>
            <div className="col" >post: {String(props.post.createdAt)}</div>

        </div>
    );
};
export default Post;