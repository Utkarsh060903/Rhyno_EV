import React from 'react'
import {Routes,Route} from 'react-router-dom'
import InfoPage from './Pages/InfoPage/InfoPage.jsx'
import SideBar from './Components/SideBar/SideBar.jsx'

const App = () => {
  return (
    <div>
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path='/info' element={<InfoPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
