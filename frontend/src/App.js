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
import Departments from './pages/Departments'
import UpdateDepartment from './pages/UpdateDepartment'
import CreateDepartment from './pages/CreateDepartment'
import Locations from './pages/Locations'
import UpdateLocation from './pages/UpdateLocation'
import CreateLocation from './pages/CreateLocation'
import Employees from './pages/Employees'
import UpdateEmployee from './pages/UpdateEmployee'
import CreateEmployee from './pages/CreateEmployee'
import EmployeeDetails from './pages/EmployeeDetails'
import EventHistory from './pages/EventHistory'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AssetDetails from './pages/AssetDetails'
import UpdateAssetStatus from './pages/UpdateAssetStatus'


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

            <Route path='/locations' element={<PrivateRoute />} >             
            <Route path='/locations' element={<Locations />} />                                    
            </Route>            
            <Route path='/updatelocation/:locationId' element={<PrivateRoute />} >             
            <Route path='/updatelocation/:locationId' element={<UpdateLocation />} />                                    
            </Route>
            <Route path='/createlocation' element={<PrivateRoute />} >             
            <Route path='/createlocation' element={<CreateLocation />} />                                    
            </Route> 

            <Route path='/departments' element={<PrivateRoute />} >             
            <Route path='/departments' element={<Departments />} />                                    
            </Route>            
            <Route path='/updatedepartment/:departmentId' element={<PrivateRoute />} >             
            <Route path='/updatedepartment/:departmentId' element={<UpdateDepartment />} />                                    
            </Route>
            <Route path='/createdepartment' element={<PrivateRoute />} >             
            <Route path='/createdepartment' element={<CreateDepartment />} />                                    
            </Route> 
           

            <Route path='/employees' element={<PrivateRoute />} >             
            <Route path='/employees' element={<Employees />} />                                    
            </Route>            
            <Route path='/updateemployee/:employeeId' element={<PrivateRoute />} >             
            <Route path='/updateemployee/:employeeId' element={<UpdateEmployee />} />                                    
            </Route>
            <Route path='/createemployee' element={<PrivateRoute />} >             
            <Route path='/createemployee' element={<CreateEmployee />} />                                    
            </Route>                         
            <Route path='/employee/:employeeId' element={<PrivateRoute />} >             
            <Route path='/employee/:employeeId' element={<EmployeeDetails />} />                                    
            </Route> 

            <Route path='/assetlist' element={<PrivateRoute />} >
            <Route path='/assetlist' element={<AssetList/>} />
            </Route>
            <Route path='/addasset' element={<PrivateRoute />} >
              <Route path='/addasset' element={<AddAsset/>} />
            </Route>
            <Route path='/assetdetails/:assetId' element={<PrivateRoute />} >
              <Route path='/assetdetails/:assetId' element={<AssetDetails/>} />
            </Route>
            <Route path='/eventhistory/:assetId' element={<PrivateRoute />} >
              <Route path='/eventhistory/:assetId' element={<EventHistory/>} />
            </Route>            
            <Route path='/editasset/:assetId' element={<PrivateRoute />} >            
              <Route path='/editasset/:assetId' element={<EditAsset />} />            
            </Route>
            <Route path='/updateassetstatus/:assetId' element={<PrivateRoute />} >            
              <Route path='/updateassetstatus/:assetId' element={<UpdateAssetStatus />} />            
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