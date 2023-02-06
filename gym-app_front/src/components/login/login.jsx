import axios from "axios";
import React, { useState, useEffect, useContext } from 'react';
import "./style/signin.css";
// import $ from 'jquery';
// import CryptoJS from "crypto-js";
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();
// import adjEndDate from './expireDate.js';
// import { UseUpdateContext } from './UseUrlContext';






let baseURL = import.meta.env.VITE_BASE_URL || process.env.VITE_BASE_URL;
//console.log(baseURL)

export default function LogIn(props)
{
    useEffect(() =>
    {
        axios(`${baseURL}/checkauth`, {
            method: 'GET',
            withCredentials: true
        })
            .then(response =>
            {
                if (response.data.isAuthenticated === true)
                {
                    window.alert('You are logged in !!')
                    return window.location.href = '/';

                } else
                {
                    console.log(response.data)
                }
            }).catch(e =>
            {
                console.log(e);
            })
    }, [])

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const CRYPTO_SECRET = import.meta.env.VITE_CRYPTO_SECRET;

    //   async function encryptoSessEmail(item) {
    //     const storedUser = CryptoJS.AES.encrypt(
    //       JSON.stringify(item),
    //       CRYPTO_SECRET
    //     ).toString();

    // // expiration = 4 hours
    //     let expiresDate = adjEndDate(4) || '';
    //     cookies.set('curruser', storedUser, {
    //       path: '/',
    //       maxAge: 4 * 60 * 60,
    //       expires: expiresDate,
    //       httpOnly: true,
    //       secure: true,
    //       sameSite: 'none'
    //     });

    //    // sessionStorage.setItem('loggedinuser', JSON.stringify(storedUser));
    //   };

    const handelSubmit = async (e) =>
    {
        // console.log(username);
        e.preventDefault();
        let iUsername = document.getElementById('username').value;
        let iPass = document.getElementById('password').value;
        setUsername(iUsername);
        setPassword(iPass);

        // for cookies
        // axios.defaults.withCredentials = true;
        axios
            .post(`${baseURL}/hoplogin`, { username: username, password: password }, { withCredentials: true })
            .then(async response =>
            {

                if (response.data.login === true)
                {
                    // console.log(response.data.message)
                    console.log(response.data);
                    window.alert('Thank you.\n You are now logged in.');
                    // let logoutDiv = document.getElementById('logout-div');
                    // logoutDiv.style.display = "block";
                    // redirect
                    let url = response.data.url;
                    let urlJson = JSON.stringify(url);
                    localStorage.setItem('uur', urlJson);
                    window.location.href = `/userprofile/${url}`;
                }
            }).catch(error =>
            {
                console.log(error);
                if (error.response.data === "Unauthorized")
                {
                    console.log(error.response.data);
                    window.alert("Incorrect Email or Password")
                }
                console.log(error.message);
            })
    }



    return (
        <div className="main_signin_contain">
            <div id="signupDiv" className="signinDiv">
                <h6>Log in</h6>
                <div>
                    <form onSubmit={handelSubmit}
                        className="signinForm"
                    >
                        <div className="signInFormRow">
                            <label className="label-signin font-bold" htmlFor="email">
                                Email
                            </label>
                            <input type="email" name="username" id="username" required
                                onChange={(e) =>
                                {
                                    setUsername(e.target.value);
                                    // console.log(username)
                                }} />
                        </div>
                        <div className="signInFormRow">
                            <label className="label-signin font-bold" htmlFor="password">
                                Password
                            </label>
                            <input type="password" name="password" id="password" required
                                onChange={(e) =>
                                {
                                    setPassword(e.target.value);
                                    // console.log(username)
                                }} />
                        </div>
                        <div>
                            <button
                                className="submit-btn btn btn-success"
                                type="submit"
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
                <div className="quiclinksdiv">
                    <div>
                        <a
                            className="forgot-pass"
                            href="/recoverpassword"
                            title="Reset your password"
                        >
                            forgot password ?
                        </a>
                    </div>
                    <div>
                        <a
                            className="forgot-pass"
                            href="/signup"
                            title="Sign Up"
                        >
                            don't have account ?
                        </a>
                    </div>
                </div>

            </div>

            {/* <div className='displayNode'>
        <div>
          {(typeof backendData.users === 'undefined') ?
            (<h2>Loading</h2>) :
              (backendData.users.map((user, i) => (<p key={i}>{user}</p>)
              )
             )
          }
        </div>
      </div> */}

            {/* <div>
        <h1>{post.username}</h1>
        <p>{post.password}</p>
        <button onClick={handelSubmit}>Create Post</button>
      </div> */}
        </div>
    )
}
