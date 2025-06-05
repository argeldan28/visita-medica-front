import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'patient'
  })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Sostituisci con il tuo endpoint API reale
      const response = await axios.post('http://localhost:8080/api/auth/register', formData)
      
      // Mostra il banner di successo
      setSuccess(true)
      setError('')
      
      // Reindirizza al login dopo 3 secondi
      setTimeout(() => {
        navigate('/login')
      }, 3000)
      
    } catch (err) {
      setError(err.response?.data?.message || 'Errore durante la registrazione')
      console.error(err)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow relative">
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-16 left-0 right-0 bg-green-500 text-white p-4 rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-center">
              <span>Account creato con successo! Reindirizzamento al login...</span>
              <button 
                onClick={() => setSuccess(false)}
                className="text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <h1 className="text-2xl font-bold mb-6 text-center">Registrazione</h1>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="role" className="block text-gray-700 mb-2">Ruolo</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="patient">Paziente</option>
            <option value="doctor">Dottore</option>
            <option value="admin">Amministratore</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          disabled={success}
        >
          {success ? 'Registrazione completata!' : 'Registrati'}
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Hai già un account? <Link to="/login" className="text-blue-600 hover:underline">Accedi</Link>
      </p>
    </div>
  )
}

export default Register