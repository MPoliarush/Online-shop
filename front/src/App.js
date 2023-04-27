import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import FirstPage from './components/FirstPage';
import CatalogCamera from './components/Catalogs/CatalogCamera';
import Root from './Root'
import Admin from './components/Admin/Admin'
import AdminAdd from './components/Admin/AdminAdd'
import AdminCart from './components/Admin/AdminCart'
import CatalogLinse from './components/Catalogs/CatalogLinse';
import ProductPage from './components/Catalogs/ProductPage'
import OrderCart from './components/Header/OrderCart'
import Confirmation from './components/Header/Confirmation';
import Login from './components/Header/Login/Login';

function App() {

  const router = createBrowserRouter([
    {path:'/', 
    element: <Root />, 
    children:[
      {path:'', element:<FirstPage />},
      {path:'/login', element:<Login />},
      {path:'/orders', element:<OrderCart />},
      {path:'/orders/confirmation', element:<Confirmation />},
      {path:'/admin', element:<Admin />},
      {path:'/admin/add', element:<AdminAdd/>},
      {path:'/admin/view/:id', element:<AdminCart/>},
      {path:'/cameras', element:<CatalogCamera />},
      {path:'/cameras/view/:id', element:<ProductPage/>},
      {path:'/linses/view/:id', element:<ProductPage/>},
      {path:'/linses', element:<CatalogLinse />},
    ]},
  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
    // <Main></Main>
  );
}

export default App;
