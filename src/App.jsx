import { Route, Routes } from 'react-router-dom'

import Index from '../Index'

// layout
import Fixed_top_nav from '../pages/layout/Fixed_top_nav'
import Fixed_sidebar from '../pages/layout/Fixed_sidebar'
import Fixed_footer from '../pages/layout/Fixed_footer'
import Collapsed_sidebar from '../pages/layout/Collapsed_sidebar'
import Boxed from '../pages/layout/Boxed'

// charts
import Chartjs from '../pages/charts/Chartjs'
import Inline from '../pages/charts/Inline'
import Uplot from '../pages/charts/uplot'

// tables
import Users from '../pages/tables/userManage/Users'
import Products from '../pages/tables/products/Products'


// examples
import Err_404 from '../pages/examples/Err_404'
import Forgot_password_v2 from '../pages/examples/Forgot_password_v2'
import Login_v2 from '../pages/examples/Login_v2'
import Recover_password_v2 from '../pages/examples/Recover_password_v2'
import Register_v2 from '../pages/examples/Register_v2'


import { Toaster } from 'react-hot-toast';
import Category from '../pages/tables/products/Category'

export default function App() {
  return (
    <>
      <Routes>
        {/* home */}
        <Route path='/' element={<Index />} />


        {/* layouts */}

        <Route path='/layout/fixed_top_nav' element={<Fixed_top_nav />} />
        <Route path='/layout/fixed_sidebar' element={<Fixed_sidebar />} />
        <Route path='/layout/fixed_footer' element={<Fixed_footer />} />

        <Route path='/layout/collapsed_sidebar' element={<Collapsed_sidebar />} />
        <Route path='/layout/boxed' element={<Boxed />} />

        {/* charts */}
        <Route path='/chartjs' element={<Chartjs />} />
        <Route path='/charts/inline' element={<Inline />} />
        <Route path='/charts/uplot' element={<Uplot />} />


        {/* tables */}
        <Route path='/table/user' element={<Users />} />
        <Route path='/table/products' element={<Products />} />
        <Route path='/table/category' element={<Category />} />

        {/* exmaple */}
        <Route path='/example/404' element={<Err_404 />} />
        <Route path='/example/forgot_password_v2' element={<Forgot_password_v2 />} />
        <Route path='/example/login_v2' element={<Login_v2 />} />
        <Route path='/example/recover_password_v2/:token' element={<Recover_password_v2 />} />
        <Route path='/example/register_v2' element={<Register_v2 />} />



      </Routes>

      <Toaster />

    </>
  )
}
