import { useState } from 'react';
import Header from './components/Header'
import FirstPage from './components/FirstPage';
import CatalogCamera from './components/CatalogCamera';


function Main(props){


    return(
        <div className="App">
                <div className='content-container'>
                    <Header></Header>
                </div>
                <FirstPage></FirstPage>
                
              
        </div>

    )
}

export default Main