

function Profile({user}){


    return(
        <div className='page' style={{width: '100%'}}>
            <h1>Profile</h1>
            <p>Username: {user.username}</p>
        </div>
    )
}

export default Profile;