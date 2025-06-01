import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  const location = useLocation()

  // 🔐 Simula lo stato login (sostituisci con uno stato reale o context)
  const isLoggedIn = false; // Cambia a false per testare l'altra vista

  localStorage.setItem('token', response.data.token);

  axios.get('/api/users', {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

  const links = [
    { path: '/visits', name: 'Visite' },
    { path: '/users', name: 'Utenti' },
    { path: '/roles', name: 'Ruoli' }
  ]

  const handleLogout = () => {
    // qui puoi inserire il logout reale
    console.log("Logout effettuato")
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
                <button onClick={handleLogout} className="text-red-600 hover:text-red-800 transition-colors">
                  <FaSignOutAlt size={20} title="Logout" />
                </button>
              </>
            ) : (
              // Icona utente se NON loggato
              <Link to="/login" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FaUserCircle size={24} title="Login" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
