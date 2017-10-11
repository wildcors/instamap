import React from 'react'

const AuthCheker = (props) => {
    console.log(props.token)
    return (
        <div className="auth-status">
            {props.token === null ? 
                <div className="btn" onClick={props.goAuth}>
                    <span className="animate-text">go authorize</span>
                    <span>click to authorize</span>
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