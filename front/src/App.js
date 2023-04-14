import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import Header from './components/Header'
import FirstPage from './components/FirstPage';
import CatalogCamera from './components/CatalogCamera';
import Root from './Root'
import Admin from './components/Admin'
import CatalogLinse from './components/CatalogLinse';


function App() {

  const router = createBrowserRouter([
    {path:'/', 
    element: <Root />, 
    children:[
      {path:'', element:<FirstPage />},
      {path:'/admin', element:<Admin />},
      {path:'/product-camera', element:<CatalogCamera />},
      {path:'/product-linse', element:<CatalogLinse />},
    ]},
  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
    // <Main></Main>
  );
}

export default App;
