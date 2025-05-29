import { useState, useEffect } from 'react'
import UserCard from '../components/UserCard'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Simulazione dati API
    const mockUsers = [
      {
        id: 1,
        username: 'mario_rossi',
        email: 'mario.rossi@example.com',
        role: 'Paziente'
      },
      {
        id: 2,
        username: 'dr_bianchi',
        email: 'l.bianchi@example.com',
        role: 'Dottore'
      },
      {
        id: 3,
        username: 'admin',
        email: 'admin@clinica.com',
        role: 'Amministratore'
      }
    ]
    setUsers(mockUsers)
  }, [])

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestione Utenti</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Aggiungi Utente
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default Users