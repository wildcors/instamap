import React from 'react'

const AuthCheker = (props) => {
    console.log(props.token)
    return (
        <div className="auth-status">
            {props.token === null ?
                <div>
                    <a className="btn" href="https://api.instagram.com/oauth/authorize/?client_id=1dbe3e71cf3049e39707c1a5cb087150&redirect_uri=https://my-instamap.firebaseapp.com&response_type=token">
                        <span className="animate-text">go to authorize</span>
                        <span>click to authorize</span>
                    </a>
                    <a className="btn" href="/" onClick={props.saveToken}>
                        <span className="animate-text">go to save token</span>
                        <span>click to save</span>
                    </a>
                </div>
                :
                <div className="already">
                    You already authorized
                </div>
            }
        </div> 
    )
}

export default AuthCheker;