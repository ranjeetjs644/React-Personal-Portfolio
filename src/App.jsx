import React, { Suspense } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contactstack from './components/ContactMedia/Contactstack'

const App = () => {
    return <>
        <Router>
            <Header />
            <Contactstack />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Suspense>
        </Router>
    </>
}

export default App