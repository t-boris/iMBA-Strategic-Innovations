import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LecturePage from './pages/LecturePage'
import GlossaryPage from './pages/GlossaryPage'
import QuizPage from './pages/QuizPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lecture/:id" element={<LecturePage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
