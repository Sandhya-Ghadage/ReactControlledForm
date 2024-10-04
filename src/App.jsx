import { useState } from 'react'
import './App.css';

import { ReactForm } from './components/ReactForm';
import { UseRefForm } from './components/UseRefForm';
import { RefForm } from './components/RefForm';

function App() {

  return (
    <>
      <ReactForm/>
      <UseRefForm/>
      <RefForm/>
    </>
  )
}

export default App
