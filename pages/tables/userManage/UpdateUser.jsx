import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { Link } from 'react-router-dom'
import RefreshPage from '../../../src/RefreshPage'
import { IoIosLogOut } from 'react-icons/io'
import Logout from '../../examples/Logout'

import axiosPublicURL from '../../../src/hooks/AxiosHook'

import { BrandLogo, Content_Header, Footer, Navbar, SearchForm, UserPanel } from '../../tables/reusible/Sidebar'

import toast from "react-hot-toast";

export default function UpdateUser() {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const useAxios = axiosPublicURL();

    const params = useParams();
    const navigate = useNavigate();


    // get single data 
    const handleSingleData = () => {
        useAxios.get(`auth/get/${params.id}`).then(res => {
            setUserName(res.data[0].username);
            setEmail(res.data[0].email);
            setPassword(res.data[0].password);
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        handleSingleData();
    }, []);


    // put
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/auth/update/${params.id}`, {
            username,
            email,
            password
        }).then(() => {
            toast.success("Updated Successfully...");
            navigate('/table/user')
        }).catch(err => console.log(err));
    }




    return (
        <body class="hold-transition sidebar-mini">
            <div class="wrapper">
                {/* <!-- Navbar --> */}
                <Navbar navImg1={'../../dist/img/user1-128x128.jpg'} navImg2={'../../dist/img/user8-128x128.jpg'} navImg3={'../../dist/img/user3-128x128.jpg'} />
                {/* <!-- /.navbar --> */}

                {/* <!-- Main Sidebar Container --> */}
                <aside class="main-sidebar sidebar-dark-primary elevation-4">

                    {/* <!-- Brand Logo --> */}
                    <BrandLogo />

                    <div className="sidebar">
                        {/* userPanel */}
                        <UserPanel />

                        {/* sidebarSearch Form  */}
                        <SearchForm />

                        {/* <!-- Sidebar Menu --> */}
                        <nav class="mt-2">
                            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* <!-- Add icons to the links using the .nav-icon class
                                      with font-awesome or any other icon font library --> */}
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-tachometer-alt"></i>
                                        <p>
                                            Dashboard
                                            <i class="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        {/* <!--  --> */}
                                        <li class="nav-item">
                                            <Link to={'/'} onClick={RefreshPage} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Home</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-copy"></i>
                                        <p>
                                            Layout Options
                                            <i class="fas fa-angle-left right"></i>
                                            <span class="badge badge-info right">6</span>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">

                                        <li class="nav-item">
                                            <Link to={'/layout/boxed'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Boxed</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/fixed_sidebar'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Sidebar</p>
                                            </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to={'/layout/fixed_top_nav'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Navbar</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/fixed_footer'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Footer</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/collapsed_sidebar'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Collapsed Sidebar</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-chart-pie"></i>
                                        <p>
                                            Charts
                                            <i class="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/chartjs'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>ChartJS</p>
                                            </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to={'/charts/inline'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Inline</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/charts/uplot'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>uPlot</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>


                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-table"></i>
                                        <p>
                                            Tables
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">

                                        <li class="nav-item">
                                            <Link to={'/table/user'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>UserManagement</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/table/products'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Products</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/table/category'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Category</p>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>



                                <li class="nav-item ">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-plus-square"></i>
                                        <p>
                                            Extras
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>
                                                    Login & Register v2
                                                    <i class="fas fa-angle-left right"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <Link to={'/example/login_v2'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Login v2</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/register_v2'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Register v2</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/forgot_password_v2'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Forgot Password v2</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/recover_password_v2'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Recover Password v2</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item">
                                            <Link to={'/example/404'} class="nav-link active">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Error 404</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link">
                                        <IoIosLogOut style={{ color: "white", fontSize: "20px", marginLeft: '5px' }} />
                                        <p style={{ cursor: 'pointer' }}><Logout /></p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* <!-- /.sidebar-menu --> */}
                    </div>
                    {/* <!-- /.sidebar --> */}
                </aside>

                {/* <!-- Content Wrapper. Contains page content --> */}
                <div class="content-wrapper">
                    {/* <!-- Content Header (Page header) --> */}
                    <Content_Header title={'Update User'} link={'Home'} />

                    {/* <!-- Main content --> */}
                    <section class="content pt-5 pb-5">
                        <div class="container-fluid">
                            <div class="row justify-content-center">
                                {/* <!-- left column --> */}
                                <div class="col-md-8">
                                    {/* <!-- Horizontal Form --> */}
                                    <div class="card card-info">
                                        <div class="card-header">
                                            <h3 class="card-title">User Update Form</h3>
                                        </div>

                                        {/* <!-- form start --> */}
                                        <form class="form-horizontal">
                                            <div class="card-body">
                                                <div class="form-group row">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Name :</label>
                                                    <div class="col-sm-10">
                                                        <input value={username} onChange={(e) => setUserName(e.target.value)}
                                                            type="text" class="form-control" id="inputName3" placeholder="Name" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email :</label>
                                                    <div class="col-sm-10">
                                                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                                                            type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password :</label>
                                                    <div class="col-sm-10">
                                                        <input value={password} onChange={(e) => setPassword(e.target.value)}
                                                            type="password" class="form-control" id="inputPassword3" placeholder="Password" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="offset-sm-2 col-sm-10">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="exampleCheck2" />
                                                            <label class="form-check-label" for="exampleCheck2">Remember me</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- /.card-body --> */}
                                            <div class="card-footer">
                                                <button onClick={handleUpdate} type="submit" class="btn btn-info">Update</button>
                                            </div>
                                            {/* <!-- /.card-footer --> */}
                                        </form>
                                    </div>
                                    {/* <!-- /.card --> */}

                                </div>

                            </div>
                            {/* <!-- /.row --> */}
                        </div>
                    </section>
                    {/* <!-- /.content --> */}

                </div>
                {/* <!-- /.content-wrapper --> */}

                {/* footer */}
                <Footer />

            </div>
            {/* <!-- ./wrapper --> */}


        </body>
    )
}
