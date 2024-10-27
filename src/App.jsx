import React, { Suspense } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contactstack from './components/ContactMedia/Contactstack'
import Cursor from './components/animations/Cursor'

const App = () => {
    return <>
        <Router>
        <Cursor/>
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