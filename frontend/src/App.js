import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AssetList from './pages/AssetList'
import About from './pages/About'
import AddAsset from './pages/AddAsset'
import EditAsset from './pages/EditAsset'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />                        
            <Route path='/assetlist' element={<AssetList />} />
            <Route path='/addasset' element={<AddAsset />} />
            <Route path='/editasset' element={<EditAsset />} />            
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