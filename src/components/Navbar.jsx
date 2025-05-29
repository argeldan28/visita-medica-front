import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const location = useLocation()
  const links = [
    { path: '/visits', name: 'Visite' },
    { path: '/users', name: 'Utenti' },
    { path: '/roles', name: 'Ruoli' },
    { path: '/login', name: 'Login' }
  ]

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-blue-600">Visita Medica</Link>
          
          <div className="flex space-x-8 relative">
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
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar