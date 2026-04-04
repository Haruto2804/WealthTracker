import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      {/* Layout bọc ngoài cùng làm Route cha */}
      <Route path="/" element={<Layout />}>

        {/* Route mặc định khi vào trang chủ (path "/") */}
        <Route index element={<Home />} />

        {/* Các Route con (path "/products" và "/contact") */}
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />

      </Route>
    </Routes>
  )
}

export default App
