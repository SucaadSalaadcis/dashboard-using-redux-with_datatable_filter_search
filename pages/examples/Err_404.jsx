import React from 'react'
import { Link } from 'react-router-dom'
import RefreshPage from '../../src/RefreshPage'
import { IoIosLogOut } from 'react-icons/io'
import Logout from './Logout'
import { BrandLogo, Content_Header, Footer, Navbar, SearchForm, UserPanel } from '../tables/reusible/Sidebar'

export default function Err_404() {
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



                <li class="nav-item menu-open">
                  <a href="#" class="nav-link active">
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
          <Content_Header title={'404 Error Page'} link={'Home'} />

          {/* <!-- Main content --> */}
          <section class="content">
            <div class="error-page">
              <h2 class="headline text-warning"> 404</h2>

              <div class="error-content">
                <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

                <p>
                  We could not find the page you were looking for.
                  Meanwhile, you may <a href="../../index.html">return to dashboard</a> or try using the search form.
                </p>

                <form class="search-form">
                  <div class="input-group">
                    <input type="text" name="search" class="form-control" placeholder="Search" />

                    <div class="input-group-append">
                      <button type="submit" name="submit" class="btn btn-warning"><i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                  {/* <!-- /.input-group --> */}
                </form>
              </div>
              {/* <!-- /.error-content --> */}
            </div>
            {/* <!-- /.error-page --> */}
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
