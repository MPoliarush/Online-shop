import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Main from './Main'
import Header from './components/Header'
import FirstPage from './components/FirstPage';
import CatalogCamera from './components/CatalogCamera';




function App() {

  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>},
    {path:'/productCamera', element:<CatalogCamera />},
   
  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
    // <Main></Main>
  );
}

export default App;
