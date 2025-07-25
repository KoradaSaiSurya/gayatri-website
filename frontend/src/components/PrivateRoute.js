import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  if (loading) return <p>Loading...</p>

  return user?.username === 'admin' ? children : <Navigate to="/login" />
}

export default PrivateRoute
