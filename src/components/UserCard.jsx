const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-blue-600">{user.username}</h3>
      <p className="text-gray-600 mt-2">
        <span className="font-medium">Email:</span> {user.email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Ruolo:</span>{' '}
        {user.roles && user.roles.length > 0
          ? user.roles.map(role => role.replace('ROLE_', '')).join(', ')
          : 'N/D'}
      </p>
      <div className="mt-4 flex justify-end space-x-2">
        <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
          Modifica
        </button>
        <button className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200">
          Elimina
        </button>
      </div>
    </div>
  )
}

export default UserCard