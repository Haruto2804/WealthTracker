
import { Routes,Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import './App.css'
import Dashboard from './pages/DashboardPage/Dashboard'

function App() {

  return (
    <Routes>
      {/* Layout bọc ngoài cùng làm Route cha */}
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element = {<Dashboard />}/>
      </Route>
    </Routes>
  )
}

export default App
