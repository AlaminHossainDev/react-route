export default function Post({post}){
    const {userId, id, title, body} = post;
    return(
        <div className="post">
            <span>UserId: {userId} </span>
            <span>Id: {id} </span>
            <h1>Title: {title} </h1>
            <p>Description : {body} </p>
        </div>
    )
}