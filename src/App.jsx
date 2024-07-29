import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Signin from './pages/Login/Login'
import Home from './pages/Home/Home'
import Produtos from './pages/Produtos/Produtos'


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
                {/* <Route path='/login' element={loginRedirect(<Signin />)} /> */}
                {/* <Route path='/cadastro' element={loginRedirect(<Signin />)} /> */}
                <Route path='/signin' element={(<Signin />)} />
                <Route path='/home' element={(<Home />)} />
                <Route path='/' element={(<Home />)} />
                <Route path='/produtos' element={(<Produtos />)} />

                {/* {condicao ? seVerdade : falso} */}
                {isAuthenticated ?
                    (
                        <>
                            <Route path='/' Component={Home} />
                            
                            
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