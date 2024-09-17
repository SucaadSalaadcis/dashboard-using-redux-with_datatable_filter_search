import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RefreshPage from '../../../src/RefreshPage'
import { IoIosLogOut } from 'react-icons/io'
import { BsEmojiFrown } from "react-icons/bs";
import Logout from '../../../pages/examples/Logout'
import './Products.css';
import data from './data'
import FilterButtons from '../../tables/reusible/FilterButtons'

const Products = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  // pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPartPage, setItemsPartPage] = useState(8);
  const [filteredItems, setFilteredItems] = useState([]);
  // console.log(filteredItems);

  // Filter data based on the button value (e.g., 'all', 'shoes', etc.)
  const handleFilter = (value) => {
    if (value === 'all') {
      setFilteredItems(data); // Show all items
    } else {
      // Filter items based on the selected value (e.g., 'shoes', 'bags')
      const filterItems = data.filter(item => item.category === value);
      setFilteredItems(filterItems)
      setcurrentPage(1)
    }
  };

  useEffect(() => {
    setFilteredItems(data);
  }, []);


  // all buttons
  const allButtons = [
    { label: 'Tshirt', value: 'tshirt', count: 300, badgeClass: 'bg-success', iconClass: 'fas fa-tshirt', text: "text-primary"},
    { label: 'Bag', value: 'bag', count: 891, badgeClass: 'bg-purple', iconClass: 'fas fa-shopping-bag', text: "text-warning" },
    { label: 'Dress', value: 'dress', count: 67, badgeClass: 'bg-teal', iconClass: 'fas fa-user', text: "text-pink" },
    { label: 'Shoes', value: 'shoes', count: 12, badgeClass: 'bg-info', iconClass: 'fas fa-shoe-prints', text: 'text-green'},
    { label: 'All', value: 'all', count: 542, badgeClass: 'bg-danger', iconClass: 'fas fa-heart', text: 'text-red' },
  ];

  // pagination 
  const indexOfLastItem = currentPage * itemsPartPage; // 1*8 = 8
  const indexOfFirstItem = indexOfLastItem - itemsPartPage; // 8-8 = 0
  const currentItem = filteredItems.slice(indexOfFirstItem, indexOfLastItem);  // 0,7
  const paginate = (pageNumber) => setcurrentPage(pageNumber); // 

  // console.log(Math.ceil(filteredItems.length/8)); // mydata/8 = 1.375 ceil(1.375) = 2
  // indicating that 2 pages are needed to display the 11 items when each page can hold up to 8 items.
  // console.log(Array.from({ length: Math.ceil(filteredItems.length / 8) })) // (2) [undefined, undefined] the page number





  // Filter data based on the search query
  const searchData = filteredItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  console.log(searchQuery); // the search data
  // Use searchData if searching, else use all products
  const displayData = searchQuery.length > 0 ? searchData : currentItem;



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
                      <Link to={'/table/user'} class="nav-link ">
                        <i class="far fa-circle nav-icon"></i>
                        <p>UserManagement</p>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={'/table/products'} class="nav-link active">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Products</p>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={'/table/category'} class="nav-link ">
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
                  <h1>Products</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Products</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Main content --> */}
          <section class="content">
            <div class="container-fluid">

              {/* FilterButtons component */}
              <div className='' >
                <FilterButtons buttons={allButtons} onFilter={handleFilter} />
              </div>

              {/* search input */}
              <div class="container mt-2">
                <div class="row">
                  <div class="col-12 d-flex justify-content-end">
                    <div class="input-group mb-4" style={{ maxWidth: "400px" }}>
                      <input type="search" class="form-control form-control-md" placeholder="Search" aria-label="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />


                    </div>
                  </div>
                </div>
              </div>

              {/* products */}


              <div className="product-grid pb-3">
                {displayData.length > 0 ? (
                  displayData.map((product) => (
                    <div key={product.index} className="product-card">
                      <img src={product.image} alt={product.name} className="product-image" />
                      <h5 className="product-name">{product.name}</h5>
                      <div className="product-rating">
                        {Array(product.rating).fill().map((_, i) => (
                          <span key={i} className="star">&#9733;</span>
                        ))}
                        <span className="rating-number">{product.rating}</span>
                      </div>
                      <div className="product-pricing">
                        <span className="product-price">${product.price}</span>
                        <span className="original-price">${product.originalPrice}</span>
                      </div>

                    </div>
                  ))
                ) : (
                  <>
               
                    <p style={{color: 'red', fontSize: '25px'}}>No products found <BsEmojiFrown style={{fontSize: '30px', marginTop: 'px'}}/></p>
                    
                  </>
                )}

              </div>

              {/* pagination */}
              <div className="d-flex justify-content-center">
                {
                  // Array.from():This creates an array with a length equal to the number of pages (2 in this case).
                  // legth: 2
                  // The array will be filled with undefined values, but the length of the array will be equal to the number of pages needed.
                  Array.from({ length: Math.ceil(filteredItems.length / itemsPartPage) }).map((_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)}
                      style={{ width: "50px", height: "50px", marginBottom: '10px' }}
                      className={`btn btn-primary rounded-circle  ${currentPage === index + 1 ? "btn btn-primary text-white" : "btn btn-warning"}`}
                    >
                      {index + 1}
                      {/* page1 */}
                    </button>
                  ))
                }
              </div>

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
  );
};

export default Products;
