import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Sistema di Gestione Visite Mediche</h1>
      <p className="text-xl text-gray-600 mb-8">
        Una soluzione completa per la gestione di pazienti, dottori e visite
      </p>
      <div className="flex justify-center space-x-4">
        <Link 
          to="/visits" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Gestisci Visite
        </Link>
        <Link 
          to="/users" 
          className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Gestisci Utenti
        </Link>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Pazienti</h3>
          <p className="text-gray-600">Gestisci i pazienti e le loro informazioni</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Dottori</h3>
          <p className="text-gray-600">Organizza il personale medico</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Visite</h3>
          <p className="text-gray-600">Pianifica e monitora le visite</p>
        </div>
      </div>
    </div>
  )
}

export default Home