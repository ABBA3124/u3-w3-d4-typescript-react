import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage'
import ArticlePage from './routes/ArticlePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  )
}

export default App
