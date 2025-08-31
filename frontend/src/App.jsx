// App.tsx
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Templates from './pages/Templates'
import Contacts from './pages/Contacts'
import Campaigns from './pages/Campaigns'
import CreateCampaign from './pages/CreateCampaign'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/landing" element={<LandingPage />} />

        {/* Dashboard + nested routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/campaigns/new" element={<CreateCampaign />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}

export default App
