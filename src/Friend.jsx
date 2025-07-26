export default function Friend({friend}){
    const {name, email} = friend;
    return(
        <div className="team">
            <h2>name: {name} </h2>
            <p>Email: {email} </p>
        </div>
    )
}