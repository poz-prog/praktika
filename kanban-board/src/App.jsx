import { useState } from 'react'
import './App.css'


import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Трекер задач</h1>
        <button>Добавить задачу</button>
      </header>

      <main className="board">
        <div className="column">
          <h2>К выполнению</h2>
        </div>

        <div className="column">
          <h2>В работе</h2>
        </div>

        <div className="column">
          <h2>Готово</h2>
        </div>
      </main>
    </div>
  )
}

export default App