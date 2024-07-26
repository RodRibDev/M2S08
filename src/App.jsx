import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Signin from './pages/Login/Login'
import Home from './pages/Home/Home'


function App() {

  const isAuthenticated = true
    function loginRedirect(component) {
        if (isAuthenticated) {
            return <Navigate to='/home' replace />
        }

        return component
    }

    return (
        <>
        <Router>
            <Routes>
                <Route path='/login' element={loginRedirect(<Signin />)} />
                <Route path='/cadastro' element={loginRedirect(<Signin />)} />

                {/* {condicao ? seVerdade : falso} */}
                {isAuthenticated ?
                    (
                        <>
                            <Route path='/' Component={Home} />
                            <Route path='/home' Component={Home} />
                            
                        </>
                    )
                    : (
                        <>
                            <Route path='*' element={<Navigate replace to='/login' />} />
                        </>
                    )
                }
            </Routes>
        </Router>
        </>
  )
}
export default App