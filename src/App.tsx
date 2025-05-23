import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
