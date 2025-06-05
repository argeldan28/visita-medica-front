import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import axios from 'axios'

const Navbar = () => {
  const location = useLocation()
  

  const isLoggedIn = !!localStorage.getItem('token')

  const links = [
    { path: '/visits', name: 'Visite' },
    { path: '/users', name: 'Utenti' },
    { path: '/roles', name: 'Ruoli' }
  ]

  const handleLogout = async () => {
    try {
      
      await axios.post('http://localhost:8080/api/auth/logout', null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      
      localStorage.removeItem('token')
     
      window.location.reload()
    } catch (err) {
      console.error('Errore durante il logout:', err)
    }
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-blue-600">
            Visita Medica
          </Link>

          <div className="flex items-center space-x-8">
            {isLoggedIn ? (
              <>
                {/* Link visibili solo se loggato */}
                {links.map((link) => (
                  <div key={link.path} className="relative">
                    <Link
                      to={link.path}
                      className={`text-gray-700 hover:text-blue-600 transition-colors ${
                        location.pathname === link.path ? 'text-blue-600' : ''
                      }`}
                    >
                      {link.name}
                    </Link>

                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-[-4px] left-0 h-0.5 w-full bg-blue-600"
                        initial={false}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                  </div>
                ))}

                {/* Logout Icon */}
                <button 
                  onClick={handleLogout} 
                  className="text-red-600 hover:text-red-800 transition-colors"
                  aria-label="Logout"
                >
                  <FaSignOutAlt size={20} />
                </button>
              </>
            ) : (
              // Icona utente se NON loggato
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Login"
              >
                <FaUserCircle size={24} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar