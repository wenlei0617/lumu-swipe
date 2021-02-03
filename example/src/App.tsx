import React from 'react'
import '@lumu/swipe/dist/index.css'
import Basic from './Basic'
import Change from './Change'
import Vertical from './Vertical'
import InitialSwipe from './InitialSwipe'
import Api from './Api'

const App = () => {
  return (
    <React.Fragment>
      <Basic/>
      <Change/>
      <InitialSwipe/>
      <Vertical/>
      <Api/>
    </React.Fragment>
  )
}

export default App
