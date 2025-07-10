import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import { Outlet } from 'react-router-dom'

import './index.css'

function App() {

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default App
