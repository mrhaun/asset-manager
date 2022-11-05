import { FaDatabase, FaSignInAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
    return (
      <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content '>
          <div className='container mx-auto'>
              <div className='flex-none px-2 mx-2'>
                
                <FaDatabase className='inline pr-2 text-3xl' />
                <Link to='/' className='text-lg font-bold align-middle'>{title}</Link> 
              </div>
              <div className="flex-1 px-2 mx-2">
                  <div className="flex justify-end">
                      <Link to='/login' className='btn btn-ghost btn-sm rounded-btn'>
                          <FaSignInAlt />Login
                      </Link>
                      <Link to='/register' className='btn btn-ghost btn-sm rounded-btn'>
                          <FaUser />Register
                      </Link>                      
                      <Link to='/assetlist' className='btn btn-ghost btn-sm rounded-btn'>
                        Asset List
                      </Link>
                      <Link to='/addasset' className='btn btn-ghost btn-sm rounded-btn'>
                          Add Asset
                      </Link>                      
                      <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                          About
                      </Link>                      
                  </div>
              </div>
          </div>
      </nav>
    );
  }

  Navbar.defaultProps ={
    title: 'asset-manager'
  }

  Navbar.propTypes = {
      title: PropTypes.string,
  }

  export default Navbar;
  