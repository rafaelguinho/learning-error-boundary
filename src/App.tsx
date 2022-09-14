import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ErrorBoundary } from 'react-error-boundary'
import { Users } from './components/Users'
import { ErrorFallback } from './components/ErrorFallback'

function App() {

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* Users will fail to load 50% of the time */}
        <Users />
      </ErrorBoundary>
    </div>
  )
}

export default App
