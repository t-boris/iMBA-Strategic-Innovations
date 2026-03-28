import { useState, useMemo } from 'react'
import { Brain, CheckCircle, XCircle, RotateCcw, Play, Trophy, ChevronRight } from 'lucide-react'
import { quizQuestions } from '../data/quiz'

const DIFFICULTY_DIST = { easy: 0.2, medium: 0.5, hard: 0.3 }
const DIFFICULTY_LABELS = { easy: 'Easy', medium: 'Medium', hard: 'Hard' }
const DIFFICULTY_COLORS = {
  easy: 'var(--success)',
  medium: 'var(--warning)',
  hard: 'var(--danger)',
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function selectQuestions(count) {
  const byDiff = { easy: [], medium: [], hard: [] }
  quizQuestions.forEach((q) => byDiff[q.difficulty]?.push(q))

  const picks = []
  for (const [diff, ratio] of Object.entries(DIFFICULTY_DIST)) {
    const n = Math.round(count * ratio)
    const available = shuffle(byDiff[diff])
    picks.push(...available.slice(0, n))
  }

  // Fill remaining if needed
  const remaining = count - picks.length
  if (remaining > 0) {
    const used = new Set(picks.map((p) => p.id))
    const leftover = shuffle(quizQuestions.filter((q) => !used.has(q.id)))
    picks.push(...leftover.slice(0, remaining))
  }

  return shuffle(picks).slice(0, count)
}

function SetupScreen({ onStart }) {
  const [count, setCount] = useState(5)
  const maxQ = quizQuestions.length

  const presets = [5, 10, 15, 20].filter((n) => n <= maxQ)

  return (
    <div>
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-2">
          <Brain size={12} style={{ color: 'var(--warning)' }} />
          <span className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--warning)' }}>
            Quiz
          </span>
        </div>
        <h1 className="text-base font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>
          Test Your Knowledge
        </h1>
        <p className="text-xs" style={{ color: 'var(--text-sec)' }}>
          {maxQ} questions available
        </p>
      </div>

      {/* Count selection */}
      <div
        className="rounded-lg border p-4 mb-4"
        style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div className="text-xs font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Number of Questions
        </div>
        <div className="flex gap-2 mb-3">
          {presets.map((n) => (
            <button
              key={n}
              onClick={() => setCount(n)}
              className="px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
              style={{
                background: count === n ? 'var(--accent)' : 'var(--bg-secondary)',
                color: count === n ? 'white' : 'var(--text-sec)',
              }}
            >
              {n}
            </button>
          ))}
        </div>
        <input
          type="range"
          min={1}
          max={maxQ}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-full accent-indigo-500"
        />
        <div className="text-[10px] mt-1 text-center" style={{ color: 'var(--text-sec)' }}>
          {count} questions
        </div>
      </div>

      {/* Difficulty distribution */}
      <div
        className="rounded-lg border p-4 mb-5"
        style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div className="text-xs font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Difficulty Distribution
        </div>
        <div className="flex gap-3">
          {Object.entries(DIFFICULTY_DIST).map(([diff, ratio]) => (
            <div key={diff} className="flex-1 text-center">
              <div className="text-lg font-bold" style={{ color: DIFFICULTY_COLORS[diff] }}>
                {Math.round(ratio * 100)}%
              </div>
              <div className="text-[10px]" style={{ color: 'var(--text-sec)' }}>
                {DIFFICULTY_LABELS[diff]}
              </div>
              <div className="text-[10px] font-medium" style={{ color: DIFFICULTY_COLORS[diff] }}>
                ~{Math.round(count * ratio)} q
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Start */}
      <button
        onClick={() => onStart(count)}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-90"
        style={{ background: 'var(--accent)' }}
      >
        <Play size={14} />
        Start Quiz
      </button>
    </div>
  )
}

function QuizScreen({ questions, onFinish }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showExplanation, setShowExplanation] = useState(false)

  const q = questions[current]
  const answered = answers[q.id] !== undefined
  const isCorrect = answers[q.id] === q.correct

  const handleAnswer = (optIndex) => {
    if (answered) return
    setAnswers((prev) => ({ ...prev, [q.id]: optIndex }))
    setShowExplanation(true)
  }

  const handleNext = () => {
    setShowExplanation(false)
    if (current < questions.length - 1) {
      setCurrent(current + 1)
    } else {
      onFinish(answers)
    }
  }

  const progress = ((current + (answered ? 1 : 0)) / questions.length) * 100

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] font-medium" style={{ color: 'var(--text-sec)' }}>
          {current + 1}/{questions.length}
        </span>
        <div className="flex-1 h-1 rounded-full" style={{ background: 'var(--bg-secondary)' }}>
          <div
            className="h-1 rounded-full transition-all duration-300"
            style={{ background: 'var(--accent)', width: `${progress}%` }}
          />
        </div>
        <span
          className="text-[9px] px-1.5 py-0.5 rounded font-medium"
          style={{ background: DIFFICULTY_COLORS[q.difficulty], color: 'white' }}
        >
          {DIFFICULTY_LABELS[q.difficulty]}
        </span>
      </div>

      {/* Question */}
      <div
        className="rounded-lg border p-4 mb-3"
        style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <p className="text-xs font-semibold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
          {q.question}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-1.5 mb-4">
        {q.options.map((opt, i) => {
          let borderColor = 'var(--border-color)'
          let bg = 'var(--bg-card)'
          if (answered) {
            if (i === q.correct) {
              borderColor = 'var(--success)'
              bg = 'rgba(16, 185, 129, 0.08)'
            } else if (i === answers[q.id] && i !== q.correct) {
              borderColor = 'var(--danger)'
              bg = 'rgba(239, 68, 68, 0.08)'
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={answered}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border text-left text-xs transition-all"
              style={{ borderColor, background: bg, color: 'var(--text-primary)', opacity: answered && i !== q.correct && i !== answers[q.id] ? 0.5 : 1 }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 border"
                style={{ borderColor: answered && i === q.correct ? 'var(--success)' : 'var(--border-color)', color: 'var(--text-sec)' }}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{opt}</span>
              {answered && i === q.correct && <CheckCircle size={14} style={{ color: 'var(--success)' }} />}
              {answered && i === answers[q.id] && i !== q.correct && <XCircle size={14} style={{ color: 'var(--danger)' }} />}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div
          className="rounded-lg p-3 mb-4 border"
          style={{
            background: isCorrect ? 'rgba(16,185,129,0.06)' : 'rgba(239,68,68,0.06)',
            borderColor: isCorrect ? 'var(--success)' : 'var(--danger)',
          }}
        >
          <div className="flex items-center gap-1 mb-1">
            {isCorrect ? (
              <CheckCircle size={12} style={{ color: 'var(--success)' }} />
            ) : (
              <XCircle size={12} style={{ color: 'var(--danger)' }} />
            )}
            <span className="text-[10px] font-semibold" style={{ color: isCorrect ? 'var(--success)' : 'var(--danger)' }}>
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            {q.explanation}
          </p>
        </div>
      )}

      {/* Next button */}
      {answered && (
        <button
          onClick={handleNext}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: 'var(--accent)' }}
        >
          {current < questions.length - 1 ? (
            <>Next <ChevronRight size={14} /></>
          ) : (
            <>Results <Trophy size={14} /></>
          )}
        </button>
      )}
    </div>
  )
}

function ResultScreen({ questions, answers, onRestart }) {
  const correct = questions.filter((q) => answers[q.id] === q.correct).length
  const total = questions.length
  const pct = Math.round((correct / total) * 100)

  const byDiff = {}
  for (const q of questions) {
    if (!byDiff[q.difficulty]) byDiff[q.difficulty] = { total: 0, correct: 0 }
    byDiff[q.difficulty].total++
    if (answers[q.id] === q.correct) byDiff[q.difficulty].correct++
  }

  let grade, gradeColor
  if (pct >= 90) { grade = 'Excellent!'; gradeColor = 'var(--success)' }
  else if (pct >= 70) { grade = 'Good Job'; gradeColor = 'var(--accent)' }
  else if (pct >= 50) { grade = 'Satisfactory'; gradeColor = 'var(--warning)' }
  else { grade = 'Needs Review'; gradeColor = 'var(--danger)' }

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-6">
        <Trophy size={32} className="mx-auto mb-2" style={{ color: gradeColor }} />
        <h1 className="text-base font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>
          {grade}
        </h1>
        <div className="text-2xl font-bold" style={{ color: gradeColor }}>
          {correct}/{total}
        </div>
        <p className="text-xs" style={{ color: 'var(--text-sec)' }}>
          {pct}% correct
        </p>
      </div>

      {/* Score bar */}
      <div className="mb-5">
        <div className="h-2 rounded-full" style={{ background: 'var(--bg-secondary)' }}>
          <div
            className="h-2 rounded-full transition-all duration-500"
            style={{ background: gradeColor, width: `${pct}%` }}
          />
        </div>
      </div>

      {/* By difficulty */}
      <div
        className="rounded-lg border p-4 mb-5"
        style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div className="text-xs font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          By Difficulty
        </div>
        <div className="space-y-2">
          {Object.entries(byDiff).map(([diff, data]) => (
            <div key={diff} className="flex items-center gap-2">
              <span
                className="text-[9px] px-1.5 py-0.5 rounded font-medium w-16 text-center"
                style={{ background: DIFFICULTY_COLORS[diff], color: 'white' }}
              >
                {DIFFICULTY_LABELS[diff]}
              </span>
              <div className="flex-1 h-1.5 rounded-full" style={{ background: 'var(--bg-secondary)' }}>
                <div
                  className="h-1.5 rounded-full"
                  style={{
                    background: DIFFICULTY_COLORS[diff],
                    width: data.total ? `${(data.correct / data.total) * 100}%` : '0%',
                  }}
                />
              </div>
              <span className="text-[10px] font-medium w-10 text-right" style={{ color: 'var(--text-sec)' }}>
                {data.correct}/{data.total}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Wrong answers review */}
      {questions.filter(q => answers[q.id] !== q.correct).length > 0 && (
        <div className="mb-5">
          <div className="text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
            Mistakes
          </div>
          <div className="space-y-2">
            {questions.filter(q => answers[q.id] !== q.correct).map((q) => (
              <div
                key={q.id}
                className="rounded-lg border p-3"
                style={{ background: 'rgba(239,68,68,0.04)', borderColor: 'var(--border-color)' }}
              >
                <p className="text-[11px] font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                  {q.question}
                </p>
                <p className="text-[10px]" style={{ color: 'var(--danger)' }}>
                  Your answer: {q.options[answers[q.id]]}
                </p>
                <p className="text-[10px]" style={{ color: 'var(--success)' }}>
                  Correct: {q.options[q.correct]}
                </p>
                <p className="text-[10px] mt-1" style={{ color: 'var(--text-sec)' }}>
                  {q.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Restart */}
      <button
        onClick={onRestart}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-90"
        style={{ background: 'var(--accent)' }}
      >
        <RotateCcw size={14} />
        Try Again
      </button>
    </div>
  )
}

export default function QuizPage() {
  const [phase, setPhase] = useState('setup') // 'setup' | 'quiz' | 'results'
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})

  const handleStart = (count) => {
    setQuestions(selectQuestions(count))
    setAnswers({})
    setPhase('quiz')
  }

  const handleFinish = (ans) => {
    setAnswers(ans)
    setPhase('results')
  }

  if (phase === 'setup') return <SetupScreen onStart={handleStart} />
  if (phase === 'quiz') return <QuizScreen questions={questions} onFinish={handleFinish} />
  return <ResultScreen questions={questions} answers={answers} onRestart={() => setPhase('setup')} />
}
