import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RefreshPage from '../../../src/RefreshPage'
import { IoIosLogOut } from 'react-icons/io'
import { BsEmojiFrown } from "react-icons/bs";
import Logout from '../../../pages/examples/Logout'
import './Products.css';
import data from './data'
import FilterButtons from '../../tables/reusible/FilterButtons'
import { BrandLogo, Content_Header, Footer, Navbar, SearchForm, UserPanel } from '../reusible/Sidebar';

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
    { label: 'Tshirt', value: 'tshirt', count: 300, badgeClass: 'bg-success', iconClass: 'fas fa-tshirt', text: "text-primary" },
    { label: 'Bag', value: 'bag', count: 891, badgeClass: 'bg-purple', iconClass: 'fas fa-shopping-bag', text: "text-warning" },
    { label: 'Dress', value: 'dress', count: 67, badgeClass: 'bg-teal', iconClass: 'fas fa-user', text: "text-pink" },
    { label: 'Shoes', value: 'shoes', count: 12, badgeClass: 'bg-info', iconClass: 'fas fa-shoe-prints', text: 'text-green' },
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
  // console.log(searchQuery); // the search data
  
  // Use searchData if searching, else use all products
  const displayData = searchQuery.length > 0 ? searchData : currentItem;



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
          <Content_Header title={'Products'} link={'Home'} />

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

                    <p style={{ color: 'red', fontSize: '25px' }}>No products found <BsEmojiFrown style={{ fontSize: '30px', marginTop: 'px' }} /></p>

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

        {/* footer */}
        <Footer />

      </div>
      {/* <!-- ./wrapper --> */}

    </body>
  );
};

export default Products;
