import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SummeryCalc from './pages/SummeryCalc';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/summery' element={<SummeryCalc />} />
      </Routes>



    </>
  )
}

export default App