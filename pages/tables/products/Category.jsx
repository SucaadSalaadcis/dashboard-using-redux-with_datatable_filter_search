import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RefreshPage from '../../../src/RefreshPage'
import { IoIosLogOut } from 'react-icons/io'
import Logout from '../../examples/Logout'
import Reusible_data_table from '../reusible/Reusible_data_table'

export default function Category() {

    // Defining columns and data for the table
    const columns = ['Name', 'Image', 'Size', 'Price'];

    const data = [
        { Name: 'CasualChicTshirt', Image: <img src="https://img.freepik.com/premium-photo/minimalist-modern-flat-lay-tshirt-mockup-4k-hd-photo-background_1193781-9002.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'sm', Price: '$100' },
        { Name: 'CuteCarryBag', Image: <img src="https://img.freepik.com/premium-photo/white-purse-with-flowers-butterflies-it_1274701-2460.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'md', Price: '$230' },
        { Name: 'ElegantEnsembleDress', Image: <img src="https://img.freepik.com/premium-photo/descent-maxi_1305489-886.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'lg', Price: '$403' },
        { Name: 'StylishStepsShoes', Image: <img src="https://img.freepik.com/premium-photo/pair-white-sneakers-are-table-with-hat-it_1273023-74147.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'xl', Price: '$543' },
        //
        { Name: 'GraphicGlamTshirt', Image: <img src="https://img.freepik.com/free-photo/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger_460848-13979.jpg?t=st=1726388631~exp=1726392231~hmac=f401bbb4948a1bd873fa0127684b1f3cdc6a81e374e349ec7e18bd002750297a&w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'sm', Price: '$323' },
        { Name: 'ChicPouchBag', Image: <img src="https://img.freepik.com/free-photo/background-bags-beautiful-beauty-box_1303-995.jpg?t=st=1726388548~exp=1726392148~hmac=03160094be4557c66013c9091653482c300b3469d3941be28ae2b2fda40c0f95&w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'md', Price: '$643' },
        { Name: 'GlamGownDress', Image: <img src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150478955.jpg?t=st=1726388492~exp=1726392092~hmac=af1cd336687f6858941bfcb73649e023c534d72e36d066d027c55647894214c5&w=360" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'lg', Price: '$542' },
        { Name: 'TrendsetterTreadsShoes', Image: <img src="https://img.freepik.com/premium-photo/chic-elegance-black-highheeled-shoes-with-hollow-pattern-red-sole-pop-art-style-4k-hyper_979568-9002.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'xl', Price: '$765' },
        //
        { Name: 'EverydayEssentialsTshirt', Image: <img src="https://img.freepik.com/premium-photo/model-mockup-using-summer-clothes_959624-9230.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'sm', Price: '$653' },
        { Name: 'TrendyToteBag', Image: <img src="https://img.freepik.com/premium-photo/coral-peonies-yellow-leather-bag-black-wood-table_128442-127.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'md', Price: '$156' },
        { Name: 'ChicChicDress', Image: <img src="https://img.freepik.com/premium-photo/vintage-clothing-boutique-with-vintage-dresses-accessori-isolated-podium-creative-layout-art-bg_655090-3437799.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'lg', Price: '$985' },
        { Name: 'ClassicKicksShoes', Image: <img src="https://img.freepik.com/free-photo/pretty-mother-s-day-assortment_23-2148888567.jpg?t=st=1726473005~exp=1726476605~hmac=787c475218f64a706c54bd81976bac4f01343c30d80fe3a6d86a247e6c9fe980&w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'xl', Price: '$584' },
        //
        { Name: 'ComfortWearTshirt', Image: <img src="https://img.freepik.com/premium-photo/styled-stock-photography-heather-mockupdigital-file-pink-womens-tshirt-with-purse-flower_1022426-10950.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'sm', Price: '$876' },
        { Name: 'MiniMingleBag', Image: <img src="https://img.freepik.com/premium-photo/vibrant-showcase-showroom-display-featuring-stunning-array-colorful-handbags_1204564-168533.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'md', Price: '$423' },
        { Name: 'RadiantRobeDress', Image: <img src="https://img.freepik.com/premium-photo/trendy-dress-branches-lilac-hanging-white-door_392895-25084.jpg?w=360" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'lg', Price: '$787' },
        { Name: 'ElegantEclipseShoes', Image: <img src="https://img.freepik.com/premium-psd/footwear-slipper-mock-up-design_23-2149853215.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'xl', Price: '$234' },
        //
        { Name: 'CoolCottonTshirt', Image: <img src="https://img.freepik.com/premium-photo/styled-stock-photography-heather-mockupdigital-file-pink-womens-tshirt-with-purse-flower_1022426-10971.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'sm', Price: '$135' },
        { Name: 'GlamSatchelBag', Image: <img src="https://img.freepik.com/premium-photo/showroom-display-featuring-stunning-array-colorful-handbags_1204564-168563.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'md', Price: '$986' },
        { Name: 'SophisticatedDress', Image: <img src="https://img.freepik.com/premium-photo/trendy-dress-hanging-light-wall-table-with-branches-lilac_392895-473025.jpg?w=360" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'lg', Price: '$324' },
        { Name: 'UrbanStrideShoes', Image: <img src="https://img.freepik.com/premium-photo/minimalist-product-showcase-with-models-fashion-beauty-campaigns_984027-197909.jpg?w=740" className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} alt="Circular" />, Size: 'xl', Price: '$765' },
        //


    ];

    const handleUpdate = (id) => {
        console.log('updated...')
    }
    const handleDelete = (id) => {
        console.log('deleted...')
    }


    return (
        <body class="hold-transition sidebar-mini">
            <div class="wrapper">
                {/* <!-- Navbar --> */}
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* <!-- Left navbar links --> */}
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <Link to={'/'} onClick={RefreshPage} class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="#" class="nav-link">Contact</a>
                        </li>
                    </ul>

                    {/* <!-- Right navbar links --> */}
                    <ul class="navbar-nav ml-auto">
                        {/* <!-- Navbar Search --> */}
                        <li class="nav-item">
                            <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                                <i class="fas fa-search"></i>
                            </a>
                            <div class="navbar-search-block">
                                <form class="form-inline">
                                    <div class="input-group input-group-sm">
                                        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div class="input-group-append">
                                            <button class="btn btn-navbar" type="submit">
                                                <i class="fas fa-search"></i>
                                            </button>
                                            <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        {/* <!-- Messages Dropdown Menu --> */}
                        <li class="nav-item dropdown">
                            <a class="nav-link" data-toggle="dropdown" href="#">
                                <i class="far fa-comments"></i>
                                <span class="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" class="dropdown-item">
                                    {/* <!-- Message Start --> */}
                                    <div class="media">
                                        <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle" />
                                        <div class="media-body">
                                            <h3 class="dropdown-item-title">
                                                Brad Diesel
                                                <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                                            </h3>
                                            <p class="text-sm">Call me whenever you can...</p>
                                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* <!-- Message End --> */}
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    {/* <!-- Message Start --> */}
                                    <div class="media">
                                        <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                                        <div class="media-body">
                                            <h3 class="dropdown-item-title">
                                                John Pierce
                                                <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                                            </h3>
                                            <p class="text-sm">I got your message bro</p>
                                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* <!-- Message End --> */}
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    {/* <!-- Message Start --> */}
                                    <div class="media">
                                        <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                                        <div class="media-body">
                                            <h3 class="dropdown-item-title">
                                                Nora Silvester
                                                <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                                            </h3>
                                            <p class="text-sm">The subject goes here</p>
                                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* <!-- Message End --> */}
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                        </li>
                        {/* <!-- Notifications Dropdown Menu --> */}
                        <li class="nav-item dropdown">
                            <a class="nav-link" data-toggle="dropdown" href="#">
                                <i class="far fa-bell"></i>
                                <span class="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span class="dropdown-item dropdown-header">15 Notifications</span>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <i class="fas fa-envelope mr-2"></i> 4 new messages
                                    <span class="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <i class="fas fa-users mr-2"></i> 8 friend requests
                                    <span class="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <i class="fas fa-file mr-2"></i> 3 new reports
                                    <span class="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                                <i class="fas fa-expand-arrows-alt"></i>
                            </a>
                        </li>
                        {/* <li class="nav-item">
            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                <i class="fas fa-th-large"></i>
            </a>
        </li> */}
                    </ul>
                </nav>
                {/* <!-- /.navbar --> */}

                {/* <!-- Main Sidebar Container --> */}
                <aside class="main-sidebar sidebar-dark-primary elevation-4">
                    {/* <!-- Brand Logo --> */}
                    <Link to={'/'} onClick={RefreshPage} class="brand-link">
                        <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                        <span class="brand-text font-weight-light">ADWAAR</span>
                    </Link>

                    {/* <!-- Sidebar --> */}
                    <div class="sidebar">
                        {/* <!-- Sidebar user (optional) --> */}
                        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div class="image">
                                <img src="../../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div class="info">
                                <a href="#" class="d-block">Eng Bashiir</a>
                            </div>
                        </div>

                        {/* <!-- SidebarSearch Form --> */}
                        <div class="form-inline">
                            <div class="input-group" data-widget="sidebar-search">
                                <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div class="input-group-append">
                                    <button class="btn btn-sidebar">
                                        <i class="fas fa-search fa-fw"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

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


                                <li class="nav-item menu-open">
                                    <a href="#" class="nav-link active">
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
                                            <Link to={'/table/category'} class="nav-link active">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Category</p>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>



                                <li class="nav-item">
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
                                            <Link to={'/example/404'} class="nav-link">
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
                    <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1>Category</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active">Category</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Main content --> */}
                    <section class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">

                                        {/* <!-- /.card-body --> */}
                                    </div>
                                    {/* <!-- /.card --> */}

                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title">DataTable with default features</h3>
                                        </div>
                                        {/* <!-- /.card-header --> */}
                                        <div class="card-body">
                                            <Reusible_data_table columns={columns} data={data} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                                        </div>
                                        {/* <!-- /.card-body --> */}
                                    </div>
                                    {/* <!-- /.card --> */}
                                </div>
                                {/* <!-- /.col --> */}
                            </div>
                            {/* <!-- /.row --> */}
                        </div>
                        {/* <!-- /.container-fluid --> */}
                    </section>
                    {/* <!-- /.content --> */}
                </div>
                {/* <!-- /.content-wrapper --> */}
                <footer class="main-footer">
                    <div class="float-right d-none d-sm-block">
                        <b>Version</b> 3.2.0
                    </div>
                    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
                </footer>

                {/* <!-- Control Sidebar --> */}
                <aside class="control-sidebar control-sidebar-dark">
                    {/* <!-- Control sidebar content goes here --> */}
                </aside>
                {/* <!-- /.control-sidebar --> */}
            </div>
            {/* <!-- ./wrapper --> */}

        </body>
    )
}
