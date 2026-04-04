
import { Routes,Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import './App.css'

function App() {

  return (
    <Routes>
      {/* Layout bọc ngoài cùng làm Route cha */}
      <Route path="/" element={<Layout />}>
      </Route>
    </Routes>
  )
}

export default App
