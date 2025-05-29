import { useState, useEffect } from 'react'
import VisitCard from '../components/VisitCard'

const Visits = () => {
  const [visits, setVisits] = useState([])

  useEffect(() => {
    // Qui dovresti fare una chiamata API per ottenere le visite
    const mockVisits = [
      {
        id: 1,
        type: 'Check-up',
        date: '2023-06-15',
        time: '10:00',
        patient: 'Mario Rossi',
        doctor: 'Luigi Bianchi'
      },
      {
        id: 2,
        type: 'Radiografia',
        date: '2023-06-16',
        time: '11:30',
        patient: 'Anna Verdi',
        doctor: 'Luigi Bianchi'
      }
    ]
    setVisits(mockVisits)
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Lista Visite</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visits.map(visit => (
          <VisitCard key={visit.id} visit={visit} />
        ))}
      </div>
    </div>
  )
}

export default Visits