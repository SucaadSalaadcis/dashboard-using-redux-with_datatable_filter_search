import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RefreshPage from '../../../src/RefreshPage'
import { IoIosLogOut } from 'react-icons/io'
import Logout from '../../examples/Logout'
import Reusible_data_table from '../reusible/Reusible_data_table'
import { BrandLogo, Footer, Navbar, SearchForm, UserPanel } from '../reusible/Sidebar'

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

                {/* footer */}
                <Footer />
            </div>
            {/* <!-- ./wrapper --> */}

        </body>
    )
}
