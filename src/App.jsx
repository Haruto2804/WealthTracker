
import { Routes,Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import './App.css'
import Dashboard from './pages/DashboardPage/Dashboard'
import Transaction from './pages/TransactionPage/Transaction'
import Asset from './pages/AssetPage/Asset'
import Report from './pages/ReportPage/Report'
import Login from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'


function App() {

  return (
    <Routes>
      {/* Layout bọc ngoài cùng làm Route cha */}
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element = {<Dashboard />}/>
        <Route path = "/transaction" element = {<Transaction />}/>
        <Route path='/asset' element={<Asset />}/>
        <Route path='/report' element={<Report />}/>
        <Route path='login' element={<Login/>}/>
        <Route path = '*' element={<NotFoundPage />}/>
      </Route>
    </Routes>
  )
}

export default App
