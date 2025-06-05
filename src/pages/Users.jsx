import { useState, useEffect } from 'react'
import axios from 'axios'
import UserCard from '../components/UserCard'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        console.error('Errore durante il fetch degli utenti:', error)
      })
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
