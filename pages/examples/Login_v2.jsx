import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Login_v2() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); // inistance tixraac

    axios.defaults.withCredentials = true;
    const handleSumbit = (e) => {
        e.preventDefault();
        
        try {
            axios.post('http://localhost:3000/auth/login', { email, password }).then((response) => {
                // console.log(response);
                if (response.data.status) {
                    toast.success('Login Successfuly...')
                    navigate('/');    
                    window.location.reload();
                }
            }).catch(err => {
                toast.error(err.response.data.message);
                // console.log(err.response.data.message);
            })

        } catch (error) {
            console.log(error);
        }

    }

    
    return (
        <body class="hold-transition login-page">
            <div class="login-box">
                {/* <!-- /.login-logo --> */}
                <div class="card card-outline card-primary">
                    <div class="card-header text-center">
                        <a class="h1"><b>Admin</b>LTE</a>
                    </div>
                    <div class="card-body">
                        <p class="login-box-msg">Sign in to start your session</p>

                        <form onSubmit={handleSumbit}>
                            <div class="input-group mb-3">
                                <input type="email" class="form-control" placeholder="Email" autoComplete='off'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="******" autoComplete='off'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-8">
                                    <div class="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label for="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                {/* <!-- /.col --> */}
                                <div class="col-4">
                                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                                </div>
                                {/* <!-- /.col --> */}
                            </div>
                        </form>

                        <div class="social-auth-links text-center mt-2 mb-3">
                            <a href="#" class="btn btn-block btn-primary">
                                <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                            </a>
                            <a href="#" class="btn btn-block btn-danger">
                                <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                            </a>
                        </div>
                        {/* <!-- /.social-auth-links --> */}

                        <p class="mb-1">
                            <Link to={'/example/forgot_password_v2'}>I forgot my password</Link>
                        </p>
                        <p class="mb-0">
                            <a class="text-center" >

                                <Link to={'/example/register_v2'}>Register a new membership</Link>
                            </a>
                        </p>
                    </div>
                    {/* <!-- /.card-body --> */}
                </div>
                {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.login-box --> */}


        </body>
    )
}
