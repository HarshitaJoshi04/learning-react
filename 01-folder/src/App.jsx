import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div classname='parent'>
     <Card user="harshita" age={22} img='https://images.unsplash.com/photo-1721331762508-13fe0743499f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Card user="ashu" age={20} img='https://images.unsplash.com/photo-1763411711221-40166c5e20cd?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App  