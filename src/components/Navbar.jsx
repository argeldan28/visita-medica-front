import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-blue-600">Visita Medica</Link>
        <div className="flex space-x-4">
          <Link to="/visits" className="text-gray-700 hover:text-blue-600">Visite</Link>
          <Link to="/users" className="text-gray-700 hover:text-blue-600">Utenti</Link>
          <Link to="/roles" className="text-gray-700 hover:text-blue-600">Ruoli</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar