import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import MeatSort from './pages/MeatSort'
import NotFound from './pages/NotFound'
import AssetList from './pages/AssetList'
import About from './pages/About'
import AddAsset from './pages/AddAsset'
import EditAsset from './pages/EditAsset'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Categories from './pages/Categories'
import UpdateCategory from './pages/UpdateCategory'
import CreateCategory from './pages/CreateCategory'
import Brands from './pages/Brands'
import UpdateBrand from './pages/UpdateBrand'
import CreateBrand from './pages/CreateBrand'
import Sites from './pages/Sites'
import UpdateSite from './pages/UpdateSite'
import CreateSite from './pages/CreateSite'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AssetDetails from './pages/AssetDetails'


function App() {
  return (
    <>
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/meatsort' element={<MeatSort />} />                        
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/settings' element={<PrivateRoute />} >             
            <Route path='/settings' element={<Settings />} />                                    
            </Route>
            <Route path='/categories' element={<PrivateRoute />} >             
            <Route path='/categories' element={<Categories />} />                                    
            </Route>            
            <Route path='/updatecategory/:categoryId' element={<PrivateRoute />} >             
            <Route path='/updatecategory/:categoryId' element={<UpdateCategory />} />                                    
            </Route>
            <Route path='/createcategory' element={<PrivateRoute />} >             
            <Route path='/createcategory' element={<CreateCategory />} />                                    
            </Route>                                      
            <Route path='/brands' element={<PrivateRoute />} >             
            <Route path='/brands' element={<Brands />} />                                    
            </Route>            
            <Route path='/updatebrand/:brandId' element={<PrivateRoute />} >             
            <Route path='/updatebrand/:brandId' element={<UpdateBrand />} />                                    
            </Route>
            <Route path='/createbrand' element={<PrivateRoute />} >             
            <Route path='/createbrand' element={<CreateBrand />} />                                    
            </Route>                 
            <Route path='/sites' element={<PrivateRoute />} >             
            <Route path='/sites' element={<Sites />} />                                    
            </Route>            
            <Route path='/updatesite/:siteId' element={<PrivateRoute />} >             
            <Route path='/updatesite/:siteId' element={<UpdateSite />} />                                    
            </Route>
            <Route path='/createsite' element={<PrivateRoute />} >             
            <Route path='/createsite' element={<CreateSite />} />                                    
            </Route>                                               
            <Route path='/assetlist' element={<AssetList />} />
            <Route path='/addasset' element={<PrivateRoute />} >
              <Route path='/addasset' element={<AddAsset/>} />
            </Route>
            <Route path='/assetdetails/:assetId' element={<PrivateRoute />} >
              <Route path='/assetdetails/:assetId' element={<AssetDetails/>} />
            </Route>
            <Route path='/editasset' element={<PrivateRoute />} >            
              <Route path='/editasset' element={<EditAsset />} />            
            </Route>
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/about' element={<About />} />                                    
            <Route path='/*' element={<NotFound />} />                                    
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    <ToastContainer />
    </>

  );
}

export default App;