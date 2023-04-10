import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import Header from './components/Header'
import FirstPage from './components/FirstPage';
import CatalogCamera from './components/CatalogCamera';
import Root from './Root'



function App() {

  const router = createBrowserRouter([
    {path:'/', 
    element: <Root />, 
    children:[
      {path:'', element:<FirstPage />},
      {path:'/product-camera', element:<CatalogCamera />},
    ]},
  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
    // <Main></Main>
  );
}

export default App;
