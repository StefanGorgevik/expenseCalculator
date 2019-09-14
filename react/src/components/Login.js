import React from 'react'
import '../assets/styles/inputs-shared.css'

const Login = () => {
    return (
        <React.Fragment>
            <main>
                <div class="box" id="login">
                    <form>
                    <p class="input-container">
                            <label class="text-field-input" for="email">E-mail</label>
                            <input class="text-field" type="email" name="email" id="email"/>
                    </p>
                    <p class="input-container">
                            <label class="text-field-input" for="password">Password</label>
                            <input class="text-field" type="password" name="password" id="password"/>
                    </p>
                    <button class="primary-btn" type="submit">Sign in</button>
                </form>
            </div>
        
        <div class="textDiv">
            <p>Or if you don't have an account, <a class="additional-info" href="../Register/Register.html">Register</a></p>
        </div>
    </main>
        </React.Fragment>
    )
}

export default Login