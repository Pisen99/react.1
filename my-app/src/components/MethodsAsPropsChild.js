import React from 'react'

function MethodsAsPropsChild(props) {
    return (
        <div>
            {
                props.isLoggedIn ? (
                    <div>
                        <p>Welcome to the site! Please complete the steps below:</p>
                        <ol>
                            <li>Confirm your email</li>
                            <li>Complete your profile</li>
                            <li>Subscribe to the newsletter</li>
                        </ol>
                    </div>
                ) : (
                    <div>
                        <p>Please sign in</p>
                        <button>Sign in</button>
                    </div>
                )
            }
        </div>
    )
}

export default MethodsAsPropsChild